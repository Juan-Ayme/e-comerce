# Tienda Virtual para el Instituto la Pontificia

## Correr en dev
1. Clonar el repositorio
2. Crear una copia del ```.env.template``` y renombrarlo a ```.env``` luego cambiar los variables de entorno
3. Instalar Correr el proyecto ```npm install```
4. Levantar la base de datos ```docker compose up -d```
5. Correr las migraciones  de Prisma ```npx prisma migrate dev```
6. Correr el proyecto ```npm run dev```

## Correr en prod
