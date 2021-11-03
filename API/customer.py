
from peewee import *


from db import DATABASE


class Customer(Model):
    name = CharField()


    class Meta:
        database = DATABASE
