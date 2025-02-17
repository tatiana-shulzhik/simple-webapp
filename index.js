const express = require('express');
const dotenv = require('dotenv');
const { sequelize } = require('./config/sequelize');
const bodyParser = require('body-parser');
const balanceRoutes = require('./routes/balance-routes');
const User = require('./models/user');
dotenv.config();


sequelize.authenticate()
  .then(() => console.log('Connection has been established successfully.'))
  .catch((err) => console.error('Unable to connect to the database:', err));


const app = express();
const PORT = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use('/api', balanceRoutes);

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту: ${PORT}`);
});
