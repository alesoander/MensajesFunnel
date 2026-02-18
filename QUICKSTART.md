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
4. **Done!** The data is sent directly to N8N, which handles the email delivery

📖 **Detailed instructions**: See [USAGE.md](USAGE.md)

## For Administrators (First-Time Setup)

### Prerequisites
- GitHub account (you have this)
- N8N workflow with webhook configured and CORS enabled

### Setup Steps

#### 1. Configure N8N Webhook
```bash
# Set up your N8N workflow:
1. Create a workflow in N8N
2. Add a Webhook node
3. Enable CORS for https://alesoander.github.io
4. Configure email sending (Gmail, SMTP, SendGrid, etc.)
5. Copy the webhook URL
```

#### 2. Update Webhook URL in Code
```bash
1. Edit the file `app.js`
2. Find line 2: const N8N_WEBHOOK_URL = '...'
3. Replace with your webhook URL
4. Commit and push to main/master branch
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

# Start development server (Python 3)
python3 -m http.server 8000

# Or with Node.js
npx http-server -p 8000

# Open browser
open http://localhost:8000
```

### Project Structure
```
MensajesFunnel/
├── index.html          # Frontend form
├── app.js              # Frontend logic (includes N8N webhook URL)
├── .github/workflows/
│   └── deploy.yml      # GitHub Actions
├── README.md           # Technical documentation
├── DEPLOYMENT.md       # Deployment guide
└── USAGE.md           # User guide
```

### Tech Stack
- **Frontend**: HTML, CSS, JavaScript (Vanilla)
- **Integration**: N8N webhook (direct)
- **Deployment**: GitHub Pages (static hosting)
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

✅ Direct N8N webhook integration  
✅ N8N handles email delivery  
✅ No backend server needed  
✅ No email credentials in code  
✅ Easy-to-use web interface  
✅ Responsive design  
✅ No database needed  
✅ Free to host on GitHub Pages  
✅ Simple one-step deployment  

## 💡 Architecture

**Before:** Frontend (GitHub Pages) → Backend (Vercel) → N8N Webhook

**Now:** Frontend (GitHub Pages) → N8N Webhook (direct)

**Benefits:**
- ✅ Simpler - only one deployment
- ✅ Faster - fewer hops
- ✅ Free - no Vercel needed
- ✅ Easier to maintain

---

**Ready to start? Choose your path above! 👆**
