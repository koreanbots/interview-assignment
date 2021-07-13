from typing import TYPE_CHECKING

if TYPE_CHECKING:
    from bot import Bot


def load(bot: "Bot") -> None:
    bot.load_extension("cogs.example")
