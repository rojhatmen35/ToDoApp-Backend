const app = require("./app");
const db = require('./config/db')
const UserModel = require('./models/user.model')
const TodoModel = require('./models/todo.model') 
const port = 3000;

app.listen(port,()=>{
    console.log(`Server Listening on Port http://localhost:${port}`);
})