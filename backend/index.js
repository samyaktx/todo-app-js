// write basic express boilerplate code
// with express.json() middleware

const express = require("express")

const { createTodo } = require("./types");
const { todo } = require("./db");

const app = express();
const port = 3000;


app.use(express.json());

app.post("/todos", async (res, req) => {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);

    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "You sent the wrong data",
        })
        return;
    }

    // @Todo: put it in mongodb
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })

    res.json({
        msg: "Todo created successfully",
    })
})

app.get("/todos", async (req, res) => {
    const todos = await todo.find({});
    
    res.json({
        todos
    })
})
app.put("/completed", async(req, res) => {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);

    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "You sent the wrong data",
        })
        return;
    }

    await todo.update({
        _id: req.body.id,
    }, {
        completed: true
    })

    res.json({
        msg: "Todo updated successfully",
    })
    
    // @Todo: update it in mongodb
})

app.listen(port)