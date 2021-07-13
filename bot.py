from discord.ext import commands
import os

import cogs


class Bot(commands.Bot):
    def __init__(self):
        super().__init__(command_prefix="!", help_command=None)
        cogs.load(self)

    async def on_ready(self):
        print(f"Logged in as {self.user.name}")

    async def on_command_error(self, ctx: commands.Context, exception: Exception):
        if isinstance(exception, commands.CommandNotFound):
            return
        return await ctx.send(f"Error: {exception}")


Bot().run(os.environ.get("TOKEN"))
