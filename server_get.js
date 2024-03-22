
const express = require('express');
const app = express();
const res = require('express/lib/response');

const addTwoNumbers = (n1, n2) => {
    return n1 + n2;
}

app.get("/addTwoNumbers", (req, res) => {
    const n1 = parseInt(req.query.n1);
    const n2 = parseInt(req.query.n2);
    const data = addTwoNumbers(n1, n2);
    res.json({
        statuscode: 200,
        data: result
    });
})

console.log(addTwoNumbers(89, 23));

const port = 3000;

app.listen(port, () => {
    console.log('Server is running on port ' + port);
})
