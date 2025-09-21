# DEVLOG

## Formato de entrada
- **Fecha**: YYYY-MM-DD  
- **Objetivo**: breve objetivo del día  
- **Comandos ejecutados**:
  - `npm install ...`
  - `npx ...`
- **Qué hice**:
  - Paso 1: ...
  - Paso 2: ...
- **Errores / problemas**:
  - Error + mensaje (copiar/pegar)
  - Qué probé para solucionarlo
- **Solución final**:
  - ¿Qué funcionó?
- **Tiempo invertido**: X h
- **Siguiente paso**: checklist corta

---

### 2025-09-17
- **Fecha**: 2025-09-17
- **Objetivo**: Inicializar proyecto Vite + React + TypeScript y añadir Tailwind (PostCSS).
- **Comandos ejecutados**:
  - `npm create vite@latest . -- --template react-ts`
  - `npm install`
  - `npm install -D tailwindcss postcss autoprefixer`
  - `npx tailwindcss init -p`
- **Qué hice**:
  - Creé proyecto Vite + TS
  - Generé `tailwind.config.js` y `postcss.config.js`
  - Añadí `@tailwind` directives en `src/index.css` y lo importé en `main.tsx`
- **Errores / problemas**:
  1. La instalación de Tailwind al parecer ha cambiado de la V3 a la V4, también vi que puede instalarse como un plugin de Vite, me informé de qué ventajas/desventajas tenía cada uno
- **Solución final**:
  1. Vi que lo más estándar era usar V4 con PostCSS pero que como plugin es más seamless así que elegí esa opción. Además, son los pasos recomendados en la docu de Tailwind
- **Tiempo invertido**: 1.5 h
- **Siguiente paso**: crear estructura `components/`, `pages/`, subir primer commit.


### 2025-09-20
- **Fecha**: 2025-09-20
- **Objetivo**: Añadir React Router y crear estructura básica de rutas y componentes con Navbar.
- **Comandos ejecutados**:
  - `npm install react-router-dom`
  - `npm install @fontsource/roboto`
  - `npm install @mui/material @emotion/react @emotion/styled`
  - `npm install @mui/icons-material`
- **Qué hice**:
  - Me decidí por usar Material UI para los componentes y la navbar (así que Tailwindcss probablemente desaparecerá en el proceso).
  - Creé estructura de carpetas `components/`
  - Añadí React Router y configuré rutas básicas
  - Creé una paleta de colores para el tema claro y otra para el oscuro
  - Hice un prototipo básico de la navbar con botones que cambian de ruta
- **Errores / problemas**:
  1. Problemas con el diseño de la web: No tengo buen gusto para el diseño web y me costó decidirme por una paleta de colores y un diseño de navbar que me gustara.
  2. Botón de toogle de tema no está donde quiero en pantallas pequeñas
- **Solución final**:
  1. Busqué inspiración en webs que me gustan y usé herramientas como Coolors para generar paletas de colores. Al final opté por un tema claro con azul oscuro y rojo como color de acento.
  2. Lo dejamos para la siguiente sesión
- **Tiempo invertido**: 2.5 h
- **Siguiente paso**: Arreglar el botón de toggle de tema en pantallas pequeñas, crear contenido para las páginas de inicio, sobre mí, proyectos y contacto.

//1 hora el 2025-09-21