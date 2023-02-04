import express from 'express';
import cors from 'cors'
import morgan from 'morgan';
import { readDb, writeDb } from './db.js';
const app = express();

const db = readDb()

app.use(morgan("dev"))
app.use(cors())
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello from API!');
});

app.get("/todos", (req, res, next) => {
  res.json(db.todos)
})

app.post("/todos", (req, res, next) => {
  let { title, status } = req.body
  
  if(!title) return res.status(400).json({ error: "Please provide title" })
  if(!status) status = false

  db.todos.push({ _id: Date.now().toString(), title, status })

  writeDb(db)

  res.json(db.todos)
})


export default app
