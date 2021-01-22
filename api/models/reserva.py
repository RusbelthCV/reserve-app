class Reserva:
    def __init__(self, nombre, dni, telefono, direccion, pin):
        self.__nombre = nombre
        self.__dni = dni
        self.__telefono = telefono
        self.__direccion = direccion
        self.__pin = pin
    def get_nombre(self):
        return self.__nombre
    def get_dni(self):
        return self.__dni
    def get_telefono(self):
        return self.__telefono
    def get_direccion(self):
        return self.__direccion
    def get_pin(self):
        return self.__pin