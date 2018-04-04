module Counter exposing (..)

import Html exposing (Html, div, button, text)
import Html.Events exposing (onClick)


main : Program Never Int Msg
main =
    Html.beginnerProgram { model = 0, update = update, view = view }


type Msg
    = Increment
    | Decrement


view : Int -> Html Msg
view model =
    div []
        [ button
            [ onClick Decrement ]
            [ text "-" ]
        , div
            []
            [ text (toString model) ]
        , button [ onClick Increment ]
            [ text "+" ]
        ]


update : Msg -> Int -> Int
update msg model =
    case msg of
        Increment ->
            model + 1

        Decrement ->
            model - 1
