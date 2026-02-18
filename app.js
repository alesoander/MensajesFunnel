// Direct N8N webhook URL
const N8N_WEBHOOK_URL = 'https://n8n.srv1010580.hstgr.cloud/webhook-test/8efad83b-804c-4201-9e9e-d8b185c7a59f';

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
        const response = await fetch(N8N_WEBHOOK_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        });
        
        if (response.ok) {
            showMessage('success', '✅ ¡Mensaje enviado exitosamente! El cliente recibirá el email de onboarding en breve.');
            form.reset();
        } else {
            showMessage('error', `❌ Error al enviar el mensaje. Por favor, intente nuevamente.`);
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
