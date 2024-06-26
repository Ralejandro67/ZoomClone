# ZOOM Clone

## Descripción / Description

### Español
¡Bienvenido al repositorio de mi Clon de Zoom!

Este proyecto es un clon de la aplicación de videollamadas Zoom, lo de desarrolle con el objetivo de de investigar y analizar mas a fondo el funcionamiento de las aplicaciones de comunicacion como Zoom, por lo tanto, esta aplicacion no busca lucrarse de ninguna forma. La aplicación la desarrolle a traves del framework Next.Js, Tailwind.css, Typescript y Stream como el motor para las videllamadas. Esta permite a los usuarios realizar videollamadas una o mas personas, compartir pantallas y archivos, y muchas otras funcionalidades que facilitan la colaboración a distancia.

### English
Welcome to my Zoom Clone repository!

This project is a clone of the Zoom video conferencing application, developed with the aim of investigating and analyzing the functionality of communication applications like Zoom. Therefore, this application does not seek to profit in any way. I developed the application using the Next.js framework, Tailwind.css, TypeScript, and Stream as the engine for video calls. It allows users to make video calls with one or more people, share screens and files, and includes many other features that facilitate remote collaboration.

## Características / Features
### Español
En este proyecto podrás identificar las siguientes características:
- Autenticación: Para la autenticación y la autorización, he utilizado Clerk, que permite a los usuarios iniciar sesión de manera segura a través de redes sociales o métodos tradicionales de correo electrónico y contraseña, asegurando niveles de acceso y permisos apropiados dentro de la plataforma.
- Reuniones: Se pueden crear nuevas reuniones fácilmente y permite al usuario configurar la cámara y los ajustes de micrófono antes de unirse a través de Stream.
- Controles de Reunión: Durante una reunión, los participantes tienen control total sobre los aspectos de la reunión, incluyendo grabación, reacciones con emojis, compartir pantalla, silenciar/reactivar micrófono, ajustes de sonido, diseño de cuadrícula, vista de lista de participantes, salir de una reunión o los creadores pueden finalizarla para todos los asistentes, y gestión individual de participantes (fijar, silenciar, reactivar micrófono, bloquear, permitir compartir video).
- Programacion de Reuniones Futuras: Los usuarios pueden ingresar los detalles de la reunión (fecha, hora) para programar reuniones futuras, accesibles en la página de 'Próximas Reuniones' para compartir el enlace o comenzar de inmediato.
- Lista de Reuniones Pasadas: Accede a una lista de reuniones previamente realizadas, incluyendo detalles y metadatos.
- Ver Reuniones Grabadas: Accede a grabaciones de reuniones pasadas para revisión o referencia.
- Sala Personal: Los usuarios tienen una sala personal con un enlace único de reunión para reuniones instantáneas, que se puede compartir con otros.
- Unirse a Reuniones a través de Enlace: Únete fácilmente a reuniones creadas por otros proporcionando un enlace.
- Funcionalidades en Tiempo Real: Todas las interacciones dentro de la plataforma son seguras y ocurren en tiempo real, manteniendo la privacidad del usuario y la integridad de los datos.
- Diseño Responsivo: Sigue los principios de diseño responsivo para asegurar una experiencia óptima del usuario en todos los dispositivos, adaptándose sin problemas a diferentes tamaños de pantalla y resoluciones.

