from flask import Blueprint, jsonify, request
from peewee import DoesNotExist
from playhouse.shortcuts import model_to_dict


order = Blueprint('orders', __name__, url_prefix="/orders")

# from customer import Customer
from order import Order

@order.route('/<int:board_id>', methods=["POST"])

def add_order(board_id):
    try:

        body = request.get_json()
        print(body)
        order = Order.create(**body, board=board_id)
        return jsonify(model_to_dict(order)), 201
    except DoesNotExist:
        return jsonify(message="talk to customer serices"), 500