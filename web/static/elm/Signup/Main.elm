module Signup.Main exposing (..)

import Html exposing (text, div, input, button, h1, h5, select, option, Html)
import Html.Attributes exposing (..)
import Html.Events exposing (onInput)
import Debug exposing (log)


type alias User =
    { firstName : String
    , lastName : String
    , email : String
    , password : String
    }


type UserUpdateKeys
    = FirstName
    | LastName
    | Email
    | Password


initUser : User
initUser =
    { firstName = "hello"
    , lastName = ""
    , email = ""
    , password = ""
    }


banner : User -> Html Msg
banner user =
    div [ class "banner" ]
        [ h1 [] [ text "Fireside Social Network" ]
        , h5 [] [ text "Serving all your fake social networking needs since forever" ]
        ]


signupForm : User -> Html Msg
signupForm model =
    div
        [ id "form-container" ]
        [ div [ class "name-container" ]
            [ input
                [ type_ "text"
                , placeholder "First Name"
                , onInput (\val -> UpdateUser FirstName val)
                , value model.firstName
                ]
                []
            , input
                [ type_ "text"
                , placeholder "Last Name"
                , onInput (\val -> UpdateUser LastName val)

                -- , value model.lastName
                ]
                []
            ]
        , div [ class "name-container" ]
            [ input
                [ type_ "email"
                , placeholder "Email"
                , onInput (\val -> UpdateUser Email val)

                -- , value model.email
                ]
                []
            , input
                [ type_ "password"
                , placeholder "Password"
                , onInput (\val -> UpdateUser Password val)

                -- , value model.password
                ]
                []
            ]
        , select []
            [ option [] [ text "Male" ]
            , option [] [ text "Female" ]
            ]
        , button
            [ class "button-long" ]
            [ text "Sign Up" ]
        ]


view : User -> Html Msg
view user =
    div [] [ banner initUser, signupForm initUser ]



-- Messages or actions we get from the UI


type Msg
    = UpdateUser UserUpdateKeys String


update : Msg -> User -> User
update msg user =
    case msg of
        UpdateUser FirstName val ->
            log (toString { user | firstName = val }) { user | firstName = val }

        UpdateUser LastName val ->
            log val { user | lastName = val }

        UpdateUser Email val ->
            log val { user | email = val }

        UpdateUser Password val ->
            log val { user | password = val }


main : Program Never User Msg
main =
    Html.beginnerProgram { model = initUser, view = view, update = update }