### English
In this project you will be able to identify the following features:
- Authentication: For the authentication and the authorization, I have use Clerk which allows users to securely log in via social sign-on or traditional email and password methods, while ensuring appropriate access levels and permissions within the platform.
- Meetings: New meetings can be easily created and it allows user to configure the camera and microphone settings before joining through Stream.
- Meeting Controls: During a meeting, participants have full control over meeting aspects, including recording, emoji reactions, screen sharing, muting/unmuting, sound adjustments, grid layout, participant list view, leave a meeting or creators can end it for all attendees, and individual participant management (pinning, muting, unmuting, blocking, allowing video share).
- Schedule Future Meetings: Users can input meeting details (date, time) to schedule future meetings, accessible on the 'Upcoming Meetings' page for sharing the link or immediate start.
- Past Meetings List: Access a list of previously held meetings, including details and metadata.
- View Recorded Meetings: Access recordings of past meetings for review or reference.
- Personal Room: Users have a personal room with a unique meeting link for instant meetings, shareable with others.
- Join Meetings via Link: Easily join meetings created by others by providing a link.
- Secure Real-time Functionality: All interactions within the platform are secure and occur in real-time, maintaining user privacy and data integrity.
- Responsive Design: Follows responsive design principles to ensure optimal user experience across devices, adapting seamlessly to different screen sizes and resolutions.

## Instrucciones / Instructions
### Español
Si deseas clonar el repositorio deberas seguir los siguientes pasos para garantizar el funcionamiento del proyecto:

**Herramientas que se usaran**
- Next.js
- TypeScript
- Clerk
- getstream
- shadcn
- Tailwind CSS

De antemano deberas de instalar las siguientes herramientas para el proceso:
- [Git](https://git-scm.com)
- [Node.js](https://nodejs.org/en)
- [npm (Node Package Manager)](https://www.npmjs.com)

**Clonar el Repositorio**
```sh
git clone https://github.com/Ralejandro67/ZoomClone
```

**Instalacion**

Instala las dependencias del projecto usando el comando:
```sh
npm install
```

**Archivo .env**

En la raiz del projecto deberas crear un archivo llamado ".env.local" y dentro del archivo deberas poner el siguiente contenido:
```sh
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

NEXT_PUBLIC_STREAM_API_KEY=
STREAM_SECRET_KEY=

NEXT_PUBLIC_BASE_URL=
```
Despues de cada signo de igual, deben ir las credenciales que obtendras de Stream y Clerk al crear o ingresar a tus cuentas existentes para cada herramienta. Pueder acceder a ambas herramientas aqui: [Clerk](https://clerk.com) y [Stream](https://getstream.io)

**Ejecutando el Proyecto**

Cuando realices todos los pasos anteriores, el projecto estara listo para ejecutarlo, para el cual, en la terminal deberas correr el siguiente comando:
```sh
npm run dev
```
Una vez hayas ejecutado el comando, el proyecto empezara a correr en "http://localhost:3000" por defecto, sino corre en localhost:3000, despues de haber ejecutado el comando "npm run dev" se te dara la **URL** en la que esta corriendo el proyecto, copia la url en tu navegador y listo.

### English
If you wish to clone the repository, you must follow these steps to ensure the project functions correctly:

**Tools that will be use**
- Next.js
- TypeScript
- Clerk
- getstream
- shadcn
- Tailwind CSS

Beforehand, you will need to install the following tools for the process:
- [Git](https://git-scm.com)
- [Node.js](https://nodejs.org/en)
- [npm (Node Package Manager)](https://www.npmjs.com)

**Clone the Repository**
```sh
git clone https://github.com/Ralejandro67/ZoomClone
```

**Installation**

Install the project dependencies using the command:
```sh
npm install
```

**File .env**

In the root of the project, you need to create a file named ".env.local" and inside the file, you need to add the following content:
```sh
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

NEXT_PUBLIC_STREAM_API_KEY=
STREAM_SECRET_KEY=

NEXT_PUBLIC_BASE_URL=
```
After each equals sign, you should place the credentials that you will obtain from Stream and Clerk when creating or logging into your existing accounts for each tool. You can access both tools here: [Clerk](https://clerk.com) and [Stream](https://getstream.io)

**Running the Project**

When you have completed all the previous steps, the project will be ready to run. To do this, you need to run the following command in the terminal:
```sh
npm run dev
```
Once you have executed the command, the project will start running at "http://localhost:3000" by default. If it doesn't run at localhost:3000, after executing the command "npm run dev", you will be given the **URL** where the project is running. Copy the URL into your browser, and you're all set.
