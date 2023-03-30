## Database
The database for this project is located here:  
<http://cis260db.cwv0o9vfnwsc.us-east-1.rds.amazonaws.com:3306>

You can also run a MySQL database locally and put `HOST=localhost` in your `config.sh`

This folder holds the SQL files used to generate the application database for development, testing, staging,
and production use. The application uses a single MySQL database for user authentication and retrieval and storage of patient charts and daily notes.

- `schema.sql` - table definitions
- `data.sql` - starter data

The `reset_db.sh` and `.ps1` files connect to the MySQL host, drop and re-create the database,
create the tables, and add the data in `data.sql`

## Instructions for Git Bash / zsh (MacOS Terminal)
0. Navigate to the Git project root directory
1. Make a copy of the example configuration called `config.sh`
  1. `cp example-config.sh config.sh`
2. Set the MySQL host, database, username, and password in `config.sh`
  1. The MySQL host, username, and password are needed to connect, but
  the database can be named anything.
3. Run `./reset_db.sh` by calling the filename directly
  1. Note: You may need to grant the file executable privileges (`chmod +x ./reset_db.sh`)

## Instructions for Powershell
0. Navigate to the Git project root directory
1. Make a copy of the example configuration called `config.ps1`
  1. `cp example-config.sh config.ps1`
2. Set the MySQL host, database, username, and password in `config.ps1`
  1. The MySQL host, username, and password are needed to connect, but
  the database can be named anything.
3. Run `./reset_db.ps1` by calling the filename directly
  1. Note: You may need to grant yourself permission to run Powershell scripts

## Note about PATH
In order for any of the scripts to run, you will need to have some form of MySQL command (`mysql` or `mysqlsh`) in your PATH, which means that the command can be found on your computer by its name from your current terminal. If you don't have either of these commands in the terminal by default after installing `MySQL Shell` or `MySQL Server`, then you can add the `bin` directory of the MySQL installation to your PATH like so:

In Git Bash:
Add this line to your `~/.profile` file
`export PATH=$PATH:/path/to/mysql/bin`
You know it works if you run `source ~/.profile` (or restart your terminal) and you can run the `mysql`/`mysqlsh` command.

In Powershell, I've found the system-wide profile is located in `$PSHOME/Profile.ps1`. If I read a little farther,
I'd probably know how to find the user-specific one that doesn't require Administrator privileges to modify.

I recommend setting an alias in your terminal profile to reset the database easily. I use `rdb`
