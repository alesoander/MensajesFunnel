# MensajesFunnel - Sistema Automatizado de Mensajes WeSpeak

Sistema web automatizado para enviar mensajes de onboarding a clientes de WeSpeak. Este proyecto incluye una interfaz web y un backend serverless que se integra con N8N para el envío de emails personalizados.

## 🚀 Características

- ✅ Formulario web intuitivo para capturar información del cliente
- ✅ Integración con N8N webhook para automatización flexible
- ✅ Backend serverless seguro (sin credenciales de email expuestas)
- ✅ Despliegue automático en GitHub Pages y Vercel
- ✅ Responsive design para móviles y tablets
- ✅ Configuración simple sin necesidad de OAuth2

## 📋 Requisitos Previos

- Cuenta de GitHub
- Cuenta de Vercel (gratuita)
- Workflow de N8N configurado (o usar el webhook de prueba incluido)
- Node.js 16+ (solo para desarrollo local)

## 🔧 Configuración

### 1. Configurar N8N Webhook

El sistema envía los datos del formulario a un webhook de N8N, que se encarga de procesar y enviar el email.

**Configurar tu webhook de N8N:**
1. Accede a tu instancia de N8N
2. Crea un nuevo workflow
3. Agrega un nodo **Webhook** para recibir los datos
4. Configura los nodos necesarios para procesar y enviar emails
5. Copia la URL del webhook generada
6. Configura la variable de entorno `N8N_WEBHOOK_URL` en Vercel (ver paso 2)

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

### 2. Desplegar en Vercel

#### Opción A: Despliegue con CLI de Vercel

```bash
# Instalar Vercel CLI
npm install -g vercel

# Clonar el repositorio
git clone https://github.com/alesoander/MensajesFunnel.git
cd MensajesFunnel

# Instalar dependencias (opcional, no hay dependencias externas ahora)
npm install

# Desplegar
vercel

# Configurar variable de entorno en Vercel (requerido)
vercel env add N8N_WEBHOOK_URL

# Desplegar a producción
vercel --prod
```

#### Opción B: Despliegue desde GitHub (Recomendado)

1. Ve a [Vercel](https://vercel.com/)
2. Crea una cuenta o inicia sesión
3. Haz clic en "Add New Project"
4. Importa este repositorio de GitHub
5. Configura la variable de entorno (requerida):
   - `N8N_WEBHOOK_URL`: Tu URL de webhook de N8N
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

- ✅ No se requieren credenciales de email en el código
- ✅ Webhook URL puede configurarse de forma segura en variables de entorno de Vercel
- ✅ Las credenciales de email están gestionadas por N8N (no expuestas en este sistema)
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

### Error: "Failed to send message"
- Verifica que el webhook de N8N esté activo y accesible
- Si usas tu propio webhook, asegúrate de que la URL esté configurada correctamente en Vercel
- Verifica los logs en N8N para ver si el webhook está recibiendo las peticiones

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
