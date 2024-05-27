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

De antemano deberas de instalar las siguientes herramientas para el proceso:
- [Git](https://git-scm.com)
- [Node.js](https://nodejs.org/en)
- [npm (Node Package Manager)](https://www.npmjs.com)

**Herramientas**
- Next.js
- TypeScript
- Clerk
- getstream
- shadcn
- Tailwind CSS

**Clonar el Repositorio**

### English


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
