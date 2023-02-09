#!/bin/bash
HOST=localhost
PORT=3306
DATABASE=CIS260db

echo "No idea if connection to mysql has been established."
echo "Dropping databases..."
mysql -h $HOST -uroot -e "DROP DATABASE IF EXISTS $DATABASE"

echo "Creating databases..."
mysql -uroot -e "CREATE DATABASE $DATABASE"

echo "Creating database schema..."
mysql -uroot $DATABASE < schema.sql

echo "Populating database..."
mysql -uroot $DATABASE < data.sql

mysql -uroot $DATABASE -e "SHOW TABLES";
echo "Done"
exit 0
