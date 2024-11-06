# Node Api Rest Mongo

Servidor con base de datos Mongo; utilizando Node, Express, Mongoose, MongoDb y Docker

### Antes de empezar, instalaciones necesarias:
-NodeJs
-MongoDb
-Docker

### 1. Clonar el repositorio: `git clone https://github.com/LucaasN/node-api-rest-mongo.git`

### 2. Acceder al proyecto: `cd node-api-rest-mongo`

### 3. Instalar dependencias: `npm i` o `npm install`

### 4. Configurar el archivo .env:
Crea un archivo .env en la raíz del proyecto y configura las variables de entorno en base al archivo .env.template.

### 5. Ejecutar docker:
Teniendo abierto Docker, usa el siguiente comando: `docker compose up -d`

### 6. Ejecutar el proyecto:
Para iniciar el servidor en modo de desarrollo, usa el siguiente comando: `npm run dev`

### 7. Backend deployado en railway: https://node-api-rest-mongo-production-82fd.up.railway.app/books
Routes:
Get: https://node-api-rest-mongo-production-82fd.up.railway.app/books
GetById: https://node-api-rest-mongo-production-82fd.up.railway.app/books/:id
Post: https://node-api-rest-mongo-production-82fd.up.railway.app/books
Put: https://node-api-rest-mongo-production-82fd.up.railway.app/books/:id
Patch: https://node-api-rest-mongo-production-82fd.up.railway.app/books/:id
Delete: https://node-api-rest-mongo-production-82fd.up.railway.app/books/:id
