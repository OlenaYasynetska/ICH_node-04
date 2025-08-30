/**
 * Утилиты для работы с датами
 */

/**
 * Форматирует дату в читаемый вид
 * @param {Date} date - Дата для форматирования
 * @param {string} format - Формат вывода ('short', 'long', 'iso')
 * @returns {string} Отформатированная дата
 */
function formatDate(date = new Date(), format = 'short') {
  if (!(date instanceof Date)) {
    throw new Error('Первый параметр должен быть объектом Date');
  }

  switch (format) {
    case 'short':
      return date.toLocaleDateString('ru-RU');
    case 'long':
      return date.toLocaleDateString('ru-RU', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    case 'iso':
      return date.toISOString();
    default:
      return date.toLocaleDateString('ru-RU');
  }
}

/**
 * Получает текущую дату в указанном формате
 * @param {string} format - Формат вывода
 * @returns {string} Отформатированная текущая дата
 */
function getCurrentDate(format = 'short') {
  return formatDate(new Date(), format);
}

/**
 * Добавляет дни к дате
 * @param {Date} date - Исходная дата
 * @param {number} days - Количество дней для добавления
 * @returns {Date} Новая дата
 */
function addDays(date, days) {
  if (!(date instanceof Date)) {
    throw new Error('Первый параметр должен быть объектом Date');
  }
  if (typeof days !== 'number') {
    throw new Error('Второй параметр должен быть числом');
  }

  const newDate = new Date(date);
  newDate.setDate(date.getDate() + days);
  return newDate;
}

module.exports = {
  formatDate,
  getCurrentDate,
  addDays
};

