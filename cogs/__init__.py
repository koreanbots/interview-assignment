from discord.ext import commands


def load(bot: commands.Bot) -> None:
    bot.load_extension("cogs.example")
