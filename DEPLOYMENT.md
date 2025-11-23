# 🚀 Deployment Guide

## Step-by-Step Deployment to Vercel

### 1️⃣ Prepare Your Supabase Database

Before deploying, make sure you have:

1. Created a Supabase project at https://supabase.com
2. Run the `supabase-setup.sql` script in the SQL Editor
3. Created an admin user in Authentication > Users
4. Got your Project URL and anon key from Settings > API

### 2️⃣ Push Code to GitHub

\`\`\`bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - 5KM Run Registration Portal"

# Create a new repository on GitHub (https://github.com/new)
# Then link it:
git remote add origin https://github.com/YOUR_USERNAME/5km-run-registration.git

# Push to GitHub
git branch -M main
git push -u origin main
\`\`\`

### 3️⃣ Deploy to Vercel

#### Option A: Using Vercel Dashboard (Easiest)

1. Go to https://vercel.com
2. Click "Add New..." → "Project"
3. Click "Import" next to your GitHub repository
4. Configure project:
   - Framework Preset: Next.js
   - Root Directory: ./
   - Build Command: `npm run build`
   - Output Directory: .next
5. Add Environment Variables:
   - Click "Environment Variables"
   - Add: `NEXT_PUBLIC_SUPABASE_URL` = your_supabase_url
   - Add: `NEXT_PUBLIC_SUPABASE_ANON_KEY` = your_anon_key
6. Click "Deploy"

#### Option B: Using Vercel CLI

\`\`\`bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Follow the prompts, then add environment variables:
vercel env add NEXT_PUBLIC_SUPABASE_URL
vercel env add NEXT_PUBLIC_SUPABASE_ANON_KEY

# Deploy to production
vercel --prod
\`\`\`

### 4️⃣ Post-Deployment Setup

After deployment:

1. **Test Registration**
   - Visit your deployment URL
   - Fill out the registration form
   - Verify data appears in Supabase

2. **Test Admin Login**
   - Go to `your-url.vercel.app/admin`
   - Login with your Supabase admin credentials
   - Check if registrations appear

3. **Test PWA Installation**
   - On mobile: Visit site, tap "Add to Home Screen"
   - On desktop: Look for install icon in address bar

### 5️⃣ Custom Domain (Optional)

1. In Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

### 6️⃣ Continuous Deployment

Vercel automatically deploys when you push to GitHub:

\`\`\`bash
# Make changes to your code
git add .
git commit -m "Update registration form"
git push

# Vercel will automatically deploy! 🎉
\`\`\`

## 📱 Sharing the App

After deployment, share your app:

**For Registration:**
- URL: `https://your-app.vercel.app`

**For Admin:**
- URL: `https://your-app.vercel.app/admin`

**For PWA Installation:**
1. Mobile users: "Add to Home Screen"
2. Desktop users: Click install icon in browser

## ⚙️ Environment Variables Reference

| Variable | Where to Get It | Purpose |
|----------|----------------|---------|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase Dashboard > Settings > API | Connects to your database |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase Dashboard > Settings > API | Public API key |

## 🔧 Troubleshooting

### Build Failed on Vercel

- Check if all dependencies are in `package.json`
- Verify environment variables are set
- Check build logs in Vercel dashboard

### Admin Can't Login

- Verify admin user exists in Supabase Auth
- Check if email/password are correct
- Ensure Supabase URL and keys are correct

### PWA Not Working

- Ensure you're using HTTPS (Vercel provides this)
- Check if `manifest.json` is accessible
- Verify `next-pwa` is installed

## 📊 Monitoring

Monitor your app:

1. **Vercel Analytics**
   - Go to Vercel Dashboard > Analytics
   - View visitor stats, performance

2. **Supabase Dashboard**
   - Monitor database usage
   - Check query performance
   - View API logs

## 🔄 Updates and Maintenance

To update your app:

\`\`\`bash
# Make changes
# Test locally with: npm run dev

# Commit and push
git add .
git commit -m "Your update message"
git push

# Vercel deploys automatically!
\`\`\`

## 🎉 You're Done!

Your 5KM Run registration portal is now live and accessible worldwide!

**Next Steps:**
- Share the registration link with participants
- Monitor registrations in admin dashboard
- Add remarks to registrations as needed
- Prepare for the event on December 5, 2025!
