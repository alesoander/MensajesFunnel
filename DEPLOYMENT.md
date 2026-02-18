# Guía de Despliegue - MensajesFunnel

## 📋 Pre-requisitos

Antes de comenzar, asegúrate de tener:
- [ ] Cuenta de GitHub (ya tienes acceso al repositorio)
- [ ] Workflow de N8N configurado con webhook y CORS habilitado

## 🚀 Pasos de Despliegue

### 1. Configurar Webhook de N8N

**Configurar tu webhook en N8N:**

1. Accede a tu instancia de N8N (ej: https://tu-instancia.n8n.cloud)
2. Crea un nuevo workflow
3. Agrega un nodo **Webhook**:
   - HTTP Method: POST
   - Path: elige un path único (ej: `/onboarding-wespeak`)
   - **IMPORTANTE**: Habilita CORS para permitir requests desde `https://alesoander.github.io`
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

### 2. Actualizar la URL del Webhook en el Código

1. Clona o edita el repositorio
2. Abre el archivo `app.js`
3. Encuentra la línea 2 que contiene:
   ```javascript
   const N8N_WEBHOOK_URL = 'https://your-n8n-instance.com/webhook/your-webhook-id';
   ```
4. Reemplaza con tu URL de webhook de N8N:
   ```javascript
   const N8N_WEBHOOK_URL = 'https://tu-instancia-n8n.com/webhook/tu-webhook-id';
   ```
5. Guarda y haz commit del cambio
6. Haz push a la rama principal (main/master)

### 3. Configurar GitHub Pages

1. Ve al repositorio en GitHub
2. Settings → Pages
3. En "Build and deployment":
   - Source: "GitHub Actions"
4. El workflow ya está configurado (`.github/workflows/deploy.yml`) y se ejecutará automáticamente
5. Espera a que termine el despliegue (puedes ver el progreso en la pestaña "Actions")
6. Tu sitio estará disponible en: `https://alesoander.github.io/MensajesFunnel/`

### 4. Verificar Despliegue

1. **Frontend (GitHub Pages):**
   - URL: `https://alesoander.github.io/MensajesFunnel/`
   - Abre la página y verifica que el formulario se vea correctamente

2. **Integración con N8N:**
   - El formulario envía datos directamente al webhook de N8N
   - Prueba enviando un mensaje de prueba desde el formulario
   - Verifica en N8N que el webhook reciba los datos

### 5. Prueba Completa

1. Accede al formulario web
2. Completa todos los campos
3. Envía el mensaje
4. Verifica en N8N que los datos lleguen correctamente
5. Si configuraste envío de email en N8N, verifica que el email llegue

## 🔧 Configuración Avanzada (Opcional)

### Dominio Personalizado en GitHub Pages

1. En el repositorio → Settings → Pages
2. En "Custom domain", ingresa tu dominio
3. Espera la verificación DNS
4. Habilita "Enforce HTTPS"

### Configuración de CORS en N8N

Para que el webhook de N8N acepte requests desde GitHub Pages, debes configurar CORS:

1. En el nodo Webhook de N8N, ve a la configuración
2. Busca la opción de CORS o "Allowed Origins"
3. Agrega: `https://alesoander.github.io`
4. Si tu N8N lo permite, también puedes agregar `http://localhost:8000` para desarrollo local

## 📝 Mantenimiento

### Actualizar el Sitio

- Cualquier cambio en `index.html`, `app.js` u otros archivos se despliega automáticamente al hacer push a main/master
- El despliegue toma aproximadamente 1-2 minutos
- Puedes ver el progreso en la pestaña "Actions" del repositorio

### Cambiar la URL del Webhook

1. Edita el archivo `app.js`
2. Actualiza la constante `N8N_WEBHOOK_URL` con la nueva URL
3. Guarda y haz commit
4. Haz push a main/master
5. El sitio se actualizará automáticamente

### Monitoreo

- **GitHub Pages**: Actions → workflows para ver despliegues
- **N8N**: Dashboard del workflow para ver las ejecuciones del webhook

## 🚨 Solución de Problemas

### El mensaje no se envía

1. Verifica que la URL del webhook en `app.js` sea correcta
2. Abre la consola del navegador (F12) para ver errores específicos
3. Verifica en N8N que el workflow esté activo
4. Comprueba que el webhook responda correctamente

### Error CORS

- Asegúrate de que N8N tenga CORS habilitado para `https://alesoander.github.io`
- En desarrollo local, también necesitas agregar `http://localhost:8000`
- Verifica la configuración del nodo Webhook en N8N

### GitHub Actions falla

- Verifica en Actions que el workflow tenga permisos
- Settings → Actions → General → Workflow permissions → Read and write

### N8N no recibe los datos

- Verifica que la URL del webhook sea correcta
- Asegúrate de que el workflow esté activo en N8N
- Revisa los logs de ejecución en N8N para ver errores
- Verifica que el formato de los datos sea el esperado

## ✅ Checklist de Despliegue

- [ ] Webhook de N8N configurado
- [ ] CORS habilitado en N8N para GitHub Pages
- [ ] URL del webhook copiada
- [ ] Archivo `app.js` actualizado con la URL correcta
- [ ] Cambios commitados y pusheados
- [ ] GitHub Pages configurado con "GitHub Actions" como source
- [ ] Workflow ejecutado exitosamente
- [ ] Sitio accesible en `https://alesoander.github.io/MensajesFunnel/`
- [ ] Prueba de envío exitosa
- [ ] Verificado que N8N recibe los datos
- [ ] Documentación revisada

## 📞 Soporte

Si encuentras problemas durante el despliegue, revisa:
1. Console del navegador (F12) para errores del frontend
2. N8N logs para errores del webhook
3. README.md para información adicional

## 💡 Diferencia con la Versión Anterior

**Antes:** Frontend en GitHub Pages → Backend en Vercel → N8N Webhook

**Ahora:** Frontend en GitHub Pages → N8N Webhook (directo)

**Beneficios:**
- ✅ Más simple - un solo lugar de despliegue
- ✅ Más rápido - menos pasos en la cadena
- ✅ Más económico - no se necesita Vercel
- ✅ Más fácil de mantener

---

**¡Listo! El sistema debería estar funcionando.**