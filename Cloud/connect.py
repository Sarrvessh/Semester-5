import mysql.connector

# Connect to MySQL database on the VM
db_connection = mysql.connector.connect(
    host="127.0.0.1",
    user="sarvesh",
    password="savesa04",
    database="mydatabase"
)

cursor = db_connection.cursor()

# Query to fetch all records from the students table
cursor.execute("SELECT * FROM students")

# Fetch and print the results
for row in cursor.fetchall():
    print(row)

cursor.close()
db_connection.close()