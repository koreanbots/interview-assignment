import random
from datetime import datetime

current_date = round(datetime.utcnow().timestamp())

class Bot:
    def __init__(self, id: int):
      self.id = id
      self.date = random.randrange(current_date)


# 대기 중인 봇
submits = [ Bot(random.randrange(i ** 3)) for i in range(100, 1000) ]

# 승인된 봇
approved_submits = []