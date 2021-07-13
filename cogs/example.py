from discord.ext import commands
from typing import TYPE_CHECKING

if TYPE_CHECKING:
    from bot import Bot

class Example(commands.Cog):
    """
    예시 Cog 입니다.
    """

    def __init__(self, bot: "Bot"):
        self.bot = bot

    @commands.command(name="ping")
    async def ping(self, ctx: commands.Context):
        await ctx.send("pong")


def setup(bot: "Bot"):
    bot.add_cog(Example(bot))
