import pymysql
class Connection:
    def __init__(self, localhost, user, password, database):
        try:
            self.__conn = pymysql.connect(host=localhost, user = user, password = password, database = database)
            self.__cur = self.__conn.cursor()
        except Exception as err:
            print(err.__str__())

    def execute(self,query, args = None):
        if args != None:
            try:
                self.__cur.execute(query, args)
            except Exception as err:
                print(err.__str__())
        else:
            print(query)
            try:
                self.__cur.execute(query)
            except Exception as err:
                print(err.__str__())
    def close_connections(self):
        try:
            self.__conn.close()
            self.__cur.close()
        except Exception as err:
            print(err.__str__())
    def commit(self):
        try:
            self.__conn.commit()
        except Exception as err:
            print(err.__str__())
    def get_all_bookings(self, query):
        bookings = []
        try:
            self.execute(query)
            rows = self.__cur.fetchall()
            for row in rows:
                bookings.append({
                    'nombre': row[0],
                    'direccion': row[1],
                    'telefono': row[2],
                    'dni': row[3]
                })
        except Exception as err:
            print(err.__str__())
        return ({'bookings':bookings})
    def insert_booking(self, query, args):
        flag_insert = False
        try:
            self.execute(query, args)
            flag_insert = True
        except Exception as err:
            print(err)
            flag_insert = False
        return {'ok': flag_insert}
