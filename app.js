// Configuration - Automatically detects the API endpoint
// For local development: http://localhost:3000/api/send-email
// For production: https://your-vercel-deployment.vercel.app/api/send-email
const API_ENDPOINT = window.location.hostname === 'localhost' 
    ? 'http://localhost:3000/api/send-email'
    : `${window.location.origin}/api/send-email`;

document.getElementById('messageForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const form = e.target;
    const submitBtn = document.getElementById('submitBtn');
    const loading = document.getElementById('loading');
    const messageBox = document.getElementById('messageBox');
    
    // Get form values
    const formData = {
        wespeak_link_de_acceso: document.getElementById('wespeak_link').value,
        firstname_responsable_onboarding: document.getElementById('firstname').value,
        opportunityname: document.getElementById('opportunity').value,
        email: document.getElementById('email').value,
        Notas_Presentacion_Onboarding: document.getElementById('notes').value || null
    };
    
    // Show loading state
    submitBtn.disabled = true;
    loading.classList.add('show');
    messageBox.classList.remove('show');
    
    try {
        const response = await fetch(API_ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        });
        
        const result = await response.json();
        
        if (response.ok) {
            showMessage('success', '✅ ¡Mensaje enviado exitosamente! El cliente recibirá el email de onboarding en breve.');
            form.reset();
        } else {
            showMessage('error', `❌ Error al enviar el mensaje: ${result.error || 'Por favor, intente nuevamente.'}`);
        }
    } catch (error) {
        console.error('Error:', error);
        showMessage('error', '❌ Error de conexión. Por favor, verifique su conexión a internet e intente nuevamente.');
    } finally {
        submitBtn.disabled = false;
        loading.classList.remove('show');
    }
});

function showMessage(type, text) {
    const messageBox = document.getElementById('messageBox');
    messageBox.className = `message ${type} show`;
    messageBox.textContent = text;
    
    // Auto-hide after 5 seconds for success messages
    if (type === 'success') {
        setTimeout(() => {
            messageBox.classList.remove('show');
        }, 5000);
    }
}
