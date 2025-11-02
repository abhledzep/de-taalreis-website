# Deployment Guide - de-taalreis.nl

This guide will help you deploy your website to Vercel (FREE) and connect your domain.

## Prerequisites
- ✅ Domain purchased: **de-taalreis.nl** 
- ✅ GitHub account (create one at github.com if needed)
- ✅ Vercel account (sign up at vercel.com - use GitHub login)

---

## Step 1: Push Code to GitHub

1. **Create a new repository on GitHub:**
   - Go to https://github.com/new
   - Repository name: `de-taalreis-website`
   - Make it **Public** or **Private** (your choice)
   - Don't initialize with README (we already have one)
   - Click "Create repository"

2. **Push your code:**
   ```bash
   cd /Users/abhie/de-taalreis-website
   git add .
   git commit -m "Initial commit - De Taalreis website"
   git remote add origin https://github.com/YOUR_USERNAME/de-taalreis-website.git
   git branch -M main
   git push -u origin main
   ```
   (Replace `YOUR_USERNAME` with your GitHub username)

---

## Step 2: Deploy to Vercel

1. **Go to Vercel:**
   - Visit https://vercel.com/login
   - Click "Continue with GitHub"
   - Authorize Vercel to access your repositories

2. **Import your project:**
   - Click "Add New..." → "Project"
   - Find `de-taalreis-website` in the list
   - Click "Import"

3. **Configure project:**
   - **Framework Preset:** Next.js (auto-detected)
   - **Root Directory:** `./` (leave as is)
   - **Build Command:** `npm run build` (auto-filled)
   - **Output Directory:** `.next` (auto-filled)
   - Click "Deploy"

4. **Wait for deployment:**
   - First deployment takes ~2-3 minutes
   - You'll see a preview URL like: `de-taalreis-website.vercel.app`
   - Click "Visit" to see your site live!

---

## Step 3: Connect Your Domain

### A. In Vercel Dashboard

1. **Go to your project settings:**
   - From your project dashboard, click "Settings"
   - Click "Domains" in the left sidebar

2. **Add your domain:**
   - Enter: `de-taalreis.nl`
   - Click "Add"
   - Also add: `www.de-taalreis.nl`
   - Click "Add"

3. **Vercel will show you DNS records to configure:**
   - For `de-taalreis.nl`:
     - Type: **A**
     - Name: **@**
     - Value: **76.76.21.21**
   
   - For `www.de-taalreis.nl`:
     - Type: **CNAME**
     - Name: **www**
     - Value: **cname.vercel-dns.com**

### B. In Your Domain Registrar (TransIP/Flexahosting/etc.)

1. **Log into your domain registrar:**
   - Go to the dashboard where you bought `de-taalreis.nl`

2. **Find DNS settings:**
   - Look for "DNS", "DNS Management", or "Nameservers"
   - You want to edit DNS records (not change nameservers)

3. **Add/Update DNS records:**

   **For TransIP:**
   - Go to "Mijn producten" → Click on `de-taalreis.nl`
   - Click "DNS" tab
   - Remove any existing A records for `@`
   - Add new record:
     - Type: `A`
     - Name: `@` (or leave empty)
     - Value: `76.76.21.21`
     - TTL: `3600` (or default)
   - Add another record:
     - Type: `CNAME`
     - Name: `www`
     - Value: `cname.vercel-dns.com`
     - TTL: `3600`
   - Click "Save"

   **For Flexahosting/Other:**
   - Similar process - find DNS management
   - Add the same A and CNAME records

4. **Wait for DNS propagation:**
   - Can take 5 minutes to 48 hours (usually ~30 minutes)
   - Check status in Vercel dashboard (it will show "Valid Configuration" when ready)
   - Vercel automatically provisions SSL certificate

---

## Step 4: Verify Everything Works

1. **Check your domain:**
   - Visit https://de-taalreis.nl
   - Visit https://www.de-taalreis.nl
   - Both should show your website with HTTPS (🔒)

2. **Test on mobile:**
   - Open on your phone to verify responsiveness

---

## Step 5: Future Updates

**To update your website:**

1. Make changes to your code locally
2. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Update content"
   git push
   ```
3. Vercel automatically detects the push and deploys (takes ~1-2 minutes)
4. Your site is updated!

---

## Troubleshooting

### Domain not connecting after 2 hours?

1. **Check DNS records:**
   - Use https://dnschecker.org
   - Enter `de-taalreis.nl`
   - Verify A record points to `76.76.21.21`

2. **Verify in Vercel:**
   - Go to Settings → Domains
   - Check if Vercel shows any errors
   - Click "Refresh" button

3. **Common fixes:**
   - Make sure you removed any conflicting DNS records (old A records, etc.)
   - Ensure nameservers are set to your registrar's defaults (not changed)
   - Check for typos in DNS records

### SSL Certificate issues?

- Vercel automatically provisions SSL
- Can take up to 24 hours after DNS propagation
- Check Vercel dashboard for SSL status

### Need help?

- Vercel docs: https://vercel.com/docs
- Next.js docs: https://nextjs.org/docs
- Contact your domain registrar's support if DNS issues persist

---

## 🎉 That's It!

Your website is now live at **https://de-taalreis.nl**!

### What You Get (All FREE):

- ✅ Fast, professional website
- ✅ Automatic HTTPS/SSL
- ✅ Global CDN (fast worldwide)
- ✅ Automatic deployments
- ✅ Mobile-responsive design
- ✅ Zero server management

### Customization

See `README.md` for how to customize:
- Colors and branding
- Contact information
- Pricing
- Services
- Content

Need to make changes? Edit the files, commit, push - done!

