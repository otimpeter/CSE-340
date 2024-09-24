const express = require('express');
const app = express();
const path = require('path');

// the code Set EJS as the templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// the Serve static files from the public folder
app.use(express.static(path.join(__dirname, 'public')));

// Route for the home page code
app.get('/', (req, res) => {
    res.render('index');
});

// Start the server which was recommened as localhost.
const PORT = 5500;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
