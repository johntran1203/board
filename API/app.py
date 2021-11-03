from flask import Flask, g
from flask_cors import CORS
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

CORS(board, origins=['http://localhost:3000'], supports_credentials=True)

app.register_blueprint(board)
app.register_blueprint(order)
app.register_blueprint(customer)

if __name__ == '__main__':
    print("I'm running app.py!")
    initialize([Board, Customer, Order])
    app.run(debug=DEBUG, port=PORT)


