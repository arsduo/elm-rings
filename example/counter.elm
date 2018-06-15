module Counter exposing (..)

import Html exposing (Html, div, button, text, input)
import Html.Attributes exposing (value)
import Html.Events exposing (onClick, onInput)


type alias Model =
    { counter : Int, secretField : String }


main : Program Never Model Msg
main =
    Html.beginnerProgram { model = { counter = 0, secretField = "" }, update = update, view = view }


type Msg
    = Increment
    | Decrement
    | UpdateSecretField String


view : Model -> Html Msg
view model =
    div []
        [ button
            [ onClick Decrement ]
            [ text "-" ]
        , div
            []
            [ text (toString model.counter) ]
        , button [ onClick Increment ]
            [ text "+" ]
        , div []
            [ div [] [ text "Super secret field" ]
            , div [] [ text ("Current value: " ++ model.secretField) ]
            , input [ onInput UpdateSecretField, value model.secretField ] []
            ]
        ]


update : Msg -> Model -> Model
update msg model =
    case msg of
        Increment ->
            { model | counter = model.counter + 1 }

        Decrement ->
            { model | counter = model.counter - 1 }

        UpdateSecretField string ->
            { model | secretField = string }
