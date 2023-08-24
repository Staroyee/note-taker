//Import Express module.
const express = require('express');

//Import 'get' routes for html files.
const htmlRoutes = require('./routes/htmlRoutes');
//Import 'get', 'post', and 'delete' routes for APIs.
const apiRoutes = require('./routes/apiRoutes');

//Static 'PORT' variable defined as whatever is in the environment variable PORT or 3001.
const PORT = process.env.PORT || 3001;

//Assign express to 'app' variable.
const app = express();

//Assign 'app' to use .json() to parse incoming requests with JSON payloads.
app.use(express.json());

//Assign 'app' to use .urlencoded to parse incoming requests with URL-encoded payloads.
app.use(express.urlencoded({ extended: true }));

//Serves static files in 'public' folder.
app.use(express.static('public'));

//Sets path for apiRoutes as /api
app.use('/api', apiRoutes);
//Sets path for htmlRoutes as /
app.use('/', htmlRoutes);

//Tells 'app' to listen on the 'PORT' variable.
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
