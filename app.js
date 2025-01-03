const express = require('express');
const app = express();
const port = 3000;

const charactersRoute = require('./routers/characters');
const teamsRoute = require('./routers/teams');

app.use(express.json());
app.use('/personaggi', charactersRoute);  
app.use('/squadre', teamsRoute);          

app.listen(port, () => {
    console.log(`Server in ascolto su http://localhost:${port}`);
});
