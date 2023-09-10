# Instruction
- Craeate an .env file by seeing the .env.sample 


- [x] 4. Encoding and Decoding Tokens:

# Points to Remeber
- When decoding the token, when we're bringing the json vlaues from request body, make sure to use await:
`const JsonBody = await req.json();`