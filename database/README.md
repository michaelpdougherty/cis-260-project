# Database
The application runs by connecting to one MySQL database using the information
in the `backend/.env` file. The database can be created for development and testing
purposes using the files here.

# Database Connection
```
AWS hostname: cis260db.cwv0o9vfnwsc.us-east-1.rds.amazonaws.com  
Port: 3306
Default database: CIS260db
```

# Files
- `schema.sql` - table definitions
- `data.sql` - the initial data
- `reset_db.sh` - the database reset script for Bash (using `mysql`)
- `reset_db.ps1` - the database reset script for Windows Powershell (using `mysqlsh`)

The database reset script connects to the AWS host from a `config.sh` or `config.ps1` file which contains
the connection information and the name of the database to drop if it exists and create from the SQL files.

## Note about PATH
In order for the scripts to run, you will need to have access to a MySQL Client command in your terminal,
either `mysql` or `mysqlsh`. If, for some reason, you have MySQL installed and you don't have access to
the command, you can do the following (Git Bash only):
- `notepad ~/.profile`
- Add the line: `export PATH=$PATH:/path/to/mysql/bin` and save
- `souce ~/.profile`
- `mysql`

# Instructions
1. Copy `example-config.sh` or `example-config.ps1` to a file called `config.sh`/`.ps1`
2. Set the MySQL hostname, database name, and your username and password in the `config` file.
3. Run the file by calling the filename (e.g., `./reset_db.sh`)

Note: In Bash, you may need to grant the file executable privileges (`chmod +x ./reset_db.sh`),
and on Windows, Powershell scripting is disabled by default.
