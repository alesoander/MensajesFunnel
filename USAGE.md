# Guía de Uso - MensajesFunnel

## 🎯 ¿Qué hace este sistema?

Este sistema automatiza el envío de mensajes de onboarding personalizados a clientes de WeSpeak. Cuando completas el formulario web, el sistema envía automáticamente un email profesional con toda la información necesaria para que el cliente comience su proceso de implementación.

## 📧 Cómo usar el sistema

### Acceder al Formulario

Una vez desplegado, accede a la URL de GitHub Pages:
```
https://alesoander.github.io/MensajesFunnel/
```

### Completar el Formulario

El formulario requiere la siguiente información:

#### 1. Link de Acceso WeSpeak **(Requerido)**
- El enlace único de acceso a la plataforma WeSpeak
- Ejemplo: `https://app.wespeak.pro/access/abc123`
- Este link se incluirá en el email para que el cliente pueda acceder directamente

#### 2. Nombre del Responsable de Onboarding **(Requerido)**
- El nombre de la persona que recibirá el email
- Ejemplo: `María` o `Carlos González`
- Se usa en el saludo: "Hola María,"

#### 3. Nombre de la Oportunidad **(Requerido)**
- El nombre del hotel/negocio del cliente
- Ejemplo: `Hotel Paradise`, `Resort Mar Azul`
- Aparece en el asunto del email: "Tu asistente está listo para empezar | WeSpeak <> Hotel Paradise"

#### 4. Email del Cliente **(Requerido)**
- La dirección de email donde se enviará el mensaje
- Ejemplo: `maria@hotelparadise.com`
- Debe ser un email válido

#### 5. Notas de Presentación Onboarding **(Opcional)**
- Información adicional específica para este cliente
- Ejemplo: "El hotel tiene 3 propiedades que necesitan configuración"
- Si se incluye, aparece como un punto adicional en la lista del email

### Enviar el Mensaje

1. Completa todos los campos requeridos (marcados con *)
2. Revisa que la información sea correcta
3. Haz clic en el botón "📧 Enviar Mensaje"
4. Espera la confirmación (aparecerá un mensaje verde de éxito)

### Confirmación de Envío

**Mensaje de Éxito:**
```
✅ ¡Mensaje enviado exitosamente! El cliente recibirá el email de onboarding en breve.
```

**Mensaje de Error:**
```
❌ Error al enviar el mensaje: [descripción del error]
```

## 📨 El Email que Recibirá el Cliente

El email enviado incluye:

### Asunto
```
Tu asistente está listo para empezar | WeSpeak <> [Nombre de la Oportunidad]
```

### Contenido

1. **Saludo personalizado** con el nombre del responsable
2. **Introducción** de Nahuel del equipo de Onboarding & Customer Success
3. **Instrucciones paso a paso:**
   - Link de acceso a la plataforma (pre-cargado)
   - Indicaciones para completar y verificar la información
   - Notas adicionales (si se incluyeron)
   - Video explicativo de introducción
4. **Agenda** para reservar reunión
5. **Información de contacto** completa:
   - WhatsApp
   - Email
   - Enlaces a redes sociales
6. **Firma profesional** con logo de WeSpeak

## 💡 Mejores Prácticas

### Antes de Enviar

- ✅ Verifica que el link de acceso WeSpeak sea correcto
- ✅ Confirma que el email del cliente esté escrito correctamente
- ✅ Revisa la ortografía del nombre del cliente
- ✅ Asegúrate de que el nombre de la oportunidad sea el correcto
- ✅ Si hay información especial, agrégala en las notas

### Después de Enviar

- ✅ Verifica que apareció el mensaje de confirmación
- ✅ Opcionalmente, contacta al cliente para confirmar que recibió el email
- ✅ Guarda la información para seguimiento

### Tips

- **Personalización:** Las notas opcionales son muy útiles para información específica del cliente
- **Timing:** Envía el email apenas tengas toda la información lista
- **Seguimiento:** El email incluye todos los datos de contacto para que el cliente pueda responder fácilmente
- **Multiple envíos:** Puedes usar el formulario múltiples veces para diferentes clientes

## 🔍 Casos de Uso

### Caso 1: Cliente Nuevo Estándar
```
Link: https://app.wespeak.pro/access/hotel123
Nombre: Ana Martínez
Oportunidad: Hotel Costa Bella
Email: ana.martinez@costabella.com
Notas: (dejar vacío)
```

### Caso 2: Cliente con Requisitos Especiales
```
Link: https://app.wespeak.pro/access/resort456
Nombre: Roberto Silva
Oportunidad: Resort Mountain View
Email: roberto@mountainview.com
Notas: El resort tiene 3 propiedades. Necesitará configuración para cada una antes de la reunión.
```

### Caso 3: Cliente Internacional
```
Link: https://app.wespeak.pro/access/inter789
Nombre: Sarah Johnson
Oportunidad: Paradise Beach Resort
Email: sarah.johnson@paradisebeach.com
Notas: Cliente de habla inglesa - considerar materiales en inglés durante la reunión.
```

## 🚨 Solución de Problemas

### El botón no responde
- Asegúrate de completar todos los campos requeridos
- Verifica tu conexión a internet
- Refresca la página e intenta nuevamente

### Error al enviar
- Confirma que el email del cliente sea válido
- Verifica que el link de WeSpeak esté completo
- Si el error persiste, contacta al administrador del sistema

### Email no recibido
- Verifica la bandeja de spam/correo no deseado del cliente
- Confirma que el email esté escrito correctamente
- Espera unos minutos - puede haber un pequeño retraso
- Contacta al cliente para verificar

### El formulario se ve mal
- Asegúrate de usar un navegador moderno (Chrome, Firefox, Safari, Edge)
- Limpia el caché del navegador
- Prueba en modo incógnito/privado

## 📞 Soporte

Si tienes problemas con el sistema:
1. Revisa esta guía y la solución de problemas
2. Consulta el archivo README.md para información técnica
3. Contacta al administrador del sistema

## 🔐 Seguridad y Privacidad

- ✅ Todas las credenciales están protegidas
- ✅ Los datos no se almacenan - se envían directamente
- ✅ La conexión es segura (HTTPS)
- ✅ Solo usuarios autorizados tienen acceso al formulario

---

**¡Listo para comenzar! Completa el formulario y automatiza tus mensajes de onboarding.**