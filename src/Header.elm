module Header exposing (model, update, view, Model, Msg(..))

import Html exposing (Html, h1, text)

-- Model
type alias Model = String

model : Model
model =
    "Hello, World!"


-- Update

type Msg = NewHeader String

update : Msg -> Model -> Model
update msg model =
    case msg of
        NewHeader newHeader ->
            newHeader

-- view

view : Model -> Html Msg
view model =
    h1 [] [ text model ]
