const express = require('express')

const app = express();

app.get('/',(req,res)=>{
    res.json({msg:"Wellcome to the keeper app"})
});

// Define routes
app.use('/api/users',require('./routes/users'))
app.use('/api/auth',require('./routes/auth'))
app.use('/api/Contacts.js',require('./routes/Contacts.js'))


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {console.log(`Server Runs on ${PORT}`);})