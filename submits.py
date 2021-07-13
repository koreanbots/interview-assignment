import random
from datetime import datetime
from typing import List

current_date = round(datetime.utcnow().timestamp())


class Bot:
    def __init__(self):
        self.id = random.randint(1000000000, 9999999999)
        self.date = random.randrange(current_date)


# 대기 중인 봇
submits: List[Bot] = [Bot() for _ in range(1, 10)]

# 승인된 봇
approved_submits: List[Bot] = []
