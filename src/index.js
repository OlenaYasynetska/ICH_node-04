const express = require('express');
const cors = require('cors');
const { getCurrentDate } = require('./date-format');
const { writeFile, readFile } = require('fs').promises;
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.json({
    message: 'Добро пожаловать в ICH Node.js приложение!',
    currentDate: getCurrentDate('long'),
    timestamp: new Date().toISOString()
  });
});

app.get('/date', (req, res) => {
  const format = req.query.format || 'short';
  try {
    const date = getCurrentDate(format);
    res.json({ date, format });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.post('/file', async (req, res) => {
  try {
    const { filename, content } = req.body;
    
    if (!filename || !content) {
      return res.status(400).json({ 
        error: 'Необходимо указать filename и content' 
      });
    }

    await writeFile(filename, content, 'utf8');
    const fileContent = await readFile(filename, 'utf8');
    
    res.json({
      message: 'Файл успешно создан',
      filename,
      content: fileContent
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.use((err, req, res, next) => {
  console.error('Ошибка сервера:', err);
  res.status(500).json({ error: 'Внутренняя ошибка сервера' });
});

app.use('*', (req, res) => {
  res.status(404).json({ error: 'Маршрут не найден' });
});

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
  console.log(`Текущая дата: ${getCurrentDate('long')}`);
  console.log(`Откройте http://localhost:${PORT} в браузере`);
});

module.exports = app;
