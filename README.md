# Proyecto de prueba Node + Postgres + Docker

Este proyecto es un ejemplo para probar node + postgresql en un contenedor de docker.

## Requisitos:

- node.js versión 18 o superio
- docker v24 o superior [WEB oficial descarga](https://www.docker.com/products/docker-desktop/);

## Ejecutar proyecto de prueba

- clonar el proyecto:

```bash
git clone https://github.com/felipejoq/node-postgresq-docker.git
```

- Navegar a la carpeta del proyecto:

```bash
cd node-postgresq-docker
```

- Renombrar el archiv .env.template a .env y configurar allí las variables de entorno preferidas.

- Instalar los paquetes de node:

```bash
npm install
```

- Levantar el contenedor de docker con postgresql de manera detached (desacoplada de la terminal)

```bash
docker-compose up -d
```

- Probar la conexión de node con postgresql en un contenedor de docker:

```bash
node index.js
```

> Debería retornar la fecha desde el servidor de postgresql