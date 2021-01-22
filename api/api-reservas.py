import settings
from flask import Flask,jsonify, redirect, json,  request as req
from random import randint
from models.reserva import Reserva
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

@app.route('/save', methods = ['POST', 'GET'])
def save():
    if req.method == "POST":
        request_data = json.loads(req.data)
        name = request_data['content']['nombre']
        dni = request_data['content']['dni']
        tel = request_data['content']['telefono']
        address = request_data['content']['direccion']
        pin = request_data['content']['pin']
        reserva = Reserva(name, dni, tel, address, pin)
        query = "INSERT INTO reservas(nombre,direccion,telefono,dni,pin) values (%s,%s,%s,%s,%s)" 
        args = (reserva.get_nombre(), reserva.get_direccion(), reserva.get_telefono(), reserva.get_dni(), 
        reserva.get_pin())
        json_insert = conn.insert_booking(query, args)
        return jsonify(json_insert)
@app.route('/delete',methods=['POST'])
def delete():
    request_data = json.loads(req.data)
    dni = request_data['dni']
    pin = request_data['pin']
    query = "DELETE FROM reservas WHERE pin = (%s) AND dni = (%s) "  
    args = (pin, dni)
    json_deleted = conn.delete_booking(query, args)
    return jsonify(json_deleted)