import settings
from flask import Flask,jsonify, request as req

app = Flask(__name__)
conn = settings.init()
@app.after_request
def after_request(response):
    header = response.headers
    header['Access-Control-Allow-Origin'] = '*'
    header['Access-Control-Allow-Headers'] = 'Content-Type, Authorization'
    header['Access-Control-Allow-Methods'] = 'OPTIONS, HEAD, GET, POST, DELETE, PUT'
    return response


@app.route('/all', methods = ['GET'])
def all():
    query = "SELECT * FROM reservas"
    bookings = conn.get_all_bookings(query)
    return jsonify(bookings)

