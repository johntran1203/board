from flask import Blueprint, jsonify, request
from peewee import DoesNotExist
from playhouse.shortcuts import model_to_dict

from board import Board

board = Blueprint('boards', __name__, url_prefix="/api/v1/boards")

@board.route('/', methods=['GET'])
def get_all_boards():
    try:
        # iterate through all dogs in the database and turn each instance of the Dog model into a dog dictionary
        boards = [model_to_dict(board) for board in Board.select()]
        # send that stuff to the user!
        return jsonify(boards), 200
    # worst case scenario, if Dog doesn't exist
    except DoesNotExist:
        # tell the user it can't find that model
        return jsonify(error='Error getting the Dog resource!'), 500

@board.route('/<int:id>', methods=['GET'])
def get_one_board(id):
    print(id, "Printing the id")
    try:
        board = Board.get_by_id(id)
        print(board.__dict__)
        return jsonify(model_to_dict(board)), 200
    except DoesNotExist:
        return jsonify(error='Error getting the Dog resource!'), 500

@board.route('/<id>', methods=["PUT"])
def update_board(id):
    body = request.get_json()
    (Board
        .update(**body)
        .where(Board.id == id)
        .execute())

    return jsonify(model_to_dict(Board.get_by_id(id))), 200

@board.route('/', methods=['POST'])
def create_board():
    body = request.get_json()


    board = Board.create(**body)
    board_dict = model_to_dict(board)
    return jsonify(board_dict), 201

@board.route('/<id>', methods=["DELETE"])
def delete_board(id):
    (Board.delete()
        .where(Board.id == id)
        .execute())
    return jsonify(message="Board successfully deleted!!"), 200