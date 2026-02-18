# MensajesFunnel - Sistema Automatizado de Mensajes WeSpeak

Sistema web automatizado para enviar mensajes de onboarding a clientes de WeSpeak. Este proyecto incluye una interfaz web y un backend serverless para el envío de emails personalizados usando Gmail API.

## 🚀 Características

- ✅ Formulario web intuitivo para capturar información del cliente
- ✅ Envío automatizado de emails usando Gmail API
- ✅ Template de email personalizado con información del cliente
- ✅ Backend serverless seguro (credenciales protegidas)
- ✅ Despliegue automático en GitHub Pages y Vercel
- ✅ Responsive design para móviles y tablets

## 📋 Requisitos Previos

- Cuenta de GitHub
- Cuenta de Vercel (gratuita)
- Cuenta de Google con Gmail
- Node.js 16+ (solo para desarrollo local)

## 🔧 Configuración

### 1. Configurar OAuth2 de Gmail

Para obtener el Refresh Token necesario:

1. Ve a [Google Cloud Console](https://console.cloud.google.com/)
2. Crea un nuevo proyecto o selecciona uno existente
3. Habilita la Gmail API
4. Crea credenciales OAuth 2.0 (Client ID y Client Secret)
5. Agrega URI de redirección autorizado: `https://developers.google.com/oauthplayground`
6. Ve a [OAuth Playground](https://developers.google.com/oauthplayground/)
7. Haz clic en el ícono de configuración (⚙️) y marca "Use your own OAuth credentials"
8. Ingresa tu Client ID y Client Secret
9. En Step 1, selecciona "Gmail API v1" y el scope `https://mail.google.com/`
10. Haz clic en "Authorize APIs"
11. En Step 2, haz clic en "Exchange authorization code for tokens"
12. Copia el "Refresh token" que se genera

### 2. Desplegar en Vercel

#### Opción A: Despliegue con CLI de Vercel

```bash
# Instalar Vercel CLI
npm install -g vercel

# Clonar el repositorio
git clone https://github.com/alesoander/MensajesFunnel.git
cd MensajesFunnel

# Instalar dependencias
npm install

# Desplegar
vercel

# Configurar variables de entorno en Vercel
vercel env add GMAIL_USER
vercel env add GMAIL_CLIENT_ID
vercel env add GMAIL_CLIENT_SECRET
vercel env add GMAIL_REFRESH_TOKEN

# Desplegar a producción
vercel --prod
```

#### Opción B: Despliegue desde GitHub (Recomendado)

1. Ve a [Vercel](https://vercel.com/)
2. Crea una cuenta o inicia sesión
3. Haz clic en "Add New Project"
4. Importa este repositorio de GitHub
5. Configura las variables de entorno:
   - `GMAIL_USER`: Tu email de Gmail (ej: onboarding@wespeak.pro)
   - `GMAIL_CLIENT_ID`: Tu Client ID de OAuth2
   - `GMAIL_CLIENT_SECRET`: Tu Client Secret de OAuth2
   - `GMAIL_REFRESH_TOKEN`: El token que obtuviste en el paso anterior
6. Haz clic en "Deploy"

### 3. Configurar GitHub Pages

1. Ve a Settings de tu repositorio en GitHub
2. Navega a "Pages" en el menú lateral
3. En "Source", selecciona "GitHub Actions"
4. El workflow se ejecutará automáticamente en cada push a main/master

**Nota**: GitHub Pages servirá el frontend (HTML/JS) y Vercel manejará el backend (API).

### 4. Actualizar el Frontend

Si desplegaste el backend en Vercel con un dominio personalizado, actualiza el archivo `app.js`:

```javascript
const API_ENDPOINT = 'https://tu-dominio.vercel.app/api/send-email';
```

Si usas el dominio automático de Vercel, no necesitas cambiar nada.

## 📝 Uso

1. Accede a la página web (GitHub Pages URL)
2. Completa el formulario con:
   - Link de acceso WeSpeak
   - Nombre del responsable de onboarding
   - Nombre de la oportunidad
   - Email del cliente
   - Notas adicionales (opcional)
3. Haz clic en "📧 Enviar Mensaje"
4. El cliente recibirá un email personalizado de onboarding

## 🔒 Seguridad

- ✅ Credenciales de Gmail almacenadas de forma segura en variables de entorno de Vercel
- ✅ Las credenciales NUNCA se exponen en el código frontend
- ✅ API protegida con CORS
- ✅ Validación de campos requeridos

## 📁 Estructura del Proyecto

```
MensajesFunnel/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow
├── api/
│   └── send-email.js           # Serverless function (Vercel)
├── index.html                  # Página principal del formulario
├── app.js                      # Lógica del frontend
├── package.json                # Dependencias del proyecto
├── vercel.json                 # Configuración de Vercel
├── .env.example                # Ejemplo de variables de entorno
├── .gitignore                  # Archivos ignorados por Git
└── README.md                   # Este archivo
```

## 🛠️ Desarrollo Local

```bash
# Clonar el repositorio
git clone https://github.com/alesoander/MensajesFunnel.git
cd MensajesFunnel

# Instalar dependencias
npm install

# Crear archivo .env con tus credenciales
cp .env.example .env
# Edita .env con tus credenciales reales

# Iniciar servidor de desarrollo
npm run dev

# Abrir en el navegador
# http://localhost:3000
```

## 🚨 Solución de Problemas

### Error: "Failed to send email"
- Verifica que todas las variables de entorno estén configuradas correctamente en Vercel
- Asegúrate de que el Refresh Token sea válido
- Verifica que la Gmail API esté habilitada en Google Cloud Console

### Error: "CORS policy"
- Asegúrate de que el backend esté desplegado y accesible
- Verifica que la URL del API_ENDPOINT en app.js sea correcta

### El formulario no envía
- Abre la consola del navegador (F12) para ver errores
- Verifica tu conexión a internet
- Asegúrate de completar todos los campos requeridos

## 📧 Contacto

Para soporte o preguntas sobre este proyecto, contacta al equipo de WeSpeak.

## 📄 Licencia

MIT License - Ver el archivo LICENSE para más detalles.

---

**Desarrollado con ❤️ para WeSpeak**
