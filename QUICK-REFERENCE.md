# 📋 QUICK REFERENCE CARD

Sulatan lang ni nga card para madali imong sundon!

## 🚀 3-MINUTE SETUP

\`\`\`bash
# 1. Install
npm install

# 2. Setup Supabase
# - Create account: https://supabase.com
# - Run SQL: supabase-setup.sql
# - Create admin user
# - Copy URL + Key

# 3. Configure
# Create .env.local:
NEXT_PUBLIC_SUPABASE_URL=your_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key

# 4. Test
npm run dev
# Open: http://localhost:3000

# 5. Deploy
git init
git add .
git commit -m "Initial commit"
git remote add origin YOUR_REPO_URL
git push -u origin main
# Deploy on Vercel: https://vercel.com
\`\`\`

## 📱 URLs

| Purpose | URL |
|---------|-----|
| Registration | https://your-app.vercel.app |
| Admin | https://your-app.vercel.app/admin |
| Supabase | https://supabase.com/dashboard |
| Vercel | https://vercel.com/dashboard |

## 🔑 Credentials

### Supabase
- Project URL: Settings > API > Project URL
- Anon Key: Settings > API > anon public key

### Admin
- Email: (created in Supabase Auth)
- Password: (set when creating user)

## 📂 Important Files

| File | Purpose |
|------|---------|
| `.env.local` | Supabase credentials |
| `supabase-setup.sql` | Database setup |
| `package.json` | Dependencies |
| `app/page.js` | Registration form |
| `app/admin/page.js` | Admin dashboard |

## 🛠️ Common Commands

\`\`\`bash
# Development
npm run dev          # Start dev server
npm run build        # Build for production
npm start            # Start production server

# Deployment
git add .            # Stage changes
git commit -m "msg"  # Commit changes
git push             # Deploy (auto on Vercel)

# Troubleshooting
npm install          # Reinstall deps
rm -rf .next         # Clear build cache
\`\`\`

## ✅ Quick Tests

### Test Registration
1. Open homepage
2. Fill form
3. Submit
4. Check Supabase: Table Editor > registrations

### Test Admin
1. Go to /admin
2. Login with admin email/password
3. Should see registrations
4. Try adding remark

### Test PWA
1. Open site
2. Look for install icon
3. Install app
4. Launch from home screen

## 🆘 Quick Fixes

### Build Failed
\`\`\`bash
npm install
npm run build
\`\`\`

### Can't Login
1. Check Supabase Auth > Users
2. Verify email/password
3. Try incognito mode

### Data Not Saving
1. Check .env.local
2. Verify Supabase URL
3. Check RLS policies

### PWA Not Installing
1. Must use HTTPS
2. Clear browser cache
3. Try different browser

## 📊 Admin Dashboard

### Stats
- Total Registrations
- With Remarks
- Pending Review

### Actions
- View all registrations
- Add/edit remarks
- Filter/search (coming soon)
- Export (coming soon)

## 🎨 Customization

### Colors
Edit `tailwind.config.js`:
\`\`\`javascript
colors: {
  primary: { 500: '#f97316' }  // Orange
}
\`\`\`

### Event Details
Edit `app/page.js`:
- Date, time, location
- Event description
- Registration fields

### T-shirt Sizes
Edit `app/page.js`:
\`\`\`javascript
const TSHIRT_SIZES = [
  { value: 'XS', label: 'XS - Extra Small' },
  // Add more sizes
]
\`\`\`

## 📞 Support Links

| Resource | Link |
|----------|------|
| Supabase Docs | https://supabase.com/docs |
| Next.js Docs | https://nextjs.org/docs |
| Tailwind Docs | https://tailwindcss.com/docs |
| Vercel Docs | https://vercel.com/docs |

## 💾 Backup

### Export Data
1. Supabase Dashboard
2. Table Editor > registrations
3. Click "..." > Export as CSV

### Download Database
1. Supabase Dashboard
2. Database > Backups
3. Download latest backup

## 🔄 Updates

\`\`\`bash
# Update dependencies
npm update

# Check for outdated
npm outdated

# Update specific package
npm install package@latest
\`\`\`

## 📈 Monitoring

### Vercel
- Dashboard > Analytics
- View traffic, performance

### Supabase
- Dashboard > Database
- View queries, connections

## 🎯 Checklist

Before event:
- [ ] Test registration
- [ ] Test admin login
- [ ] Share link
- [ ] Monitor registrations

Event day:
- [ ] Print participant list
- [ ] Check-in participants
- [ ] Mark attendance in remarks

After event:
- [ ] Export final data
- [ ] Backup database
- [ ] Send thank you emails

## 🎉 Success!

If everything works:
- ✅ Form submits
- ✅ Data saves to Supabase
- ✅ Admin can view registrations
- ✅ PWA installs
- ✅ No errors

**Kaya nimo ni! Good luck! 🏃‍♀️🏃‍♂️**

---

*For full details, check:*
- README.md (English)
- QUICK-START-BISAYA.md (Bisaya)
- DEPLOYMENT.md (Deploy guide)
- SETUP-CHECKLIST.md (Full checklist)
