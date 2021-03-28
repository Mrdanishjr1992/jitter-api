require('dotenv').config();
const cors = require('cors');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const routes = require('./routes');

// Middleware
app.use(bodyParser.json());
app.use(express.json());

// Cross Origin Resource Sharing
app.use(cors());

// Home Route
app.get('/', (req, res) => {
	res.send('<h1>Jitter</h1>');
});
// Chat Route
app.use('/chat', routes.chat);
// Group Route
app.use('/group', routes.group);
// Mesaage Route
app.use('/message', routes.message);
// User Route
app.use('/user', routes.user);

app.listen(PORT, () => console.log('connected to port ' + PORT));
