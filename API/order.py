
# from peewee import *

# # local imports (3)
# from db import DATABASE
# from board import Board
# from customer import Customer

# # how to set up a m:m
# class order(Model):
#     customer = ForeignKeyField(Customer, backref='orders')
#     board = ForeignKeyField(Board, backref='orders')

#     class Meta:
#         database = DATABASE