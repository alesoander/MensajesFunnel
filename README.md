# MensajesFunnel - Sistema Automatizado de Mensajes WeSpeak

Sistema web automatizado para enviar mensajes de onboarding a clientes de WeSpeak. Este proyecto incluye un frontend y un backend serverless que se integra con N8N para el envío de emails personalizados.

## 🚀 Características

- ✅ Formulario web intuitivo para capturar información del cliente
- ✅ Backend serverless (Vercel) para manejo seguro de API
- ✅ Integración con N8N webhook para automatización flexible
- ✅ Despliegue automático en Vercel o GitHub Pages
- ✅ Responsive design para móviles y tablets
- ✅ Sin credenciales de email expuestas
- ✅ Configuración simple con variables de entorno

## 🚀 Quick Setup (Vercel)

### Step 1: Import to Vercel
1. Go to [Vercel](https://vercel.com/)
2. Click "Add New Project"
3. Import your `alesoander/MensajesFunnel` repository
4. Click "Deploy" (it will fail first time - that's expected)

### Step 2: Configure N8N Webhook
1. In Vercel Dashboard, go to your project
2. Go to **Settings** → **Environment Variables**
3. Add new variable:
   - **Name**: `N8N_WEBHOOK_URL`
   - **Value**: `https://n8n.srv1010580.hstgr.cloud/webhook-test/8efad83b-804c-4201-9e9e-d8b185c7a59f`
4. Click **Save**
5. Go to **Deployments** tab
6. Click the **three dots** on the latest deployment
7. Click **Redeploy**

### Step 3: Test
1. Visit your Vercel URL (e.g., `https://mensajes-funnel.vercel.app`)
2. Fill the form
3. Click "Enviar Mensaje"
4. ✅ Done!

## 🔧 How It Works

- **Frontend**: Hosted on Vercel or GitHub Pages (`index.html`, `app.js`)
- **Backend**: Vercel Serverless Function (`api/send-email.js`)
- **Email Delivery**: N8N Webhook handles email sending

When the user clicks "Enviar Mensaje":
1. Frontend sends form data to `/api/send-email`
2. Vercel serverless function receives the data
3. Function posts to N8N webhook
4. N8N sends the email

## 📋 Requisitos Previos

- Cuenta de GitHub
- Workflow de N8N configurado con CORS habilitado

## 🔧 Configuración

### 1. Configurar N8N Webhook

El sistema envía los datos del formulario a través de un backend serverless que se conecta a un webhook de N8N.

**Configurar tu webhook de N8N:**
1. Accede a tu instancia de N8N
2. Crea un nuevo workflow
3. Agrega un nodo **Webhook** para recibir los datos
4. Configura los nodos necesarios para procesar y enviar emails
5. Copia la URL del webhook generada
6. **Para Vercel**: Configura la variable de entorno `N8N_WEBHOOK_URL` en Vercel Dashboard (ver Quick Setup arriba)
7. **Para GitHub Pages**: Actualiza la URL en el archivo `app.js` (línea 2)

**Estructura de datos que recibirá el webhook:**
```json
{
  "wespeak_link_de_acceso": "https://...",
  "firstname_responsable_onboarding": "Name",
  "opportunityname": "Opportunity Name",
  "email": "client@example.com",
  "Notas_Presentacion_Onboarding": "Optional notes"
}
```

### 2. Configurar GitHub Pages

1. Ve a Settings de tu repositorio en GitHub
2. Navega a "Pages" en el menú lateral
3. En "Source", selecciona "GitHub Actions"
4. El workflow se ejecutará automáticamente en cada push a main/master
5. Tu sitio estará disponible en: `https://alesoander.github.io/MensajesFunnel/`

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

- ✅ No se requieren credenciales de email en el código
- ✅ Las credenciales de email están gestionadas por N8N (no expuestas en este sistema)
- ✅ N8N debe tener CORS habilitado para aceptar requests desde `https://alesoander.github.io`
- ✅ Validación de campos requeridos

## 📁 Estructura del Proyecto

```
MensajesFunnel/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow
├── api/
│   └── send-email.js           # Vercel serverless function (backend)
├── index.html                  # Página principal del formulario
├── app.js                      # Lógica del frontend
├── vercel.json                 # Configuración de Vercel
├── .env.example                # Ejemplo de variables de entorno
├── package.json                # Metadatos del proyecto
├── .gitignore                  # Archivos ignorados por Git
├── README.md                   # Este archivo
├── DEPLOYMENT.md               # Guía de despliegue en Vercel
└── VERCEL_SETUP.md             # Referencia rápida para Vercel
```

## 🛠️ Desarrollo Local

```bash
# Clonar el repositorio
git clone https://github.com/alesoander/MensajesFunnel.git
cd MensajesFunnel

# Iniciar servidor de desarrollo local (Python 3)
python3 -m http.server 8000

# O con Node.js
npx http-server -p 8000

# Abrir en el navegador
# http://localhost:8000
```

## 🚨 Solución de Problemas

### Error: "Error de conexión" o "Failed to send message"
- **Vercel**: Verifica que la variable de entorno `N8N_WEBHOOK_URL` esté configurada en Vercel Dashboard
- Asegúrate de que el webhook de N8N esté activo y accesible
- Verifica los logs en N8N para ver si el webhook está recibiendo las peticiones
- Verifica los logs de la función serverless en Vercel Dashboard

### Error: "Server configuration error"
- La variable de entorno `N8N_WEBHOOK_URL` no está configurada en Vercel
- Revisa la sección "Quick Setup (Vercel)" arriba para configurarla
- Después de agregar la variable, debes redesplegar la aplicación

### Error: "CORS policy"
- Vercel maneja CORS automáticamente en el backend
- Si usas GitHub Pages directo, asegúrate de que N8N tenga CORS habilitado

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
