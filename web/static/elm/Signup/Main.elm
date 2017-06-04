module Signup.Main exposing (..)

import Html exposing (text, div, input, button, h1, h5)
import Html.Attributes exposing (..)


banner : Html.Html markup
banner =
    div [ class "banner" ]
        [ h1 [] [ text "Fireside Social Network" ]
        , h5 [] [ text "Serving all your fake social networking needs since forever" ]
        ]


signupForm : Html.Html markup
signupForm =
    div
        [ id "form-container" ]
        [ div [ class "name-container" ]
            [ input [ type_ "text", placeholder "First Name" ] []
            , input [ type_ "text", placeholder "Last Name" ] []
            ]
        , div [ class "name-container" ]
            [ input [ type_ "email", placeholder "Email" ] []
            , input [ type_ "password", placeholder "Password" ] []
            ]
        , button
            [ class "button-long" ]
            [ text "Sign Up" ]
        ]


main : Html.Html markup
main =
    div []
        [ banner, signupForm ]
