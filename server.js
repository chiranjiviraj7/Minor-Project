const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const knex = require('knex');
const ejs = require('ejs');


const db = knex({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: 'postgres',
        password: 'Psql123',
        database: 'virtualtour'
    }
})

const app = express();

let intialPath = path.join(__dirname, "public");


app.set('views', intialPath);
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(express.static(intialPath));



app.get('/', (req, res) => {
    res.sendFile(path.join(intialPath, "index.html"));
})

  
app.get('/admin', (req, res) => {
    db.select('*').from('feedback').then(data => {
      console.log(data); // <-- add this line to check if data is being correctly retrieved
      res.render('admin', { feedback: data });
    }).catch(err => {
      console.log(err);
      res.status(500).json({ success: false, message: 'Error retrieving feedback data. Please try again later.' });
    });
  });

  

app.get('/admin_login', (req, res) => {
    res.sendFile(path.join(intialPath, "admin_login.html"));
})
app.get('/index1', (req, res) => {
    res.sendFile(path.join(intialPath, "index1.html"));
})
app.get('/index2', (req, res) => {
    res.sendFile(path.join(intialPath, "index2.html"));
})




app.post('/login-user', (req, res) => {
    const { email, password } = req.body;

    db.select('name', 'email')
    .from('users')
    .where({
        email: email,
        password: password
    })
    .then(data => {
        if(data.length){
            res.json(data[0]);
        } else{
            res.json('email or password is incorrect');
        }
    })
})

app.post('/feedback-user', (req, res) => {
    const { name, email, message } = req.body;
  
    db("feedback").insert({
      name: name,
      email: email,
      message: message
    })
    .then(() => {
      res.status(200).json({ success: true, message: 'Thank you for your feedback!' });
     
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ success: false, message: 'Error submitting feedback. Please try again later.' });
    });
  });
  
app.listen(3000, (req, res) => {
    console.log('listening on port 3000......')
})