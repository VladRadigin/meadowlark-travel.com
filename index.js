const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// Пользовательская страница 404
app.use((req, res) => {
  res.type('text/plain');
  res.status(404);
  res.send('404 - Не найдено');
})

// Пользовательская страница 500
app.use((err, req, res, next) => {
  console.error(err.message);
  res.type('text/plain');
  res.status(500);
  res.send('500 - Ошибка сервера');
})

app.listen(port, () => console.log(`Express запущен на http://localhost:${port}; ` + `нажмите Ctrl+C для заверщения.`));