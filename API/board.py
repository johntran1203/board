from peewee import *
import datetime

from db import DATABASE


class Board(Model):
    board_name = CharField()
    description = CharField()
    price = IntegerField()
    created_at = DateTimeField(default=datetime.datetime.now)

    # connect it to the database
    class Meta:
        database = DATABASE