# Landing Page Premium - Reformas M&D

Este proyecto es una Landing Page corporativa de nivel profesional y alta conversión diseñada para la empresa **Reformas M&D**.

El sitio ha sido desarrollado utilizando un stack moderno, modular y optimizado, siguiendo las mejores prácticas de UX/UI, diseño responsivo y SEO básico.

---

## 🎨 Sistema de Diseño y Estética
- **Colores Principales**: Verde Claro Premium (`#2d8a63`), Grises Oscuros/Elegantes (`#121417`, `#1c1e22`) y Acentos en Dorado/Bronce y Naranja.
- **Visuales**: Imágenes fotorrealistas de alta resolución generadas con IA para representar el hero, el equipo de trabajo y los servicios clave.
- **Tipografía**: Fuentes geométricas modernas (`Outfit` y `Plus Jakarta Sans`) cargadas vía Google Fonts.
- **Animaciones**: Transiciones sutiles, hovers interactivos (escala y elevación en tarjetas) y efectos de aparición al hacer scroll (*Reveal on Scroll*).

---

## 📁 Estructura del Proyecto

```text
├── dist/                     # Versión compilada lista para producción (Live Server)
│   ├── assets/               # JS y CSS compilados con rutas relativas
│   ├── images/               # Imágenes optimizadas para la producción
│   └── index.html            # Archivo de entrada ejecutable
├── public/                   # Recursos estáticos
│   └── images/               # Imágenes del sitio (Hero, Nosotros, Servicios, etc.)
├── src/                      # Código fuente en React + TypeScript
│   ├── components/           # Componentes modulares
│   │   ├── Navbar.tsx        # Navegación sticky y menú móvil
│   │   ├── Hero.tsx          # Portada de impacto con llamada a la acción
│   │   ├── Services.tsx      # Tarjetas de servicios con iconos interactivos
│   │   ├── Works.tsx         # Portafolio Masonry con filtros dinámicos
│   │   ├── About.tsx         # Historia del equipo y valores corporativos
│   │   ├── Contact.tsx       # Formulario interactivo, mapa y WhatsApp
│   │   └── Footer.tsx        # Enlaces rápidos y botón de regreso al inicio
│   ├── App.tsx               # Componente principal e integrador
│   ├── index.css             # Estilos globales y variables de diseño (:root)
│   └── main.tsx              # Punto de entrada de React
├── package.json              # Configuración y dependencias de npm
└── vite.config.ts            # Configuración de Vite con rutas relativas
```

---

## 🚀 Cómo Ejecutar el Proyecto

Tienes **dos opciones** independientes para ejecutar y visualizar esta Landing Page:

### Opción 1: Ejecutar con Live Server (Sin necesidad de instalar Node.js)
Ideal para abrir la web de forma rápida y probarla inmediatamente en el navegador.
1. Abre esta carpeta en **VS Code**.
2. Asegúrate de tener instalada la extensión **Live Server** de VS Code.
3. Despliega la carpeta `dist/` en el explorador de archivos.
4. Haz clic derecho sobre el archivo `dist/index.html` y selecciona **"Open with Live Server"** (o haz clic en el botón **"Go Live"** en la barra inferior de VS Code).
5. ¡Listo! La Landing Page se ejecutará en tu navegador local con todos sus estilos, imágenes y lógica funcional.

### Opción 2: Ejecutar en Entorno de Desarrollo (Vite + React)
Ideal si deseas modificar el código fuente de los componentes, editar estilos o realizar nuevas compilaciones.
1. Instala las dependencias ejecutando:
   ```bash
   npm install
   ```
2. Inicia el servidor de desarrollo local de Vite:
   ```bash
   npm run dev
   ```
3. Abre el enlace local que te proporciona la consola (usualmente `http://localhost:5173`).
4. Para generar una nueva versión compilada en `dist/`, ejecuta:
   ```bash
   npm run build
   ```

---

## ⚙️ Personalización de Contenidos

- **Modificar Imágenes**: Puedes sustituir las imágenes de la carpeta `public/images/` por tus propias fotografías manteniendo el mismo nombre de archivo (`hero_renovation.jpg`, `about_team.jpg`, `bathroom.jpg`, etc.).
- **Modificar Textos y Servicios**: Abre los archivos correspondientes en `src/components/` (por ejemplo, `Services.tsx` para cambiar la descripción de las tarjetas de servicios o `Works.tsx` para agregar nuevos proyectos). Una vez editados, ejecuta `npm run build` para actualizar la versión estática en la carpeta `dist/`.
