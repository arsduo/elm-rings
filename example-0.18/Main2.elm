module Main exposing (Model, Msg(..), main, update, view)

import Browser
import Html exposing (Html, button, div, input, span, text)
import Html.Attributes exposing (style, value)
import Html.Events exposing (onClick, onInput)


type alias Model =
    { counter : Int, secretField : String }


initialModel : flags -> ( Model, Cmd Msg )
initialModel flags =
    ( { counter = 0, secretField = "" }, Cmd.none )


main : Program () Model Msg
main =
    Browser.document { init = initialModel, update = update, view = view, subscriptions = \_ -> Sub.none }


type Msg
    = Increment
    | Decrement
    | UpdateSecretField String


view : Model -> Browser.Document Msg
view model =
    let
        content : Html Msg
        content =
            div []
                [ div []
                    [ button
                        [ onClick Decrement ]
                        [ text "-" ]
                    , span
                        []
                        [ text (String.fromInt model.counter) ]
                    , button [ onClick Increment ]
                        [ text "+" ]
                    ]
                , div [ style "margin-top" "15px" ]
                    [ div [] [ text "Super secret field" ]
                    , input [ onInput UpdateSecretField, value model.secretField ] []
                    , div [ style "font-size" "0.8em" ] [ text ("Current value: " ++ model.secretField) ]
                    ]
                ]
    in
    { title = "Counter", body = [ content ] }


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    let
        updatedModel : Model
        updatedModel =
            case msg of
                Increment ->
                    { model | counter = model.counter + 1 }

                Decrement ->
                    { model | counter = model.counter - 1 }

                UpdateSecretField string ->
                    { model | secretField = string }
    in
    ( updatedModel, Cmd.none )
