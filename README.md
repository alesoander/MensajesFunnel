# MensajesFunnel - Sistema Automatizado de Mensajes WeSpeak

Sistema web automatizado para enviar mensajes de onboarding a clientes de WeSpeak. Este proyecto es un sitio web estático que se integra directamente con N8N para el envío de emails personalizados.

## 🚀 Características

- ✅ Formulario web intuitivo para capturar información del cliente
- ✅ Integración directa con N8N webhook para automatización flexible
- ✅ 100% estático - sin backend ni servidor necesario
- ✅ Despliegue automático en GitHub Pages
- ✅ Responsive design para móviles y tablets
- ✅ Sin credenciales de email expuestas
- ✅ Configuración simple sin OAuth2

## 📋 Requisitos Previos

- Cuenta de GitHub
- Workflow de N8N configurado con CORS habilitado

## 🔧 Configuración

### 1. Configurar N8N Webhook

El sistema envía los datos del formulario directamente a un webhook de N8N, que se encarga de procesar y enviar el email.

**Configurar tu webhook de N8N:**
1. Accede a tu instancia de N8N
2. Crea un nuevo workflow
3. Agrega un nodo **Webhook** para recibir los datos
4. **IMPORTANTE**: Habilita CORS en el webhook para permitir requests desde `https://alesoander.github.io`
5. Configura los nodos necesarios para procesar y enviar emails
6. Copia la URL del webhook generada
7. Actualiza la URL en el archivo `app.js` (línea 2):
   ```javascript
   const N8N_WEBHOOK_URL = 'TU_URL_DE_WEBHOOK_AQUI';
   ```

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
├── index.html                  # Página principal del formulario
├── app.js                      # Lógica del frontend (incluye URL de N8N webhook)
├── package.json                # Metadatos del proyecto
├── .gitignore                  # Archivos ignorados por Git
└── README.md                   # Este archivo
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

### Error: "Failed to send message"
- Verifica que el webhook de N8N esté activo y accesible
- Asegúrate de que la URL del webhook en `app.js` sea correcta
- Verifica los logs en N8N para ver si el webhook está recibiendo las peticiones

### Error: "CORS policy"
- Asegúrate de que N8N tenga CORS habilitado para `https://alesoander.github.io`
- En N8N, configura el webhook para aceptar requests desde el dominio de GitHub Pages

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
