const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World from Jenkins Pipeline!');
});

const PORT = 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

