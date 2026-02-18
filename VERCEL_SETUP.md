# Vercel Setup - Quick Reference

## Environment Variable Setup

### Variable to Add
```
N8N_WEBHOOK_URL=https://your-n8n-instance.com/webhook-test/YOUR-WEBHOOK-ID
```

**Replace with your actual N8N webhook URL**

### Where to Add It
1. Vercel Dashboard → Your Project
2. Settings → Environment Variables
3. Add New Variable
4. Name: `N8N_WEBHOOK_URL`
5. Value: (paste your N8N webhook URL)
6. Environments: Production, Preview, Development
7. Save

### After Adding
1. Go to Deployments tab
2. Latest deployment → Three dots (⋯)
3. Click "Redeploy"
4. Wait ~1 minute
5. Test the form!

## Quick Test
Visit: `https://your-project.vercel.app`
Fill form → Click "Enviar Mensaje" → Should see success message ✅
