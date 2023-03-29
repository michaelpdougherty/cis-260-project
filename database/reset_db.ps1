. "./config.ps1"
mysqlsh --user="$MYSQL_USER" -p"$MYSQL_PASSWORD" -h"$MYSQL_HOST" -D $MYSQL_DATABASE --file .\schema.sql
mysqlsh --user="$MYSQL_USER" -p"$MYSQL_PASSWORD" -h"$MYSQL_HOST" -D $MYSQL_DATABASE --file .\data.sql
