#!/bin/bash
#HOST=localhost
HOST=cis260db.cwv0o9vfnwsc.us-east-1.rds.amazonaws.com
PASSWORD=ookay123
PORT=3306
DATABASE=cis260_test
USER=mdougherty

echo "No idea if connection to mysql has been established."
echo "Dropping databases..."
mysql -h $HOST -u $USER -p$PASSWORD -e "DROP DATABASE IF EXISTS $DATABASE"

echo "Creating databases..."
mysql -h $HOST -u $USER -p$PASSWORD -e "CREATE DATABASE $DATABASE"

echo "Creating database schema..."
mysql -h $HOST -u $USER -p$PASSWORD $DATABASE < schema.sql

echo "Populating database..."
mysql -h $HOST -u $USER -p$PASSWORD $DATABASE < data.sql

mysql -h $HOST -u $USER -p$PASSWORD $DATABASE -e "SHOW TABLES";
echo "Done"
exit 0
