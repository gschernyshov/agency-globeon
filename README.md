# 🌐 Agency Globeon

**Agency Globeon** — мой первый **pet-проект**, разработанный на стеке **MERN (MongoDB, Express, React, Node.js)**.  
Проект представляет собой сайт агентства с контактной формой, серверной логикой и интеграцией с почтовым сервисом для отправки заявок клиентов.  
В процессе работы я освоил основы полноценной клиент-серверной архитектуры и настройку окружений для разработки и продакшена.

---

## 🧰 Технологический стек

**Frontend:** React, HTML, CSS  
**Backend:** Node.js, Express, MongoDB, Mongoose  
**Прочее:** Nodemailer, express-validator, concurrently, cross-env, config  

---

## 🚀 Основной функционал

- 📬 Отправка форм с сайта на email через **Nodemailer**
- 🗂 Работа с базой данных **MongoDB** через **Mongoose**
- 🧾 Валидация данных на сервере с помощью **express-validator**
- 🔄 Разделение на клиентскую и серверную часть (frontend + backend)
- ⚙️ Поддержка различных окружений через **config**
- 🧠 Удобные скрипты для запуска, сборки и деплоя

---

## ⚙️ Настройки окружения

Проект использует пакет **`config`** для хранения параметров окружения.  
Перед запуском создайте в корне проекта папку **`config`** и добавьте файлы:

- `default.json` — настройки для разработки  
- `production.json` — настройки для продакшена  

Пример содержимого файла:

```json
{
  "port": 5000,
  "mongoUri": "mongodb+srv://<username>:<password>@cluster.mongodb.net/<dbname>",
  "passwordAdmin": "admin_password",
  "userMail": "your_email@example.com",
  "passwordMail": "your_email_password"
}
```

---

## 📦 Команды для запуска и сборки

```bash
#🧑‍💻 Клонирование репозитория
git clone https://github.com/gschernyshov/agency-globeon.git
cd agency-globeon

# 📦 Установка зависимостей для сервера
npm install

# 📦 Установка зависимостей для клиента
npm run client:install

# 🏗️ Сборка клиента (build)
npm run client:build

# 🚀 Запуск сервера в продакшене
npm run start

# 🔥 Запуск сервера в режиме разработки (с автообновлением)
npm run server

# 💻 Запуск клиента (frontend)
npm run client

# ⚙️ Запуск всего проекта в режиме разработки (сервер + клиент одновременно)
npm run dev
```