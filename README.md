# ⚡ Proyecto React + Vite + Bootstrap - Porfolio para Usina Creativa - Sitio web desarrollado por Agustin E. Senestari - Senestrari Dev

Este proyecto está construido con **Vite** y **React 19** usando las mejores prácticas actuales de desarrollo web:
- Estructura de carpetas escalable y profesional.
- Integración completa de **Bootstrap 5** y **Bootstrap Icons**.
- Manejo de alertas profesionales con **React Toastify**.
- Sistema SEO dinámico mediante **React Helmet Async**.
- Organización de imágenes optimizada.
- Preparado para producción.

---

## 📦 Librerías instaladas

| Librería | Propósito |
|:---------|:----------|
| react-router-dom | Ruteo SPA (Single Page Application). |
| react-helmet-async | Manejo SEO dinámico por página. |
| bootstrap | Framework de UI responsive (CSS/JS). |
| react-bootstrap | Librería de componentes React basados en Bootstrap. |
| bootstrap-icons | Íconos vectoriales listos para Bootstrap. |
| animate.css | Animaciones CSS globales rápidas. |
| react-toastify | Alertas y notificaciones pro. |
| swiper | Carousels y sliders responsive en vistas. |
| typewriter-effect | Efectos de texto escribiéndose solo. |
| React-countup | Librería de React que te permite animar números que "cuentan" |
| React-modal | Libreria de React que permite el uso de modales |

---

## 🛠️ Estructura de Carpetas

```plaintext
estructura-vite-bootstrap/
├── public/
│   ├── img/                # Imágenes públicas accesibles directamente
│   │   └── identidad/       # Logos, favicons, branding
│   ├── robots.txt           # Robots para SEO
│   ├── sitemap.xml          # Sitemap SEO
├── src/
│   ├── assets/
│   │   ├── fonts/           # Fuentes locales si las hubiera
│   │   └── images/
│   │       └── home/        # Imágenes específicas de vistas
│   ├── components/
│   │   ├── partials/        # Componentes compartidos (Header, Footer, etc.)
│   │   ├── reutilizables/   # Componentes reutilizables (bannerPortadas, forms, etc.)
│   │   └── views/           # Vistas principales (Home, About, Legales, etc.)
│   ├── seo/
│   │   └── SEO.jsx          # Componente SEO dinámico
│   ├── styles/
│   │   ├── global.css       # Reset + base global
│   │   └── variables.css    # Variables CSS de branding
│   ├── App.jsx              # Configuración de rutas
│   ├── main.jsx             # Inicialización global
│   ├── server/              # Back-end
│       ├── .php       
│       └── .php 
│       └── libs/                   # Librerías auxiliares (ej: PHPMailer, Validaciones)
│           ├── PHPMailer/
│           └── validator.php       # Funciones de validación
├── index.html               # Plantilla HTML principal
├── vite.config.js           # Configuración de Vite
├── package.json             # Dependencias y scripts
