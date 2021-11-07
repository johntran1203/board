
from peewee import *
import datetime


from db import DATABASE


class Customer(Model):
    customer_name = CharField()
    created_at = DateTimeField(default=datetime.datetime.now)

    class Meta:
        database = DATABASE
