from peewee import *

DATABASE = PostgresqlDatabase('dogs')


def initialize(tables):

    DATABASE.connect()

    DATABASE.create_tables(tables, safe=True)

    print('Tables successfully created!')

    DATABASE.close()