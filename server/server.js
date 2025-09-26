const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes/api');

const app = express();
mongoose.connect('mongodb+srv://noamaanmulla03_db_user:9g03TAHAFR3EAU8Q@cluster0.ym9552n.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(3333, () => {
    console.log('Server is running on port 3333');
});