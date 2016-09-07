import Html exposing (Html, div, h1, text)
import Html.App as App

import Header

main =
    App.beginnerProgram { model = model, update = update, view = view }

-- Model

type alias Model = { header: Header.Model }

model : Model
model =
    { header = "Hello, Electron!" }


-- Update

type Msg = HeaderUpdate Header.Msg

update : Msg -> Model -> Model
update msg model =
    case msg of
        HeaderUpdate headerMsg ->
    { model | header = (Header.update headerMsg model.header) }

-- View

view : Model -> Html Msg
view model =
    div
        []
        [
            App.map HeaderUpdate (Header.view model.header)
        ]
        
