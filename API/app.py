from flask import Flask, g
from flask_cors import CORS

from db import DATABASE, initialize

from board import Board

from resources.boards import board

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

if __name__ == '__main__':
    print("I'm running app.py!")
    initialize([Board])
    app.run(debug=DEBUG, port=PORT)


