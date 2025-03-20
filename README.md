# Monolito Example

Este proyecto es un ejemplo de una aplicación monolítica en Node.js que utiliza el framework Express. El objetivo es servir tanto a un cliente web como a un cliente móvil desde el mismo backend, siguiendo una estructura que permita una futura refactorización para implementar un patrón Backend for Frontend (BFF).

## Dependencias

Este proyecto utiliza las siguientes dependencias:

- **Node.js**: Entorno de ejecución para JavaScript en el servidor.
- **Express**: Framework web para Node.js que facilita la creación de aplicaciones y API de forma sencilla.

## Estructura del Proyecto

```
monolito_example/
├── src/
│   ├── app.js          # Archivo principal de la aplicación
│   ├── controllers/    # Controladores para la lógica de rutas
│   ├── routes/         # Definición de rutas para clientes
│   └── services/       # Servicios para el manejo de datos
└── package.json        # Configuración del proyecto y dependencias
```

## Instalación

1. Asegúrate de tener **Node.js** instalado en tu sistema. Si no lo tienes, puedes descargarlo de [Node.js](https://nodejs.org/).
2. Clona este repositorio en tu sistema.
3. Abre una terminal en el directorio del proyecto y ejecuta el siguiente comando para instalar las dependencias:

   ```bash
   npm install
   ```

## Ejecución

Para ejecutar la aplicación, utiliza el siguiente comando:

```bash
npm start
```

La aplicación se ejecutará en el puerto configurado (por defecto, el puerto 3000). Puedes acceder a los endpoints del proyecto en:

- **Cliente Web:** `http://localhost:3000/data?client=web`
- **Cliente Móvil:** `http://localhost:3000/data?client=mobile`

## Scripts

- **start**: Ejecuta la aplicación.
- **test**: Muestra un mensaje de error en caso de que no existan pruebas especificadas.

oligwüi