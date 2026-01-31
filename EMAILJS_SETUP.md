# 📧 Configuración de EmailJS para el Formulario de Contacto

## 🚀 Pasos para Configurar EmailJS

### 1. Crear Cuenta en EmailJS
1. Ve a [EmailJS.com](https://www.emailjs.com/)
2. Regístrate con tu email (gratis hasta 200 emails/mes)
3. Verifica tu email

### 2. Configurar Email Service
1. En el dashboard, ve a **Email Services**
2. Haz clic en **Add New Service**
3. Selecciona tu proveedor (Gmail, Outlook, etc.)
4. Conecta tu cuenta de email
5. Copia el **Service ID** generado

### 3. Crear Template de Email
1. Ve a **Email Templates**
2. Haz clic en **Create New Template**
3. Usa esta plantilla:

```
Asunto: Nuevo contacto desde tu portfolio - {{subject}}

---
Has recibido un nuevo mensaje desde tu portfolio:

Nombre: {{name}}
Email: {{email}}
Asunto: {{subject}}

Mensaje:
{{message}}

---
Este email fue enviado desde el formulario de contacto de victorflórez.com
```

4. Guarda el template y copia el **Template ID**

### 4. Configurar Variables en el HTML

En index.html, reemplaza estas líneas (línea ~1181):

```javascript
emailjs.init({
    publicKey: "YOUR_PUBLIC_KEY", // ⬅️ Reemplaza aquí
});
```

```javascript
emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
                    // ⬆️ Servicio       ⬆️ Template
```

### 5. Obtener Public Key
1. En EmailJS, ve a **Account** → **General**
2. Copia tu **Public Key**
3. Pégala en la configuración de `emailjs.init()`

---

## 🔧 Configuración Completa

Después de obtener tus credenciales, reemplaza en el HTML:

```javascript
// Línea ~1177
emailjs.init({
    publicKey: "tu_public_key_aqui",
});

// Línea ~1195
emailjs.sendForm('tu_service_id', 'tu_template_id', this)
```

---

## 📋 Nombres de Campos en el Template

Asegúrate de que tu template de EmailJS use estos nombres:
- `{{name}}` - Nombre del remitente
- `{{email}}` - Email del remitente
- `{{subject}}` - Asunto del mensaje
- `{{message}}` - Contenido del mensaje

Estos corresponden a los atributos `name=""` de los inputs del formulario.

---

## ✅ Probar el Formulario

1. Configura las credenciales
2. Abre index.html en tu navegador
3. Ve a la sección **Contacto**
4. Llena el formulario y envía
5. Deberías recibir el email en tu bandeja de entrada

---

## 🆓 Plan Gratuito de EmailJS

- ✅ 200 emails/mes gratis
- ✅ Sin tarjeta de crédito requerida
- ✅ Múltiples servicios de email
- ✅ Templates ilimitados

Para más emails, puedes:
- Actualizar a plan Premium ($15/mes → 1,000 emails)
- Usar múltiples cuentas EmailJS
- Implementar backend propio con Nodemailer

---

## 🔐 Seguridad

**IMPORTANTE:** El Public Key es seguro de exponer en el frontend.

EmailJS protege contra spam con:
- Rate limiting por IP
- Captcha automático (opcional)
- Lista blanca de dominios

---

## 🛠️ Alternativas al Formulario Actual

Si prefieres no usar EmailJS, puedes:

1. **Formspree** (https://formspree.io/) - Más simple
2. **Netlify Forms** - Si usas Netlify hosting
3. **Backend propio** con Node.js + Nodemailer
4. **Google Forms** embebido
5. **GetForm.io** - Otra alternativa gratuita

---

## 📞 Contacto de Respaldo

Mientras configuras EmailJS, los visitantes pueden contactarte por:
- 📷 Instagram: [@victormflz](https://www.instagram.com/victormflz/)
- 💼 LinkedIn: [víctor-florez-dev](https://www.linkedin.com/in/víctor-florez-dev/)
- 💻 GitHub: [@Victormflz](https://github.com/Victormflz)

---

**¡Tu formulario estará listo para recibir mensajes en menos de 5 minutos! 🚀**
