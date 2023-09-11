# Instruction
- Craeate an .env file by seeing the .env.sample 

- [x] 1. User Registration and Email Verification:
    - GET `http://localhost:3000/api/Email?email=amin1996bangladesh@gmail.com` will send a mail to my acount

- [-] 2. Setting Tokens in Headers:
    - [x] Fix the login credential whether it works or not
        - POST `http://localhost:3000/api/Login` with json body 
        ```
        {
            "username": "ABC",
            "password": "123"
        }
        ```
    - [] Then call it from middleware.


- [x] 4. Encoding and Decoding Tokens:
    - GET `http://localhost:3000/api/Token` will return an object with token.  This token has encoded values.
    - POST `http://localhost:3000/api/Token` with json body having the token object will return the payload/value.

# Points to Remeber
- When decoding the token, when we're bringing the json vlaues from request body, make sure to use await:
`const JsonBody = await req.json();`