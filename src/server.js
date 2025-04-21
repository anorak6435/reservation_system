const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const apiRoutes = require('./api-routes');
// const TodoModel = require('./models/todo');


const dbURI = 'mongodb://localhost/uphill_hotel';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error(`Error connecting to MongoDB: ${err}`));

const app = express();
app.use(cors({
  "origin": "*",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": false,
  "optionsSuccessStatus": 204
}));
app.use(bodyParser.urlencoded());
app.use(bodyParser.json())
app.use(express.static(`${__dirname}/public`));

// Routes
app.use('/api', apiRoutes);

// error handler
app.use((err, req, res, next) => {
    res.status(400).send(err.message)
})
  
// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));