# 🚀 Quick Start Guide

## For End Users (Sending Messages)

1. **Access the form**: Visit `https://alesoander.github.io/MensajesFunnel/`
2. **Fill in the details**:
   - WeSpeak access link
   - Customer name
   - Opportunity name
   - Customer email
   - Optional notes
3. **Click "Enviar Mensaje"**
4. **Done!** The data is sent to N8N, which handles the email delivery

📖 **Detailed instructions**: See [USAGE.md](USAGE.md)

## For Administrators (First-Time Setup)

### Prerequisites
- GitHub account (you have this)
- Vercel account (free): https://vercel.com
- N8N workflow with webhook configured

### Setup Steps

#### 1. Configure N8N Webhook
```bash
# Set up your N8N workflow:
1. Create a workflow in N8N
2. Add a Webhook node
3. Configure email sending (Gmail, SMTP, SendGrid, etc.)
4. Copy the webhook URL
```

#### 2. Deploy Backend to Vercel
```bash
# Option A: From Vercel Dashboard (Recommended)
1. Go to https://vercel.com/
2. Click "Add New Project"
3. Import this GitHub repository
4. Add environment variable (required):
   - N8N_WEBHOOK_URL = your-webhook-url
5. Deploy
```

```bash
# Option B: Using Vercel CLI
npm install -g vercel
vercel login
vercel
# Add webhook URL (required)
vercel env add N8N_WEBHOOK_URL
vercel --prod
```

#### 3. Enable GitHub Pages
```bash
1. Go to repository Settings → Pages
2. Under "Build and deployment"
3. Set Source to "GitHub Actions"
4. Done! The workflow will deploy automatically
```

#### 4. Test
```bash
1. Visit https://alesoander.github.io/MensajesFunnel/
2. Fill the form with test data
3. Send a test message
4. Verify N8N receives the data
5. If email is configured in N8N, verify it arrives
```

📖 **Detailed setup**: See [DEPLOYMENT.md](DEPLOYMENT.md)

## For Developers

### Local Development

```bash
# Clone the repository
git clone https://github.com/alesoander/MensajesFunnel.git
cd MensajesFunnel

# Install dependencies
npm install

# Create .env file
cp .env.example .env
# Edit .env with your credentials

# Start development server
npm run dev

# Open browser
open http://localhost:3000
```

### Project Structure
```
MensajesFunnel/
├── index.html          # Frontend form
├── app.js              # Frontend logic
├── api/
│   └── send-email.js   # Backend API (serverless)
├── .github/workflows/
│   └── deploy.yml      # GitHub Actions
├── README.md           # Technical documentation
├── DEPLOYMENT.md       # Deployment guide
└── USAGE.md           # User guide
```

### Tech Stack
- **Frontend**: HTML, CSS, JavaScript (Vanilla)
- **Backend**: Node.js serverless function
- **Integration**: N8N webhook
- **Deployment**: GitHub Pages + Vercel
- **Email**: Handled by N8N (flexible - Gmail, SMTP, SendGrid, etc.)

📖 **Full documentation**: See [README.md](README.md)

## 📚 Documentation Files

| File | Purpose | Audience |
|------|---------|----------|
| [README.md](README.md) | Technical overview and setup | Developers |
| [DEPLOYMENT.md](DEPLOYMENT.md) | Step-by-step deployment guide | Administrators |
| [USAGE.md](USAGE.md) | How to use the system | End Users |
| [QUICKSTART.md](QUICKSTART.md) | This file - quick reference | Everyone |

## 🆘 Need Help?

1. **Can't deploy?** → See [DEPLOYMENT.md](DEPLOYMENT.md)
2. **Don't know how to use?** → See [USAGE.md](USAGE.md)
3. **Want to customize?** → See [README.md](README.md)
4. **Found a bug?** → Open an issue on GitHub

## ✨ Features

✅ Automated webhook integration  
✅ N8N handles email delivery  
✅ No email credentials in code  
✅ Easy-to-use web interface  
✅ Responsive design  
✅ No database needed  
✅ Free to host  
✅ Simpler setup than OAuth2  

---

**Ready to start? Choose your path above! 👆**
