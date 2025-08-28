const fs = require("fs");
const dotenv = require("dotenv");

dotenv.config();

const filename = process.env.FILENAME;

// Проверяем, что переменная FILENAME установлена
if (!filename) {
  console.error("Ошибка: переменная окружения FILENAME не установлена");
  console.error("Создайте файл .env и добавьте FILENAME=имя_файла.txt");
  process.exit(1);
}

fs.writeFile(filename, "Hello from Node.js with dotenv!", (err) => {
  if (err) {
    console.error("Ошибка при записи файла:", err);
  } else {
    console.log(`Файл ${filename} успешно создан и записан.`);

    fs.readFile(filename, "utf8", (err, data) => {
      if (err) {
        console.error("Ошибка при чтении файла:", err);
      } else {
        console.log("Содержимое файла:");
        console.log(data);
      }
    });
  }
});
