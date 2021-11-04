from flask import Flask, g
from flask_cors import CORS
import os

from customer import Customer

from db import DATABASE, initialize

from board import Board
from order import Order

from resources.boards import board
from resources.orders import order
from resources.customers import customer

DEBUG = True
PORT = 8000


app = Flask(__name__)

app.secret_key = os.environ.get('SECRET') or 'ednededdnededdneddypok'

origins=['http://localhost:3000']

if 'DATABASE_URL' in os.environ:
    initialize([Board, Customer, Order])
    app.config['SESSION_COOKIE_SECURE'] = True
    app.config['SESSION_COOKIE_HTTPONLY'] = False
    app.config['SESSION_COOKIE_SAMESITE'] = 'None'
    origins.append(os.environ.get('CLIENT_URL'))

CORS(app, origins=origins, supports_credentials=True)

@app.before_request
def before_request():
    """Connect to the database before each request."""
    g.db = DATABASE
    g.db.connect()

@app.after_request
def after_request(response):
    """Close the database connection after each request."""
    g.db.close()
    return response

# endpoint + method
@app.route('/')
def index():
    return 'hello!', 200


app.register_blueprint(board)
app.register_blueprint(order)
app.register_blueprint(customer)



if __name__ == '__main__':
    print("I'm running app.py!")
    initialize([Board, Customer, Order])
    app.run(debug=DEBUG, port=PORT)


