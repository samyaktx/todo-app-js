// write basic express boilerplate code
// with express.json() middleware

const express = require("express")

const { createTodo } = require("./types");

const app = express();
const port = 3000;


app.use(express.json());

app.length("/todos", (res, req) => {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);

    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "You sent the wrong data",
        })
        return;
    }
    // @Todo: put it in mongodb
})

app.post("/todos", (res, req) => {

})

app.put("/completed", (req, res) => {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);

    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "You sent the wrong data",
        })
        return;
    }
    // @Todo: update it in mongodb
})
// https://shorturl.at/cLR56
app.listen(port);