# 👨‍🎓 System Software Basics Project

Alfabank website page makeup project for the university's system software basics course, variant №2.

You can look at
[Original Website](https://alfabank.ru/everyday/debit-cards/alfacard/)
and
[My Website Copy](https://kojem9ka.github.io/spo-project/)
on GitHub pages.

<details><summary>Frontend</summary>

---
### 👨‍💻 Technology Stack
* [React.js](https://reactjs.org/)
* [TypeScript](https://www.typescriptlang.org/)
* [Tailwind CSS](https://tailwindcss.com/)

### <> Development

1. `npm install`
2. `npm start`

### 🛫 Production build

1. `npm install`
2. `npm run build`
3. Install npm serve: `npm install -g serve`
4. Start build result with: `serve -s build -l 4000`
5. Open `localhost:4000` in your browser
---
</details>

<details><summary>Backend</summary>

---
⚠ Caution, the backend is written in pure PHP as a Restful API 🙌.

### 👨‍💻 Technology Stack
* [PHP 😥](https://www.php.net/) + [pgsql](https://www.php.net/manual/ru/book.pgsql.php)
* [PostgreSQL 🐘](https://www.postgresql.org/)

### 💨Dev & Run server: **Docker**🐳
> Docker is used to make it easy to move a project together with the database contents to other devices.

* To start the *server development* and the *database* containers run the command:

`docker-compose -f docker-compose.dev-server.yml up -d`

* To stop it:

`docker-compose -f docker-compose.dev-server.yml down -t 3`

* How to open services:

**Check [.env](.env) file to get environment variables.**

DB: `localhost:${POSTGRES_PORT}`

Server: `localhost:${LOCAL_SERVER_PORT}`

---
</details>