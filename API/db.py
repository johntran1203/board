from peewee import *

DATABASE = PostgresqlDatabase('boards')


def initialize(tables):

    DATABASE.connect()

    DATABASE.create_tables(tables, safe=True)

    print('Tables successfully created!')

    DATABASE.close()