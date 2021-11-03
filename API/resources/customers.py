from flask import Blueprint, jsonify, request
from peewee import DoesNotExist
from playhouse.shortcuts import model_to_dict

from customer import Customer

customer = Blueprint('customers', __name__, url_prefix="/customers")

@customer.route('/', methods=['GET'])
def get_all_cusomers():
    try:
        customers = [model_to_dict(customer) for customer in Customer.select()]
        return jsonify(customers), 200 
    except DoesNotExist:
        return jsonify(error='Error getting the Board resource!'), 500

@customer.route('/<int:id>', methods=['GET'])
def get_one_customer(id):
    print(id, "Printing the id")
    try:
        customer = Customer.get_by_id(id)
        print(customer.__dict__)
        return jsonify(model_to_dict(customer)), 200
    except DoesNotExist:
        return jsonify(error='Error getting the Board resource!'), 500

@customer.route('/<id>', methods=["PUT"])
def update_customer(id):
    body = request.get_json()
    (Customer
        .update(**body)
        .where(Customer.id == id)
        .execute())

    return jsonify(model_to_dict(Customer.get_by_id(id))), 200

@customer.route('/', methods=['POST'])
def create_customer():
    body = request.get_json()
    customer = Customer.create(**body)
    customer_dict = model_to_dict(customer)
    return jsonify(customer_dict), 201

@customer.route('/<id>', methods=["DELETE"])
def delete_customer(id):
    (Customer.delete()
        .where(Customer.id == id)
        .execute())
    return jsonify(message="Customer successfully deleted!!"), 200

