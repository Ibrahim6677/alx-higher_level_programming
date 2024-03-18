#!/usr/bin/python3
import MySQLdb
import sys

if __name__ == "__main__":
    username = sys.argv[1]
    password = sys.argv[2]
    database = sys.argv[3]
    state_name = sys.argv[4]

    # Connect to MySQL server
    db = MySQLdb.connect(host="localhost", port=3306, user=username, passwd=password, db=database)

    # Create a cursor object using cursor() method
    cursor = db.cursor()

    # Prepare SQL query to fetch data from the states table
    sql_query = "SELECT * FROM states WHERE name = %s ORDER BY id ASC"

    try:
        # Execute the SQL command
        cursor.execute(sql_query, (state_name,))
        # Fetch all the rows in a list of tuples
        results = cursor.fetchall()
        for row in results:
            print(row)
    except MySQLdb.Error as e:
        print("Error: unable to fetch data")
        print("MySQL Error {}: {}".format(e.args[0], e.args[1]))

    # Disconnect from server
    db.close()

