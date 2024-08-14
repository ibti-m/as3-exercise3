const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;


app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/form.html');
});

app.post('/submit', (req, res) => {
    const name = req.body.name;
    const phone = req.body.phone;

    const phonePattern = /^\d{3}-\d{3}-\d{4}$/;
    const isPhoneValid = phonePattern.test(phone);

    if (isPhoneValid) {
        res.send(`<h1>Submitted!</h1><p>Thank you, ${name}. Your phone number (${phone}) is valid.</p>`);
    } else {
        res.send(`<h1>Submission Failed!</h1><p>Sorry, ${name}. Your phone number (${phone}) is not in the correct format. Please use the format ddd-ddd-dddd.</p>`);
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
