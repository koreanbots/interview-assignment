from discord.ext import commands


class Example(commands.Cog):
    """
    예시 Cog 입니다.
    """

    def __init__(self, bot: commands.Bot):
        self.bot = bot

    @commands.command(name="ping")
    async def ping(self, ctx: commands.Context):
        await ctx.send("pong")


def setup(bot: commands.Bot):
    bot.add_cog(Example(bot))
