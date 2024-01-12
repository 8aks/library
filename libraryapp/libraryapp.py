import reflex as rx
from typing import List
from .data import films,friends
from .friend import FriendCleaner
from .library import Library

optionsFilms: List[str] = films
optionsFriends: List[str] = friends

class SelectState(rx.State):
    option: str = "No selection yet."
def index():
    return rx.container(
    rx.heading(SelectState.option),
    rx.select(
        optionsFilms,
        placeholder="Select an example.",
        on_change=SelectState.set_option,
        variant="filled",
    ),
    rx.select(
        optionsFriends,
        placeholder="Select an example.",
        on_change=SelectState.set_option,
        variant="filled",
    ),
    rx.divider(),
    bg="#ededed",
    margin="auto",  # Set margin to auto to center horizontally
    padding="1em",
    border_radius="0.5em",
    shadow="lg",
)

app = rx.App()
app.add_page(index)
app.compile()