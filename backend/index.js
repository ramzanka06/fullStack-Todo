const express = require("express");
const { default: mongoose } = require("mongoose");
const cors = require('cors');
const app = express();
app.use(cors())
const port = 3000

app.use(express.json())
app.use(require('./routes/todo.route'))

mongoose.connect('mongodb+srv://ramzantimirkiev3939:ing300-u@cluster0.qi6ceqo.mongodb.net/Todo')
.then(() => console.log('Запущено'))
.catch(() => console.log('Ошибка'))

app.listen(port, () => {
    console.log(`Порт запущен ${port}`)
})


