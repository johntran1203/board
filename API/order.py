
from peewee import *
import datetime

# local imports (3)
from db import DATABASE
from board import Board
from customer import Customer

# how to set up a m:m
class Order(Model):
    customer_order = ForeignKeyField(Customer, backref="orders")
    board = ForeignKeyField(Board, backref='orders')
    created_at = DateTimeField (default=datetime.datetime.now)

    class Meta:
        database = DATABASE