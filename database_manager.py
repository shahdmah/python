import mysql.connector

# Creating connection object

mydb = mysql.connector.connect(
    host = "localhost",
    user = "tamer",
    password = "P@ssw0rd",
    database = "queueingapp"
)
 
# Printing the connection object
cursor = mydb.cursor()

cursor.execute("select * from users;")

for row in cursor:
    print(row)