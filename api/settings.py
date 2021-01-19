from models.connection import *

def init():
    global conn
    conn = Connection("localhost","root","password","reservas")
    return conn