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
