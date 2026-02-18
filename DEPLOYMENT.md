# Guía de Despliegue - MensajesFunnel

## 📋 Pre-requisitos

Antes de comenzar, asegúrate de tener:
- [ ] Cuenta de GitHub (ya tienes acceso al repositorio)
- [ ] Cuenta de Vercel (crear en https://vercel.com)
- [ ] Workflow de N8N configurado con webhook

## 🚀 Pasos de Despliegue

### 1. Configurar Webhook de N8N

**Configurar tu webhook en N8N:**

1. Accede a tu instancia de N8N (ej: https://tu-instancia.n8n.cloud)
2. Crea un nuevo workflow
3. Agrega un nodo **Webhook**:
   - HTTP Method: POST
   - Path: elige un path único (ej: `/onboarding-wespeak`)
4. Conecta los nodos necesarios para:
   - Procesar los datos recibidos
   - Enviar emails (nodo de Gmail, SendGrid, SMTP, etc.)
   - Cualquier otra automatización que necesites
5. Activa el workflow
6. Copia la URL del webhook generada (la verás en el nodo Webhook)

**Datos que recibirá el webhook:**
```json
{
  "wespeak_link_de_acceso": "https://...",
  "firstname_responsable_onboarding": "Nombre",
  "opportunityname": "Nombre de Oportunidad",
  "email": "cliente@example.com",
  "Notas_Presentacion_Onboarding": "Notas opcionales"
}
```

### 2. Desplegar Backend en Vercel

**Opción Recomendada: Desde GitHub**

1. Ve a https://vercel.com/
2. Crea una cuenta o inicia sesión
3. Click en "Add New Project"
4. Selecciona "Import Git Repository"
5. Conecta con GitHub y selecciona el repositorio `alesoander/MensajesFunnel`
6. Configura la **Environment Variable** (requerida):
   ```
   N8N_WEBHOOK_URL = [tu-url-de-webhook-de-n8n]
   ```
7. Click en "Deploy"
8. Espera a que termine el despliegue
9. Copia la URL generada (ej: `https://tu-proyecto.vercel.app`)

### 3. Configurar GitHub Pages (Frontend)

1. Ve al repositorio en GitHub
2. Settings → Pages
3. En "Build and deployment":
   - Source: "GitHub Actions"
4. El workflow ya está configurado y se ejecutará automáticamente

### 4. Verificar Despliegue

1. **Backend (Vercel):**
   - URL: `https://tu-proyecto.vercel.app/api/send-email`
   - Verifica que responda (puedes hacer una petición POST de prueba)

2. **Frontend (GitHub Pages):**
   - URL: `https://alesoander.github.io/MensajesFunnel/`
   - Abre la página y verifica que el formulario se vea correctamente

3. **Integración:**
   - El frontend automáticamente detecta el API endpoint
   - Prueba enviando un mensaje de prueba desde el formulario
   - Verifica en N8N que el webhook reciba los datos

### 5. Prueba Completa

1. Accede al formulario web
2. Completa todos los campos
3. Envía el mensaje
4. Verifica en N8N que los datos lleguen correctamente
5. Si configuraste envío de email en N8N, verifica que el email llegue

## 🔧 Configuración Avanzada (Opcional)

### Dominio Personalizado en Vercel

1. En Vercel Dashboard → Settings → Domains
2. Agrega tu dominio personalizado
3. Configura los DNS según las instrucciones
4. El SSL se configura automáticamente

### Dominio Personalizado en GitHub Pages

1. En el repositorio → Settings → Pages
2. En "Custom domain", ingresa tu dominio
3. Espera la verificación DNS
4. Habilita "Enforce HTTPS"

## 📝 Mantenimiento

### Actualizar el Sitio

- **Frontend**: Cualquier cambio en `index.html` o `app.js` se despliega automáticamente al hacer push a main/master
- **Backend**: Los cambios en `api/send-email.js` se despliegan automáticamente en Vercel

### Monitoreo

- **Vercel**: Dashboard → tu proyecto → Analytics
- **GitHub Pages**: Actions → workflows para ver despliegues

## 🚨 Solución de Problemas

### El mensaje no se envía

1. Verifica en Vercel Dashboard → Settings → Environment Variables
2. Si usas un webhook personalizado, confirma que `N8N_WEBHOOK_URL` esté configurada
3. Revisa los logs en Vercel Dashboard → Deployments → [último deploy] → Logs
4. Verifica en N8N que el workflow esté activo y el webhook responda

### Error CORS

- Asegúrate de que el backend esté desplegado y accesible
- El código ya incluye los headers CORS necesarios

### GitHub Actions falla

- Verifica en Actions que el workflow tenga permisos
- Settings → Actions → General → Workflow permissions → Read and write

### N8N no recibe los datos

- Verifica que la URL del webhook sea correcta
- Asegúrate de que el workflow esté activo en N8N
- Revisa los logs de ejecución en N8N para ver errores

## ✅ Checklist de Despliegue

- [ ] Webhook de N8N configurado
- [ ] URL del webhook copiada
- [ ] Backend desplegado en Vercel
- [ ] Variable de entorno N8N_WEBHOOK_URL configurada en Vercel
- [ ] Frontend desplegado en GitHub Pages
- [ ] Prueba de envío exitosa
- [ ] Verificado que N8N recibe los datos
- [ ] Documentación revisada

## 📞 Soporte

Si encuentras problemas durante el despliegue, revisa:
1. Logs de Vercel para errores del backend
2. Console del navegador (F12) para errores del frontend
3. README.md para información adicional

---

**¡Listo! El sistema debería estar funcionando.**