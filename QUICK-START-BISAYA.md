# 🚀 QUICK START GUIDE - Bisaya Version

## Unsaon Pag-Setup ug Deploy

### 1. I-install ang Dependencies

\`\`\`bash
npm install
\`\`\`

### 2. I-setup ang Supabase

1. **Sulod sa https://supabase.com**
   - Sign up gamit ang Google o GitHub
   - Click "New project"
   - Pilion ang organization
   - Butangi ug name ang project (example: "5km-run-kuwait")
   - Pilion ang password
   - Pilion ang region nga pinaka-duol (Singapore kay duol sa Kuwait)
   - Click "Create new project"

2. **I-run ang Database Setup**
   - Sulod sa SQL Editor (sa left sidebar)
   - Click "New query"
   - Copy-paste ang tanan gikan sa `supabase-setup.sql` file
   - Click "Run"
   - Dapat makita nimo ang success message

3. **I-create ang Admin User**
   - Sulod sa Authentication > Users
   - Click "Add user"
   - Click "Create new user"
   - Butangi:
     - Email: admin@5kmrun.com (pwede ra baguon)
     - Password: (Choose strong password)
     - Auto Confirm User: ✅ (check this)
   - Click "Create user"

4. **Kuhaon ang API Keys**
   - Sulod sa Settings > API
   - Copy ang "Project URL"
   - Copy ang "anon public" key

### 3. I-configure ang Environment Variables

1. I-rename ang `.env.example` to `.env.local`
2. I-open ang `.env.local`
3. I-paste ang imong credentials:

\`\`\`env
NEXT_PUBLIC_SUPABASE_URL=paste_project_url_diri
NEXT_PUBLIC_SUPABASE_ANON_KEY=paste_anon_key_diri
\`\`\`

### 4. I-test Locally

\`\`\`bash
npm run dev
\`\`\`

Ablihi ang http://localhost:3000

**Test ang Registration:**
- Sulbong ang form
- I-submit
- Check sa Supabase if naa na ang data

**Test ang Admin:**
- Sulod sa http://localhost:3000/admin
- Login gamit ang admin email ug password
- Dapat makita nimo ang registrations

### 5. I-push sa GitHub

\`\`\`bash
# Initialize git
git init

# Add files
git add .

# Commit
git commit -m "Initial commit"

# Create repository sa GitHub
# Tapos i-connect:
git remote add origin https://github.com/YOUR_USERNAME/5km-run-registration.git

# Push
git branch -M main
git push -u origin main
\`\`\`

### 6. I-deploy sa Vercel

1. **Sulod sa https://vercel.com**
2. **Sign in gamit GitHub**
3. **Click "Add New..." > "Project"**
4. **Import ang imong repository**
5. **I-add ang Environment Variables:**
   - NEXT_PUBLIC_SUPABASE_URL
   - NEXT_PUBLIC_SUPABASE_ANON_KEY
6. **Click "Deploy"**

Maghuwat ug 2-3 minutes, tapos ready na!

### 7. I-share ang Link

**Para sa Registration:**
\`\`\`
https://your-project-name.vercel.app
\`\`\`

**Para sa Admin:**
\`\`\`
https://your-project-name.vercel.app/admin
\`\`\`

### 8. I-install as PWA

**Sa Phone:**
1. Ablihi ang website
2. Click ang menu (3 dots)
3. "Add to Home Screen"
4. Done! Naa na sa home screen

**Sa Computer:**
1. Ablihi ang website
2. Tan-awa ang install icon sa address bar
3. Click "Install"
4. Done! Naa na as app

## ✅ Checklist

- [ ] Installed dependencies (npm install)
- [ ] Created Supabase project
- [ ] Ran SQL setup script
- [ ] Created admin user
- [ ] Added environment variables
- [ ] Tested locally
- [ ] Pushed to GitHub
- [ ] Deployed to Vercel
- [ ] Tested registration form
- [ ] Tested admin login
- [ ] Shared registration link

## 🆘 Kung Naay Problem

**Build failed sa Vercel:**
- Check if naa ang environment variables
- Verify kung tama ang Supabase URL ug key

**Dili ma-login ang admin:**
- Check kung nag-exist ang user sa Supabase Auth
- Verify kung tama ang email/password

**PWA dili ma-install:**
- Siguroha nga https ang site (automatic ni sa Vercel)
- Clear browser cache
- Try sa lain browser

## 📞 Need Help?

- Check ang README.md para detailed instructions
- Check ang DEPLOYMENT.md para deployment guide
- Create issue sa GitHub if naa issues

---

**Salamat! Good luck sa 5KM Run event! 🏃‍♀️🏃‍♂️**
