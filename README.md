# how to run

- npm i -g express json-server json-server auth
- npm i
- json-server-auth mock-data.json
- npm run start

---

# expected endpoints

- /register - POST - {firstName, lastName, email, password} - {jwt, userId}
- /auth - POST - {username, password} - {jwt, userId}
- /users/:id - GET - headers: {jwt} - {...}
- /users/:id - PUT - headers: {jwt} - {username, password} {...}
- /codes - GET - headers: {jwt} - [{id, name, size, uploader, createdAt}]
- /codes - POST - headers: {jwt} - multipart - [{code}] - {...}
- /codes/id - DELETE - headers : {jwt} 

---

# todo

- replace endpoints with actual ones
- add files upload logic
- remove any (add types)
- cleanup ui
- add home ui
- better error messages?
