## *Connecting Frontend to Backend (MERN)*
---

> *There are 2 ways to connect frontend and backend*
> - using templating engine (eg: handlebars, jade, ejs etc)
> - using APIs (application programming interface)
> - *Here in this project, we are connecting frontend and backend via API*

### **Step 1** - Folder Structure (project-name)
- create a folder named `server` 
    - this will be your backend 
- create a folder named `client`
    - this will be your frontend

### **Step 2** - Backend Folder (server)
- create a package.json file
    - `npm init -y`
- create another file server.js
- install express
    - `npm i express`
- install cors(cross origin resource sharing) to allow cross-origin access [Read More](#cors-cross-origin-resource-sharing) 
    - `npm i cors`
- install nodemon as a dev dependency
    - `npm i nodemon -D`
- make necessary changes in the package.json file
    ````javascript
     "main": "server.js",
     "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "start": "node server.js",
        "dev": "nodemon server.js"
      }, 
    ````
- in the server.js file
    ````javascript
        const express = require("express");
        const cors = require("cors");
        const app = express();
        const PORT = 5000;

        app.use(cors());

        app.get("/", (req, res) => {
        res.send("Home Page");
        });

        app.get("/api", (req, res) => {
        res.json({ "users": ["Bruce Wayne", "Wanda Maximoff", "Tony Stark"] });
        });

        app.listen(PORT, () => {
        console.log("Server is running on port " + PORT);
        });
    ````

### **Step 3** - Frontend Folder (client)
- inside client folder create a react app
    - `npx create-react-app ./`
- delete unnecesary files
- in App.js file, fetch the api from backend using useState and useEffect hook
    ````javascript
        import React, { useState, useEffect } from "react";

        function App() {
        const [backendData, setBackendData] = useState([{}]);

        useEffect(() => {
            fetch("http://localhost:5000/api")
            .then((res) => res.json())
            .then((res) => setBackendData(res));
        }, []);

        return (
            <div>
            {typeof backendData.users === "undefined" ? (
                <p>Loading...</p>
            ) : (
                backendData.users.map((user, index) => {
                return <p key={index}>{user}</p>;
                })
            )}
            </div>
        );
        }

        export default App;
    ````

### **Step 4** - Start the apps
- start the frontend app --> npm run start
    - the frontend(client) app will run in port number 3000
- start the backend app --> npm run dev
    - the backend(server) app will run in port number 5000

> *That's how you connect your frontend (react app) to a backend (express app)*

___

### CORS (cross origin resource sharing)
- cors is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources.
- It allows us to make requests from one website to another website in the browser, which is normally prohibited by another browser policy called the Same-Origin Policy (SOP)
