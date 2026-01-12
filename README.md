# MicroConsultas - Marketplace de Micro-Consultorías Técnicas Flash

Un MVP de marketplace premium para conectar programadores con expertos técnicos en sesiones rápidas de 10-15 minutos mediante video/pantalla compartida con cobro por minuto.

## 🎨 Características

- **Planeta 3D Interactivo**: Globo terráqueo con expertos ubicados geográficamente
- **Dashboard Flotante**: Panel con expertos online, saldo y buscador por tecnología
- **Taxímetro en Tiempo Real**: Cronómetro que calcula el costo basado en precio por minuto
- **Diseño Premium**: Estética lujosa estilo Apple/Stripe con modo oscuro profundo
- **Animaciones Suaves**: Transiciones fluidas con Framer Motion

## 🚀 Tecnologías

- **React 19** + **Vite**
- **Tailwind CSS** para estilos
- **Framer Motion** para animaciones
- **react-globe.gl** para el globo 3D interactivo
- **Lucide React** para iconos
- **Three.js** (dependencia de react-globe.gl)

## 📦 Instalación

```bash
npm install
```

## 🏃 Desarrollo

```bash
npm run dev
```

La aplicación se abrirá en `http://localhost:5173`

## 🏗️ Estructura del Proyecto

```
src/
├── components/
│   ├── Dashboard/
│   │   └── FloatingDashboard.jsx
│   ├── Footer/
│   │   └── Footer.jsx
│   ├── Hero/
│   │   └── Hero.jsx
│   ├── HowItWorks/
│   │   └── HowItWorks.jsx
│   ├── Login/
│   │   └── Login.jsx
│   ├── Planet/
│   │   └── Planet3D.jsx
│   └── Taximeter/
│       └── Taximeter.jsx
├── hooks/
│   └── useTimer.js
├── pages/
│   └── Home.jsx
├── utils/
│   └── mockData.js
├── App.jsx
├── main.jsx
└── index.css
```

## 🎯 Funcionalidades Implementadas

### ✅ Completado

- [x] Configuración de Tailwind CSS con tema premium
- [x] Planeta 3D interactivo con expertos
- [x] Dashboard flotante con búsqueda y filtros
- [x] Sistema de login minimalista
- [x] Taxímetro con cálculo de costo en tiempo real
- [x] Sección "Cómo funciona"
- [x] Footer con estado de servidores
- [x] Animaciones y transiciones suaves

### 🔄 Pendiente (Para producción)

- [ ] Integración con Supabase/Firebase para autenticación real
- [ ] Integración con WebRTC para video llamadas
- [ ] Sistema de pagos (Stripe/PayPal)
- [ ] Base de datos de expertos real
- [ ] Sistema de calificaciones y reviews
- [ ] Notificaciones en tiempo real

## 🎨 Paleta de Colores

- **Negro Profundo**: `#000000`
- **Gris Carbón**: `#0a0a0a`
- **Dorado Metálico**: `#FFD700`
- **Azul Neón**: `#00D9FF`
- **Azul Eléctrico**: `#0066FF`

## 📝 Notas

- El login actual es un mock. Para producción, integrar con Supabase o Firebase.
- Los expertos son datos de prueba en `src/utils/mockData.js`
- El taxímetro se activa al hacer clic en un experto del globo
- El estado del servidor en el footer es simulado (cambia cada 5 segundos)

## 📄 Licencia

Este proyecto es un MVP para demostración.
