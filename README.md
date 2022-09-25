# how to run

- npm install
- npm start

---

# expected endpoints

- /register - POST - {firstName, lastName, email, password} - {jwt, userId}
- /auth - POST - {username, password} - {jwt, userId}
- /users/:id - GET - headers: {jwt} - {...}
- /users/:id - PUT - headers: {jwt} - {username, password} {...}
- /codes - GET - headers: {jwt} - [{id, name, size, uploader, createdAt}]
- /codes - POST - headers: {jwt} - multipart - [{code}] - {...}
- /codes/id - DELETE - headers : {jwt}
