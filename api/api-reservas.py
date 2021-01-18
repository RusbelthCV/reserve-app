# import settings
from flask import Flask,jsonify, request as req

app = Flask(__name__)
@app.after_request
def after_request(response):
    header = response.headers
    header['Access-Control-Allow-Origin'] = '*'
    header['Access-Control-Allow-Headers'] = 'Content-Type, Authorization'
    header['Access-Control-Allow-Methods'] = 'OPTIONS, HEAD, GET, POST, DELETE, PUT'
    return response


@app.route('/all')
def all():
    return jsonify({'data':"SSS"})