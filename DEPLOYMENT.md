# Guía de Despliegue - MensajesFunnel

## 📋 Pre-requisitos

Antes de comenzar, asegúrate de tener:
- [ ] Cuenta de GitHub (ya tienes acceso al repositorio)
- [ ] Cuenta de Vercel (crear en https://vercel.com)
- [ ] Credenciales OAuth2 de Gmail (proporcionadas por el cliente)

## 🚀 Pasos de Despliegue

### 1. Preparar Credenciales de Gmail

Necesitarás las siguientes credenciales OAuth2 de Gmail (solicitadas al cliente):
- Gmail User (email de envío)
- Client ID de OAuth2
- Client Secret de OAuth2
- Refresh Token (generado mediante OAuth Playground)

**Para obtener el Refresh Token:**

1. Ve a https://developers.google.com/oauthplayground/
2. Haz clic en el ícono de configuración (⚙️)
3. Marca "Use your own OAuth credentials"
4. Ingresa el Client ID y Client Secret proporcionados
5. En "Step 1", selecciona "Gmail API v1" → scope `https://mail.google.com/`
6. Autoriza y obtén el Refresh Token en "Step 2"

### 2. Desplegar Backend en Vercel

**Opción Recomendada: Desde GitHub**

1. Ve a https://vercel.com/
2. Crea una cuenta o inicia sesión
3. Click en "Add New Project"
4. Selecciona "Import Git Repository"
5. Conecta con GitHub y selecciona el repositorio `alesoander/MensajesFunnel`
6. Antes de desplegar, configura las **Environment Variables**:
   ```
   GMAIL_USER = tu-email@gmail.com
   GMAIL_CLIENT_ID = [client-id-proporcionado]
   GMAIL_CLIENT_SECRET = [client-secret-proporcionado]
   GMAIL_REFRESH_TOKEN = [token-generado]
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
   - Prueba enviando un email de prueba desde el formulario

### 5. Prueba Completa

1. Accede al formulario web
2. Completa todos los campos
3. Envía el mensaje
4. Verifica que el email llegue correctamente

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

### El email no se envía

1. Verifica en Vercel Dashboard → Settings → Environment Variables
2. Confirma que todas las 4 variables estén configuradas
3. Revisa los logs en Vercel Dashboard → Deployments → [último deploy] → Logs

### Error CORS

- Asegúrate de que el backend esté desplegado y accesible
- El código ya incluye los headers CORS necesarios

### GitHub Actions falla

- Verifica en Actions que el workflow tenga permisos
- Settings → Actions → General → Workflow permissions → Read and write

## ✅ Checklist de Despliegue

- [ ] Credenciales OAuth2 obtenidas
- [ ] Refresh Token generado
- [ ] Backend desplegado en Vercel
- [ ] Variables de entorno configuradas en Vercel
- [ ] Frontend desplegado en GitHub Pages
- [ ] Prueba de envío de email exitosa
- [ ] Documentación revisada

## 📞 Soporte

Si encuentras problemas durante el despliegue, revisa:
1. Logs de Vercel para errores del backend
2. Console del navegador (F12) para errores del frontend
3. README.md para información adicional

---

**¡Listo! El sistema debería estar funcionando.**