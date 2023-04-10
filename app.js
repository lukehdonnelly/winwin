const express = require('express');
const mongoose = require('mongoose');
const itemsRouter = require('./routes/items');

const connectionString = `mongodb+srv://chat:chat@cluster0.r5hc3oj.mongodb.net/test`;

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch((error) => console.error('Failed to connect to MongoDB:', error));

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use(express.static('public'));

app.use('/api/items', itemsRouter);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
