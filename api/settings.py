import pymysql
def connection():
    try:
    conn = pymysql.connect(host="localhost", user="root",passwd="password",db="ventaBilletes")
    cur = conn.cursor()
except Exception as err:
    print(err)