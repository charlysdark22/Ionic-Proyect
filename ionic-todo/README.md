# 📝 App de Lista de Tareas - Ionic + Angular

Una aplicación web progresiva (PWA) moderna y responsiva para gestionar tareas, construida con **Ionic Framework** y **Angular**.

## 🎯 Características

✅ **Agregar tareas** con título y descripción  
✅ **Marcar como completadas** con checkbox interactivo  
✅ **Eliminar tareas** con confirmación  
✅ **Almacenamiento local** (localStorage) - datos persisten  
✅ **Estadísticas en tiempo real** (Total, completadas, pendientes)  
✅ **Diseño responsivo** (Mobile-first con Flexbox/Grid)  
✅ **PWA lista** para instalar en home screen  
✅ **Dark mode compatible**  
✅ **Interfaz Ionic** con componentes nativos  

## 🛠️ Tecnologías

- **Ionic Framework 7+** - UI components nativos
- **Angular 20+** - Framework web core
- **TypeScript** - Tipado estático
- **RxJS** - Programación reactiva
- **SCSS** - Estilos avanzados
- **Service Worker** - PWA capabilities
- **localStorage API** - Persistencia de datos

## 📋 Requisitos Previos

- **Node.js** 18+ 
- **npm** 9+ o **yarn**
- **Ionic CLI** instalada globalmente: `npm install -g @ionic/cli`

## 🚀 Instalación y Setup

### 1. Clonar o descargar el proyecto

```bash
cd ionic-todo
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Servir localmente para desarrollo

```bash
ionic serve
```

El servidor se ejecutará en `http://localhost:8100`. Abre tu navegador y verás los cambios en vivo.

### 4. Compilar para producción

```bash
ionic build --prod
```

Los archivos compilados estarán en la carpeta `www/`.

## 📂 Estructura del Proyecto

```
src/
├── app/
│   ├── services/
│   │   └── todo.service.ts      # Servicio de tareas (CRUD + localStorage)
│   ├── home/
│   │   ├── home.page.ts         # Componente principal (lógica)
│   │   ├── home.page.html       # Template (UI con Ionic)
│   │   └── home.page.scss       # Estilos (Responsive)
│   ├── app.module.ts            # Módulo raíz (PWA + Ionic)
│   └── app.component.ts         # Componente raíz
├── assets/                       # Imágenes, iconos
├── index.html                    # HTML base
└── global.scss                   # Estilos globales
ngsw-config.json                 # Configuración del Service Worker
public/
├── manifest.webmanifest         # Metadatos PWA
└── icons/                        # Iconos para instalación
```

## 🎮 Cómo Usar la App

### Agregar una Tarea

1. Escribe el **título** de la tarea
2. (Opcional) Agrega una **descripción**
3. Presiona **"Agregar Tarea"** o Enter
4. La tarea se guardará automáticamente en localStorage

### Marcar como Completada

- Presiona el **checkbox** a la izquierda de la tarea
- Se aplicará automáticamente un efecto de tachado

### Eliminar una Tarea

- Desliza la tarea hacia la izquierda
- Presiona el ícono **🗑️ (trash)**
- Confirma la eliminación en el diálogo

### Limpiar Completadas

- Presiona el botón **"Limpiar completadas"** (aparece si hay tareas completadas)
- Se eliminarán todas las tareas marcadas

## 📊 Estadísticas

Se muestran en tiempo real:
- **Total**: Cantidad total de tareas
- **Completadas**: Tareas terminadas (verdes)
- **Pendientes**: Tareas por hacer (naranjas)

## 💾 Persistencia de Datos

Los datos se guardan automáticamente en **localStorage** del navegador:

```javascript
// Ubicación: localStorage['ionic_todos']
// Formato: JSON serializado de un array de tareas

[
  {
    "id": "1733267400000",
    "title": "Comprar leche",
    "description": "En el supermercado cerca de casa",
    "completed": false,
    "createdAt": "2025-12-04T00:30:00.000Z"
  },
  ...
]
```

**Nota**: Los datos no se sincronizan entre dispositivos (solo en el navegador local).

## 🌐 PWA - Instalar como App

### En Chrome/Edge (Desktop)

