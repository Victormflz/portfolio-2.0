# 💼 Portfolio Víctor Flórez

Portfolio profesional de **Víctor Flórez** - Desarrollador Web Full Stack especializado en backend y diseño web moderno.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-success?style=for-the-badge)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## 🚀 Características

- ✨ **Diseño Moderno**: Estética minimalista con animaciones sutiles
- 📱 **Responsive**: Optimizado para todos los dispositivos
- ⚡ **Alto Rendimiento**: Carga rápida y optimizada
- 🎨 **Animaciones GSAP**: Transiciones fluidas y profesionales
- 📧 **Formulario de Contacto**: Integrado con EmailJS
- 🌐 **Multiidioma**: Español e Inglés
- ♿ **Accesible**: Siguiendo estándares WCAG
- 🔍 **SEO Optimizado**: Meta tags y Schema.org

## 🛠️ Tecnologías Utilizadas

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Animaciones**: GSAP 3.12.5 con ScrollTrigger
- **Email Service**: EmailJS
- **Fuentes**: Google Fonts (Montserrat, Playfair Display)
- **Deployment**: Vercel

## 📂 Estructura del Proyecto

```
portfolio/
├── index.html              # Página principal
├── styles.css              # Estilos globales (1341 líneas)
├── script.js               # JavaScript y animaciones (529 líneas)
├── profile.jpg             # Foto de perfil
├── *.png                   # Imágenes de proyectos
├── package.json            # Configuración npm
├── vercel.json             # Configuración de deployment
├── EMAILJS_SETUP.md        # Guía de configuración EmailJS
├── IMAGE_OPTIMIZATION.md   # Guía de optimización de imágenes
└── README.md               # Este archivo
```

## 🚀 Instalación y Uso

### Opción 1: Uso Directo

Simplemente abre `index.html` en tu navegador:

```bash
# Windows
start index.html

# macOS
open index.html

# Linux
xdg-open index.html
```

### Opción 2: Con Node.js

```bash
# Instalar dependencias (no hay dependencias, solo configura package.json)
npm install

# Desarrollo - abre el proyecto en el navegador
npm run dev

# Build - verifica que todo está listo
npm run build
```

### Opción 3: Servidor Local

```bash
# Con Python
python -m http.server 8000

# Con Node.js (http-server)
npx http-server

# Con PHP
php -S localhost:8000
```

Luego abre: `http://localhost:8000`

## 📧 Configurar EmailJS

Para que el formulario de contacto funcione:

1. **Crea una cuenta** en [EmailJS.com](https://www.emailjs.com/)
2. **Configura un servicio** de email (Gmail, Outlook, etc.)
3. **Crea un template** de email
4. **Actualiza las credenciales** en `script.js` (línea ~377):

```javascript
emailjs.init({
    publicKey: "TU_PUBLIC_KEY_AQUI",
});

emailjs.sendForm('TU_SERVICE_ID', 'TU_TEMPLATE_ID', this)
```

Ver guía completa en [EMAILJS_SETUP.md](EMAILJS_SETUP.md)

## 🖼️ Optimizar Imágenes

Para mejorar el rendimiento:

1. Usa [TinyPNG](https://tinypng.com/) para comprimir imágenes
2. Convierte a WebP con [Squoosh](https://squoosh.app/)
3. Asegúrate de que `profile.jpg` sea < 150KB

Ver guía completa en [IMAGE_OPTIMIZATION.md](IMAGE_OPTIMIZATION.md)

## 🌐 Desplegar en Vercel

### Deploy con Git (Recomendado)

```bash
# 1. Inicializar repositorio
git init
git add .
git commit -m "Initial commit"

# 2. Subir a GitHub
git remote add origin https://github.com/TU_USUARIO/TU_REPO.git
git branch -M main
git push -u origin main

# 3. Conectar con Vercel
# Ve a vercel.com y conecta tu repositorio
```

### Deploy Directo con Vercel CLI

```bash
# Instalar Vercel CLI
npm install -g vercel

# Login
vercel login

# Preview deploy
npm run preview

# Production deploy
npm run deploy
```

## 📝 Personalización

### Cambiar Colores

Edita las variables CSS en `styles.css` (líneas 1-8):

```css
:root {
    --carbon-black: #0A0A0F;      /* Fondo principal */
    --charcoal: #1A1A24;          /* Fondo secundario */
    --petrol-blue: #047857;       /* Color de acento */
    --teal-accent: #059669;       /* Color de acento secundario */
    --gold-accent: #D4AF37;       /* Color de resaltado */
}
```

### Cambiar Contenido

Todo el contenido está en `index.html`. Busca los atributos `data-es` y `data-en` para actualizar textos bilingües.

### Agregar/Quitar Proyectos

Edita la sección `#projects` en `index.html` (línea ~154). Cada proyecto es un `<article class="project-card">`.

## 🎨 Secciones del Portfolio

1. **Hero**: Presentación principal con foto
2. **Servicios**: Desarrollo Backend, Frontend, Full Stack, Contenido
3. **Proyectos**: Importadora Caifu, Parroquia Santa Rita, Reformas JF, Portfolio
4. **Testimonios**: Opiniones de clientes
5. **Contacto**: Formulario funcional con EmailJS
6. **Footer**: Enlaces a redes sociales

## 📱 Responsive Breakpoints

- **Desktop**: > 1024px
- **Tablet**: 768px - 1024px
- **Mobile**: 480px - 768px
- **Small Mobile**: < 480px

## 🔧 Resolución de Problemas

### El formulario no envía emails

- Verifica que hayas configurado correctamente EmailJS
- Revisa la consola del navegador para errores
- Asegúrate de estar conectado a internet

### Las animaciones no funcionan

- Verifica que GSAP se cargue correctamente
- Abre la consola y busca errores de JavaScript
- Si GSAP falla, el contenido se mostrará sin animaciones

### Las imágenes no cargan

- Verifica que los archivos de imagen estén en el mismo directorio
- Revisa que los nombres coincidan exactamente (case-sensitive)

## 📊 Performance

- ⚡ **First Contentful Paint**: < 1.5s
- 🎯 **Time to Interactive**: < 3s
- 📦 **Total Bundle Size**: ~ 50KB (sin imágenes)
- 🖼️ **Lazy Loading**: Habilitado en todas las imágenes

## 🔒 Seguridad

- ✅ HTTPS habilitado (Vercel)
- ✅ Headers de seguridad configurados
- ✅ Sin dependencias con vulnerabilidades
- ✅ Formulario con validación client-side

## 📄 Licencia

MIT License - Siéntete libre de usar este código como plantilla para tu propio portfolio.

## 👤 Autor

**Víctor Flórez**

- 🌐 Website: [victorflórez.com](https://victorflórez.com)
- 💼 LinkedIn: [@víctor-florez-dev](https://www.linkedin.com/in/víctor-florez-dev/)
- 📷 Instagram: [@victormflz](https://www.instagram.com/victormflz/)
- 💻 GitHub: [@Victormflz](https://github.com/Victormflz)
- 📺 YouTube: [@victormflz](https://www.youtube.com/@victormflz)
- 📧 Email: victorproyectxs@gmail.com

## 🙏 Agradecimientos

- [GSAP](https://greensock.com/gsap/) - Librería de animaciones
- [EmailJS](https://www.emailjs.com/) - Servicio de email
- [Google Fonts](https://fonts.google.com/) - Tipografías
- [Vercel](https://vercel.com/) - Hosting y deployment

---

⭐ **Si te gusta este portfolio, dale una estrella en GitHub!**

Hecho con 💚 y ☕ por Víctor Flórez
