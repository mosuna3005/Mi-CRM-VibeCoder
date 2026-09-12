# Aurora CRM

Landing page de Aurora CRM: gestión de clientes, tienda de productos digitales y captación de leads en redes sociales.

## Ejecutar en local

```bash
npm install
npm start
```

Abre `http://localhost:3000`. El servidor (`server.js`) sirve `aurora-crm.html` y toma el puerto de la variable de entorno `PORT` si existe (por defecto 3000).

## Desplegar en Railway

1. En Railway: **New Project → Deploy from GitHub repo** y selecciona `Mi-CRM-VibeCoder`.
2. Si el repo es privado, autoriza la GitHub App de Railway para acceder a él cuando te lo pida.
3. No hace falta configurar nada más: Railway detecta el proyecto como Node (por `package.json`), ejecuta `npm install` y luego `npm start`, y asigna el puerto automáticamente.
4. Al terminar el deploy, Railway genera una URL pública (`Settings → Networking → Generate Domain`) para acceder al sitio.

## Estructura

- `aurora-crm.html` — la landing page (HTML/CSS/JS, sin dependencias externas de build)
- `server.js` — servidor Node mínimo que sirve el HTML
- `package.json` — script `start` para que Railway sepa cómo arrancar el proyecto