1. Abre la app en `http://localhost:8100`
2. Presiona el ícono **⬇️ Instalar** en la barra de direcciones
3. Confirma
4. La app estará en tu escritorio/menú

### En Mobile

1. Abre en Chrome/Safari
2. Presiona **"Agregar a pantalla de inicio"** (menú)
3. Confirma
4. Acceso directo en el home screen

### Acceso Offline

Una vez instalada, la app funciona sin conexión gracias al **Service Worker**.

## 🔧 Comandos Útiles

```bash
# Desarrollo con hot-reload
ionic serve

# Build para producción (optimizado)
ionic build --prod

# Build para PWA (incluye Service Worker)
npm run build

# Servir localmente el build de producción
npx http-server www -p 8080

# Agregar Capacitor para iOS/Android nativo
ionic capacitor add ios
ionic capacitor add android

# Ver logs
ionic capacitor run ios

# Lint & format
npm run lint

# Tests (si los hay)
npm test
```

## 🚀 Publicar a Netlify (PWA Gratis)

### Método 1: Conectar GitHub

1. Sube el proyecto a GitHub
2. Ve a **[netlify.com](https://netlify.com)** y crea cuenta
3. **Connect GitHub** → Selecciona tu repo
4. **Build settings**:
   - Build command: `npm run build`
   - Publish directory: `www`
5. Deploy automático 🎉

### Método 2: Deploy Manual

```bash
# Instalar Netlify CLI
npm install -g netlify-cli

# Hacer login
netlify login

# Deploy
cd www
netlify deploy --prod
```

## 🚀 Publicar como App Nativa (iOS/Android)

### Usar Capacitor

```bash
# Agregar plataformas
ionic capacitor add ios
ionic capacitor add android

# Sincronizar cambios
ionic capacitor sync

# Abrir en Xcode (iOS)
ionic capacitor open ios

# Abrir en Android Studio
ionic capacitor open android

# Build y run en emulador
ionic capacitor run ios
ionic capacitor run android
```

Luego sigue las guías de **App Store** y **Google Play** para publicación.

## 🎨 Personalización

### Cambiar Colores

Edita `src/app/home/home.page.scss`:

```scss
$primary-color: #0d47a1;      // Azul
$success-color: #4caf50;       // Verde
$danger-color: #f44336;        // Rojo
$warning-color: #ff9800;       // Naranja
```

### Cambiar Icono de la App

Reemplaza `public/icons/icon-512x512.png` con tu logo (512x512px).

### Cambiar Nombre de la App

Edita:
- `src/index.html`: `<title>`
- `public/manifest.webmanifest`: `"name"` y `"short_name"`
- `angular.json`: `"title"`

## 🐛 Troubleshooting

| Problema | Solución |
|----------|----------|
| **Port 8100 en uso** | `ionic serve --port 8200` |
| **Módulos faltantes** | `npm install` |
| **Service Worker no funciona** | Asegúrate de usar HTTPS en producción |
| **Datos no persisten** | Verifica localStorage en DevTools (F12 → Application → Storage) |
| **Build lento** | Usa `ionic build` (sin --prod) para desarrollo |

## 📚 Recursos y Documentación

- **[Ionic Docs](https://ionicframework.com/docs)** - Componentes y guías
- **[Angular Docs](https://angular.io/docs)** - Core framework
- **[MDN Web Docs](https://developer.mozilla.org)** - HTML/CSS/JS
- **[PWA Documentation](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps)** - PWA standards
- **[RxJS Guide](https://rxjs.dev)** - Programación reactiva

## 💡 Próximos Pasos

- [ ] Agregar autenticación (Firebase Auth)
- [ ] Sincronizar tareas en la nube (Firestore/Supabase)
- [ ] Categorías y etiquetas para tareas
- [ ] Recordatorios y notificaciones push
- [ ] Compartir listas con otros usuarios
- [ ] Exportar/importar tareas (JSON/CSV)
- [ ] Dark mode toggle

## 📄 Licencia

Proyecto de demostración educativo. Libre para usar y modificar.

## 👨‍💻 Autor

Desarrollado como parte del journey de aprendizaje de **Ionic + Angular**.

---

**¿Preguntas o mejoras?** Abre un issue o pull request. ¡Feliz coding! 🚀
