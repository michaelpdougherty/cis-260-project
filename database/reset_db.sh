#!/bin/bash
source config.sh
function do_mysql() {
  if [ $PASSWORD ]
  then
    command mysql -u "$USER" -p"$PASSWORD" -h"$HOST" "$@"
  else
    command mysql -u "$USER" -h"$HOST" "$@"
  fi
}
echo "Dropping databases..."
do_mysql -e "DROP DATABASE IF EXISTS $DATABASE"
echo "Creating databases..."
do_mysql -e "CREATE DATABASE $DATABASE"
echo "Creating database schema..."
do_mysql $DATABASE < schema.sql
echo "Populating database..."
do_mysql $DATABASE < data.sql
do_mysql $DATABASE -e "SHOW TABLES";
echo "Done."
exit 0
