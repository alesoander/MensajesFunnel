# Vercel Deployment Guide

## Prerequisites

- GitHub repository: `alesoander/MensajesFunnel`
- Vercel account (free): https://vercel.com
- N8N webhook URL

## Step-by-Step Deployment

### 1. Import to Vercel

1. Go to https://vercel.com/
2. Sign in or create account
3. Click "Add New Project"
4. Select "Import Git Repository"
5. Choose `alesoander/MensajesFunnel`
6. Click "Deploy"

**Note**: First deployment will fail - this is expected (missing environment variable)

### 2. Configure Environment Variable

1. In Vercel Dashboard, select your project
2. Click "Settings" tab
3. Click "Environment Variables" in sidebar
4. Add variable:
   - **Key**: `N8N_WEBHOOK_URL`
   - **Value**: Your N8N webhook URL
   - **Environment**: Select all (Production, Preview, Development)
5. Click "Save"

### 3. Redeploy

1. Go to "Deployments" tab
2. Find the latest deployment
3. Click the three dots (⋯) menu
4. Click "Redeploy"
5. Wait for deployment to complete

### 4. Verify

1. Click "Visit" to open your deployed site
2. Fill out the form with test data
3. Click "Enviar Mensaje"
4. Check that:
   - Success message appears
   - N8N webhook receives the data
   - Email is sent (if N8N is configured)

## Troubleshooting

### "Error de conexión"
- Environment variable `N8N_WEBHOOK_URL` is not set
- Go to Settings → Environment Variables and add it

### "Error al enviar el mensaje"
- N8N webhook URL is incorrect
- N8N webhook is not responding
- Check N8N webhook logs

### CORS errors
- Vercel handles CORS automatically
- If issues persist, check N8N CORS settings

## Custom Domain (Optional)

1. Go to Settings → Domains
2. Add your custom domain
3. Follow DNS configuration instructions
4. Wait for SSL certificate (automatic)

## Environment Variables Reference

| Variable | Description | Required |
|----------|-------------|----------|
| `N8N_WEBHOOK_URL` | N8N webhook endpoint URL | ✅ Yes |

## Architecture

```
GitHub → Vercel (Auto Deploy)
  ├── Frontend (Static)
  └── API (/api/send-email.js)
      └── N8N Webhook → Email
```
