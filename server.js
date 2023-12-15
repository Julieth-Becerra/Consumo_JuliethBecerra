const express = require('express');

const app = express();



const port = 3001;
const path = require('path');

//mideleware
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));


app.use("/", require("./routes/index"));

app.listen(port, () => console.log(`Server running on port ${port}`));