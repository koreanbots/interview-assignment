from discord.ext import commands
import os

import cogs


class Bot(commands.Bot):
    def __init__(self, **kwargs):
        super().__init__(command_prefix="!", help_command=None, **kwargs)
        
        cogs.load(self)

    async def on_ready(self):
        print(f"Logged in as {self.user.name}")

    async def on_command_error(self, ctx: commands.Context, exception: Exception):
        if isinstance(exception, commands.CommandNotFound):
            return
        
        return await ctx.send(f"Error: {exception}")

    
if __name__ == '__main__':
    Bot().run(os.environ.get("TOKEN"))
