## Environment Variables

In order to run the server, you need to set up the following environment variables. Create a `.env` file in the `server` folder with the following attributes:


- `DB`: Specify the database connection string.
- `SALT`: Set the salt value for hashing passwords. Default value is 10.
- `JWTPRIVATEKEY`: Provide a private key for JWT token generation.
