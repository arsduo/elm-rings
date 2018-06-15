# elm-rings [![Build Status](https://travis-ci.org/arsduo/elm-rings.svg?branch=master)](https://travis-ci.org/arsduo/elm-rings)

_Programmatically record the state of your Elm application as your users use it_

If you’ve ever received a support ticket, you’ve seen something like this: “Carmen M. can’t complete her quiz, it’s not affecting any other students”. Great. Was she unable to select answers to the questions? Able to answer but the submit button stays disabled? Able to tap submit but to no avail?

Users don’t submit detailed or complete error reports because they don’t experience or describe an app the same way its developers do. Nor should they! They have better things to do than learn our lingo.

But what if we could see our apps through our users’ eyes?

With [the Elm language](http://elm-lang.org), we can. Because all the possible states of an Elm program are clearly defined and state only changes in response to messages, Elm can track everything that happens -- and make it available to you to debug. You can even export that history and even import it another session to see exactly what your users saw:

<img src="https://user-images.githubusercontent.com/48325/38286735-7b1be558-378c-11e8-97b4-6b95ff37946c.gif" width="600" />

Unfortunately, Elm doesn't natively provide an interface to extract this data programmatically.
Fortunately, we can work around that.

Enter **ElmRings, a lightweight, dependency-free library to record the command history of your Elm app** behind the scenes.

With ElmRings, you can snapshot the history periodically during a user's session, anytime you
experience an error, however you want to do it. This data becomes an invaluable tool for debugging
and supporting user issues -- when you get a confusing support ticket, you can download the history
and see your app through your users' eyes.

😎

## Installation

Installing `elm-rings` is pretty straightforward:

```bash
yarn add elm-rings
# or
npm install elm-rings
```

## Usage

### Capturing History

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
  },

  // Any Elm object constructor names or record keys that contain sensitive data.
  // These will be passed to a sanitizing function you provide.
  // See the next section for more details.
  watchWords: ["password", "token"],
  historySanitizer: mySanitizingFunction
});

// start tracking history
recorder.startTracking();

// manually trigger a history export, which will be passed to the function you specify in storeHistory
recorder.exportHistory();
```

_Note_: it's not a good idea to pass the Elm history object back into Elm in your `storeHistory`
method. Things get real big real fast.

### Sanitizing History

Of course, once you have that history data in hand, you'll also have a big challenge: **security**.

Every keystroke of a user’s password and all the sensitive personal information they enter in your app go into Elm’s history. It’s no good hashing passwords on the user model if you're sending them unencrypted over the network (even via HTTPS) or storing them in plain text in a logging table. **You need to sanitize this data carefully before you cit.**

Fortunately, ElmRings is comes with a built-in mechanism to sanitize this data before it leaves the
browser. Because every Elm program is different, there's no one-size-fits-all way to clean up the
data -- you'll need to think through your data structures and you'll want to write some tests.

Let's say you have an Elm message like

```elm
MySecretData "access_token" {password = "myP@ssw0rd", expiration = "tomorrow"}
```

As an Elm history entry, this will look like

```js
{"ctor": "MySecretData", "_0": "access_token", "_1": {"password": "myP@ssw0rd", "expiration": "tomorrow"}}
```

For more information on the format Elm uses to export debugging history data, see an upcoming blog post.

ElmRing's sanitization is done by the `sanitizeElmHistory` function in
`source/HistorySanitizer.js`. If we were to run

```js
//   sanitizeElmHistory(historyData, ["MySecretData", "password"], function(elmObjectOrRecord) {
//    if (elmObjectOrRecord.ctor == "MySecretData") {
//      // replace the access token
//      // make sure to return the updated object!
//      return {...elmObjectOrRecord, "_0": "[FILTERED]"}
//    }
//    else {
//      // we have a record, replace the password field
//      return {...elmObjectOrRecord, "password": "[FILTERED]"}
//    }
//  })
```

We'll receive back a sanitized entry:

```js
{"ctor": "MySecretData", "_0": "[FILTERED]", "_1": {"password": "[FILTERED]", "expiration": "tomorrow"}}
```

If you specify the `watchWords` and `historySanitizer` function, ElmRings will automatically
process the entry before it's passed to your `storeHistory` function.

Sanitization is _highly_ encouraged; ElmRings will log a warning to your console if it's not set
up (though you can silence this if you really want to `playDangerousWithData`).

## Example

Want to see ElmRings in action? Check out the example app! It's all in the browser, but you can imagine how you could send the data to your server and display the results on a support page if you'd like.

To run the example locally:

1.  Check out the repo
2.  Run `yarn install && elm-package install`
3.  Run `yarn example`
4.  Visit [http://localhost:8080](http://localhost:8080)

The example in action:

<img src="https://user-images.githubusercontent.com/48325/38286776-be7899d6-378c-11e8-97ae-f789992cac50.gif" width="600" />

## Caveats

Of course, there are caveats, even after you clean the history of sensitive data.

* **Performance:** an app that generates a lot of entries may well run into performance problems eventually., especially on lower-powered hardware (such as the Chromebooks or iPads schools use). I haven’t measured when those would occur, but if you’re storing a lot of data or generating a flood of events, keep that in mind. (I’d be grateful for any data!)
* **Exposing your internals:** with debug mode enabled your users (and, in theory, any Javascript on your page to see exactly what data your app stores and how it’s structured. All front end applications have to assume any data is open to the world, but this makes it unusually accessible.

Given those caveats, you may decide (like us) to only capture state for particular users for whom a flag is enabled. The big drawback of that approach is that you can’t proactively know who will encounter an error — it’ll be difficult to capture hard-to-reproduce problems.

There’s one additional limitation that’s both obvious and worth stating explicitly: the Elm history only captures what happens in Elm. If your app is all Elm, you’re golden. If you’re integrating with Javascript libraries to do fun things like in-browser video recording with Javascript and WebRTC (more on that soon), you’ll have blind spots in your log. For this and many many other reasons, the more you can put in Elm the better.

**In your own logs**

You'll want to make sure that the history data doesn't end up in your own logs, too. Even though it
will be already sanitized, it's quite verbose and annoying.

Different backend applications will handle this differently. In Rails, for
instance, you can to filter out the history you send up and also hide the database statements like
so:

```ruby
# in application.rb, add the appropriate parameter to Rails' built-in log filtering to ensure all the data doesn't get written to the log
# you could, alternatively, add all the individual fields you want to sanitize (password, token, US social security number, etc.) if you do want the history in the log
# but that does create a lot of data/noise over time
config.filter_parameters += [:elm_history]

# in your controller
def store_history
  # Silencing Active::Record logging is important if you record SQL queries in the environment you're running in
  # both for security and (often more pressingly in development) to keep your logs manageable
  old_logger = ActiveRecord::Base.logger
  begin
    old_logger.info "ActiveRecord logging disabled for Elm history logging"
    # disable database logging
    ActiveRecord::Base.logger = nil

    history_data = params.require(:elm_history)

    sanitized_history = sanitize_history(history_data)
    save_history!(sanitized_history)

    render json: {result: "stored"}
  ensure
    ActiveRecord::Base.logger = old_logger
  end
end
```

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
