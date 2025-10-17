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

### 2025-09-21
- **Fecha**: 2025-09-21
- **Objetivo**: Hacer el componente principal de la web, un header y poner la navbar debajo.
- **Qué hice**:
  - Creé el componente `Header` usando otro portfolio como inspiración
  - Bajé la navbar
  - Subí una foto mía (hay que cambiarla por una mejor)
  - Ajuste algunos de los colores del tema
- **Errores / problemas**:
  1. La foto que tengo no es muy buena, no se ve de calidad y el recorte no es el mejor
  2. El botón del toggle de tema sigue sin estar bien en pantallas pequeñas y hay muchos más problemas en pantallas pequeñas ahora que incluí el header
- **Solución final**:
  1. Lo dejamos para más adelante, cuando tenga una foto mejor
  2. Vamos a terminar de hacer la web en escritorio y luego ya nos pondremos con el responsive de pantallas pequeñas
- **Tiempo invertido**: 1.5 h
- **Siguiente paso**: Hacer las páginas de sobre mí, proyectos y contacto.

### 2025-09-22
- **Fecha**: 2025-09-22
- **Objetivo**: Hacer la página de sobre mí y experiencia.
- **Qué hice**:
  - Creé la página de sobre mí con un poco de texto y una línea de tiempo de habilidades
  - Hice el componente `SkillsAndAbout` para mostrar la línea de tiempo
  - Añadí algunos iconos a la línea de tiempo
  - Creé la página de experiencia con una lista de trabajos y proyectos
  - Hice el componente `TimelineBlock` para mostrar cada trabajo/proyecto
  - Hice el componente `Experience` para mostrar la lista de trabajos/proyectos
  - Añadí rutas para las nuevas páginas
- **Tiempo invertido**: 2 h
- **Siguiente paso**: Hacer la página de proyectos y la de contacto.

### 2025-09-23
- **Fecha**: 2025-09-23
- **Objetivo**: Mejorar un poco la estética de la página
- **Qué hice**:
  - Me formé un poco en el uso de dark mode (https://m2.material.io/design/color/dark-theme.html#properties)
  - Cambié el theme para que el modo oscuro tenga más contraste, se vea mejor y tenga distintas profundidades
  - Añadí un poco de interactividad a los bloques de experiencia para que se expandan al hacer click y muestren más información
- **Tiempo invertido**: 1h
- **Siguiente paso**: Hacer la página de proyectos y la de contacto.

### 2025-10-02
- **Fecha**: 2025-10-02
- **Objetivo**: Hacer la página de proyectos
- **Qué hice**:
  - Creé la página de proyectos con una cuadrícula de tarjetas de proyecto
  - Hice el componente `ProjectCard` para mostrar cada proyecto
  - Añadí rutas para la nueva página
  - Ajusté el diseño para que se vea bien en pantallas grandes
- **Errores / problemas**:
  1. No sé muy bien cómo hacer que las tarjetas se ajusten bien en pantallas medianas y pequeñas
  2. Aprender la diferencia entre funciones flexha con llaves y sin llaves
- **Solución final**:
  1. Probé varias cosas y al final opté por hacer la estructuración dinámica en función del número de proyectos (máximo 4 columnas)
  2. Leí un poco sobre arrow functions y entendí que si no tienen llaves devuelven el valor de la expresión directamente, mientras que si tienen llaves necesito un return explícito
- **Tiempo invertido**: 1.5 h
- **Siguiente paso**: Hacer la página de contacto y luego revisar el diseño responsive para pantallas pequeñas.