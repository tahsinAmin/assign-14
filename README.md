# Instruction
- Craeate an .env file by seeing the .env.sample 

- [x] 1. User Registration and Email Verification:
    - GET `http://localhost:3000/api/Email?email=amin1996bangladesh@gmail.com` will send a mail to my acount

- [-] 2. Setting Tokens in Headers:
    - [x] Fix the login credential whether it works or not
        - POST `http://localhost:3000/api/Login` with json body 
    - [x] Login page to Dashboard if successful
    - [] Add email in header using middleware.

Note: Develop a middleware that sets an authentication token in the HTTP headers of requests made by authenticated users. This token should be used to validate user identities.

- [x] 4. Encoding and Decoding Tokens:
    - GET `http://localhost:3000/api/Token` will return an object with token.  This token has encoded values.
    - POST `http://localhost:3000/api/Token` with json body having the token object will return the payload/value.

    
- [x] 5. Redirect to Homepage if Not Logged In

# Points to Remeber
- When decoding the token, when we're bringing the json vlaues from request body, make sure to use await:
`const JsonBody = await req.json();`