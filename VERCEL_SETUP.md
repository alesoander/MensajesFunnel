# Vercel Setup - Quick Reference

## Environment Variable Setup

### Variable to Add
```
N8N_WEBHOOK_URL=https://n8n.srv1010580.hstgr.cloud/webhook-test/8efad83b-804c-4201-9e9e-d8b185c7a59f
```

### Where to Add It
1. Vercel Dashboard → Your Project
2. Settings → Environment Variables
3. Add New Variable
4. Name: `N8N_WEBHOOK_URL`
5. Value: (paste the URL above)
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
