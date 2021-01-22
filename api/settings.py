from models.connection import *

def init():
    global conn
    conn = Connection("192.168.0.34","root","password","reservas")
    return conn