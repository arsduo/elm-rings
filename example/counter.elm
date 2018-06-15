module Counter exposing (..)

import Html exposing (Html, div, span, button, text, input)
import Html.Attributes exposing (value, style)
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
        [ div []
            [ button
                [ onClick Decrement ]
                [ text "-" ]
            , span
                []
                [ text (toString model.counter) ]
            , button [ onClick Increment ]
                [ text "+" ]
            ]
        , div [ style [ ( "margin-top", "15px" ) ] ]
            [ div [] [ text "Super secret field" ]
            , input [ onInput UpdateSecretField, value model.secretField ] []
            , div [ style [ ( "font-size", "0.8em" ) ] ] [ text ("Current value: " ++ model.secretField) ]
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
