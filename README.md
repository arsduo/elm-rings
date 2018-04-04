# elm-rings

_Programmatically capture the state of your Elm application as your users use it_

If you've ever received a support ticket, you've probably seen something like this: "Carmen M. can't complete her quiz, it's not affecting any other students". Great. Was she unable to select answers to the questions? Able to answer but the submit button stays disabled? Able to tap submit but to no avail?

Users don’t submit detailed or complete error reports because they don’t experience or describe an app the same way its developers do. Nor should they! They have better things to do than learn our lingo.

What if we could see our apps through our users’ eyes?

With [the Elm language](http://elm-lang.org), we can. One of the most amazing features of that language is its powerful debugger. Because all the possible states of an Elm program are defined and state only changes in response to messages, Elm can track everything that happens -- and make it available to you to debug.

Elm doesn't natively provide an interface to extract this data programmatically, but don't worry: that's where ElmRings comes in. **ElmRings is a lightweight, dependency-free library** that lets you record and process the command history of your app as your users use it. Upload and store this info and presto! Now when you get a confusing support ticket, you can download the history and see your app through your users' eyes.

<img src="https://user-images.githubusercontent.com/48325/38286735-7b1be558-378c-11e8-97b4-6b95ff37946c.gif" width="600" />

**Make sure to read the Caveats section below.**

## Installation and Usage

Installing `elm-rings` is pretty straightforward:

```
yarn add elm-rings
# or
npm install elm-rings
```

And add code like this to your application wherever you initialize the Elm app you want to listen to:

```javascript
import ElmRings from "javascript/ElmRings.js";

// IMPORTANT: the Elm app must be compiled with debug mode enabled for this to work
// That said, ElmRings won't crash if debug mode is off, so you could run it for every users
// and have a server-side flag for who gets debug mode and who gets normal Elm (as we do)
const app = Elm.MyApp.fullscreen();

const elmHistoryRecorder = new ElmRings({
  // whether users shoud be allowed to download/export the history on their own
  // default: true
  allowDownload: true,
  // if you'd like to capture history on an interval, you can set this value in milliseconds and ElmRings will automatically report appropriately
  // if set to a falsy value (false, null, 0, etc.) history will only be exported when you explicitly call `exportHistory`
  // default: 60000 (e.g. 60 seconds)
  trackingFrequency: 30000,
  // a function that determines whether to record the history at any given point. (You may choose to only record it under certain circumstances, such as a user being logged in.)
  // default: true (always record)
  shouldSendHistory: isUserLoggedIn,
  // a function that's called each time ElmRings grabs the Elm history
  // send it to a server, process it locally, whatever you'd like
  storeHistory: historyDataAsJsonString => {
    sendToServer(historyDataAsJsonString);
  }
});

// start tracking history
recorder.startTracking();

// manually trigger a history export, which will be passed to the function you specify in storeHistory
recorder.exportHistory();
```

## Example

Want to see ElmRings in action? Check out [this site](to be determined) to see how you can use ElmRings to capture and display an Elm app's history. This is all in the browser (no backend), but you can imagine how you could send the data to your server and display the results on a support page if you'd like.

To run the example locally:

1.  Check out the repo
2.  Run `yarn install && elm-package install`
3.  Run `yarn example`
4.  Visit [http://localhost:8080](http://localhost:8080)

The example in action:

<img src="https://user-images.githubusercontent.com/48325/38286776-be7899d6-378c-11e8-97ae-f789992cac50.gif" width="600" />

## Caveats

Of course, there are caveats.

The biggest one — the reason you shouldn't rush out to implement this for everyone right now — are the **security risks**. Exposing all the internals of your app and the complete history of a user's session carries big risks.

Every keystroke of a user's password or the sensitive personal information they enter in your app go into the history; with debug mode enabled, **any Javascript on your page** could click the button and grab that info. (Plus, you need to sanitize and secure these histories properly when stored — it's no good hashing passwords on the user model if another table contains them in plain text.) See **Sanitizing Incoming Data** below.

Depending on your app, there may also be **performance implications** to using debug mode. I haven’t measured when those would occur, but if you're designing a game or an app that would have hundreds or thousands or yet more entries for the average user session, the amount of data processed and stored in memory might severely impede performance.

Given those two caveats, you may well decide, like us, to only capture state for particular users. It's on for everyone in our first few classrooms, but we’ll gate it behind a feature flag as we roll out eSpark 5.0 more generally. The big drawback of that approach, of course, is that we can't proactively know who will encounter an error — it'll be difficult to capture info on hard-to-reproduce problems.

Finally, there's one issue that's both obvious and worth stating explicitly: **the Elm history only captures what happens in Elm**. If your app is all Elm, you're golden; if like us, though, you do fun things like in-browser video recording with WebRTC (more on that soon), integrate with third-party Javascript libraries, or for depend on significant JS functionality for any reason, you'll have blind spots in your log. For this and many many other reasons, the more you can put in Elm, the better.

## Sanitizing Incoming Data

Every keystroke of a user's password or the sensitive personal information they enter in your app go into the Elm history and thus, with ElmRings, potentially into your database. **Be careful you don't accidentally expose critical user information** -- it's no good hashing passwords on the user model if another table contains them in plain text. (Plus, with debug mode enabled, any Javascript you load on your page could click the button and grab the history.)

The safest approach is to sanitize the history data before it ever leaves your user's machine, but you can also do this on the backend; different languages and frameworks will have tools you can use to clean the incoming data. Here's an example of what to do if you're using Rails as your backend:

```ruby
# in application.rb, add the appropriate parameter to Rails' built-in log filtering to ensure all the data doesn't get written to the log
# you could, alternatively, add all the individual fields you want to sanitize (password, token, US social security number, etc.) if you do want the history in the log
# but that does create a lot of data/noise in your logs over time
config.filter_parameters += [:elm_history]

# in your controller
def store_history
  # Silencing Active::Record logging is important if you record SQL queries in the environment you're running in
  # both for security and (often more pressingly in development) to keep your logs manageable
  old_logger = ActiveRecord::Base.logger
  begin
    old_logger.info "ActiveRecord logging disabled for app state log"
    ActiveRecord::Base.logger = nil

    history_data = params.require(:elm_history)

    # You can use where().first_or_initialize if you'd like to only track one history record per user/etc.
    history_record = ElmHistoryModel.new(some_params)

    # sanitize the incoming data before it goes in the database
    sanitizer = ActionDispatch::Http::ParameterFilter.new(Rails.application.config.filter_parameters)
    history_record.data = sanitizer.filter(history_data)

    # save the record, send back whatever response you'd like
    history_record.save!
    render json: {result: "stored"}
  ensure
    ActiveRecord::Base.logger = old_logger
  end
end
```

Of course, storing the data in a sanitized format _does_ limit your ability to import it into your app for debugging. One solution (which we're pursuing) is a limited history rehydrator that will insert temporary access tokens on demand for our support team. (You could encrypt the history in a reversible way in the database, though I don't feel comfortable recommending that.)

## Contributing

See a bug? Want to add a feature? Awesome!

Building the library locally is simple: just run `yarn build`. You can then test your changes using the example app (`yarn example`, see above) or in your own app.

When filing an issue, please include a good description of what's happening and screenshots (if possible). Code to reproduce the issue would be much appreciated.

When submitting a pull request:

* make sure that all tests pass when running `yarn test`
* write a good description of the problem your code solves

Please note that this project is released with a Contributor Code of Conduct. By participating in
this project you agree to abide by its terms. See
[code-of-conduct.md](https://github.com/arsduo/elm-rings/blob/master/code-of-conduct.md) for more information.
