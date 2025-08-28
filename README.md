# ICH Node.js Project

Проект на Node.js с Express сервером, включающий утилиты для работы с датами и файлами.

## Установка

```bash
npm install
```

## Настройка переменных окружения

Создайте файл `.env` в корне проекта:

```env
# Порт для запуска сервера
PORT=3000

# Имя файла для операций с файлами
FILENAME=example.txt

# Другие переменные окружения
NODE_ENV=development
```

## Запуск

### Режим разработки
```bash
npm run dev
```

### Продакшн режим
```bash
npm start
```

## API Endpoints

### GET /
Главная страница с информацией о приложении

### GET /date?format=short|long|iso
Получение текущей даты в указанном формате

### POST /file
Создание файла с указанным содержимым

**Body:**
```json
{
  "filename": "example.txt",
  "content": "Содержимое файла"
}
```

## Структура проекта

- `src/index.js` - Главный файл приложения
- `src/date-format.js` - Утилиты для работы с датами
- `src/file-operation.js` - Операции с файлами

## Зависимости

- express - веб-фреймворк
- cors - middleware для CORS
- dotenv - загрузка переменных окружения
