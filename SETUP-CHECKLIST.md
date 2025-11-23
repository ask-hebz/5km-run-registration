# ✅ SETUP CHECKLIST

Para dili ka malimtan bisan unsa, sundon lang ni nga checklist!

## 📋 Pre-Deployment Checklist

### 1. Local Setup
- [ ] Na-install na ang Node.js (version 18 or higher)
- [ ] Na-clone na ang repository
- [ ] Na-install na ang dependencies (`npm install`)
- [ ] Naa nay `.env.local` file with Supabase credentials

### 2. Supabase Setup
- [ ] Created Supabase account
- [ ] Created new project
- [ ] Ran `supabase-setup.sql` in SQL Editor
- [ ] Verified registrations table exists
- [ ] Created admin user in Authentication
- [ ] Got Project URL from Settings > API
- [ ] Got anon key from Settings > API
- [ ] Added credentials to `.env.local`

### 3. Local Testing
- [ ] Ran `npm run dev` successfully
- [ ] Tested registration form
- [ ] Verified data appears in Supabase
- [ ] Tested admin login at `/admin`
- [ ] Verified registrations appear in admin dashboard
- [ ] Tested adding remarks
- [ ] No console errors

## 🚀 Deployment Checklist

### 4. GitHub Setup
- [ ] Created GitHub account (if needed)
- [ ] Created new repository
- [ ] Initialized git (`git init`)
- [ ] Added files (`git add .`)
- [ ] Made initial commit
- [ ] Added remote origin
- [ ] Pushed to GitHub (`git push -u origin main`)

### 5. Vercel Setup
- [ ] Created Vercel account
- [ ] Connected GitHub account
- [ ] Imported repository
- [ ] Added environment variables:
  - [ ] `NEXT_PUBLIC_SUPABASE_URL`
  - [ ] `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- [ ] Deployed successfully
- [ ] Got deployment URL

### 6. Post-Deployment Testing
- [ ] Visited deployment URL
- [ ] Tested registration form on live site
- [ ] Checked if data appears in Supabase
- [ ] Tested admin login on live site
- [ ] Verified registrations show in admin
- [ ] Tested on mobile device
- [ ] Tested on desktop
- [ ] Tested PWA installation on mobile
- [ ] Tested PWA installation on desktop

## 📱 PWA Installation Checklist

### Mobile (Android/iOS)
- [ ] Opened site in browser
- [ ] Found "Add to Home Screen" option
- [ ] Successfully installed
- [ ] App opens from home screen
- [ ] App works offline

### Desktop (Chrome/Edge)
- [ ] Opened site in browser
- [ ] Found install icon in address bar
- [ ] Successfully installed
- [ ] App opens in own window
- [ ] App works offline

## 🔒 Security Checklist

- [ ] Changed default admin password
- [ ] Supabase RLS policies are enabled
- [ ] Environment variables are not committed to git
- [ ] `.gitignore` includes `.env.local`
- [ ] Admin email is secure
- [ ] No sensitive data in public repository

## 📊 Final Verification

### Registration Flow
- [ ] User can access registration page
- [ ] All form fields are visible
- [ ] Required fields are marked with *
- [ ] T-shirt size dropdown works
- [ ] Form validation works
- [ ] Success message appears after submission
- [ ] Email notification (if implemented)

### Admin Flow
- [ ] Admin can access `/admin`
- [ ] Login page loads correctly
- [ ] Admin can login with credentials
- [ ] Dashboard shows all registrations
- [ ] Statistics are accurate
- [ ] Can view full registration details
- [ ] Can add/edit remarks
- [ ] Can logout successfully

### Data Integrity
- [ ] Registrations are saved correctly
- [ ] No duplicate registrations
- [ ] All fields are captured
- [ ] Timestamps are correct
- [ ] Remarks are saved
- [ ] Data persists after refresh

## 🎯 Launch Checklist

### Before Event Launch
- [ ] Tested with 5-10 test registrations
- [ ] Cleared test data from Supabase
- [ ] Announced registration link
- [ ] Prepared admin access for team
- [ ] Set up monitoring
- [ ] Planned backup strategy

### During Event Registration
- [ ] Monitor registrations regularly
- [ ] Respond to technical issues
- [ ] Add remarks as needed
- [ ] Export data periodically
- [ ] Communicate with registrants

### Event Day
- [ ] Print participant list
- [ ] Prepare check-in system
- [ ] Have backup of registrations
- [ ] Mark attendance in remarks
- [ ] Collect feedback

## 🔄 Maintenance Checklist

### Weekly
- [ ] Check Supabase usage
- [ ] Review registrations
- [ ] Respond to issues
- [ ] Update remarks

### Monthly
- [ ] Review analytics
- [ ] Check for updates
- [ ] Backup data
- [ ] Plan improvements

## 🆘 Troubleshooting Reference

### If registration fails:
1. Check browser console for errors
2. Verify Supabase is accessible
3. Check RLS policies
4. Verify environment variables

### If admin can't login:
1. Verify user exists in Supabase Auth
2. Check email/password
3. Clear browser cache
4. Try incognito mode

### If PWA won't install:
1. Ensure HTTPS (automatic on Vercel)
2. Check manifest.json is accessible
3. Clear browser cache
4. Try different browser

## ✨ Success Indicators

You know everything is working when:
- ✅ Registration form submits successfully
- ✅ Data appears in Supabase immediately
- ✅ Admin can view registrations
- ✅ Remarks can be added/edited
- ✅ PWA installs on both mobile and desktop
- ✅ Site works on all major browsers
- ✅ No console errors
- ✅ Site loads in under 3 seconds

## 📞 Support Resources

If you get stuck:
- 📖 README.md - Comprehensive guide
- 🚀 DEPLOYMENT.md - Deployment steps
- 🇵🇭 QUICK-START-BISAYA.md - Bisaya guide
- 🤝 CONTRIBUTING.md - For improvements
- 🌐 Supabase Docs - https://supabase.com/docs
- 🌐 Next.js Docs - https://nextjs.org/docs
- 🌐 Vercel Docs - https://vercel.com/docs

## 🎉 You're Ready!

Check off all items, and you're good to go!

**Daghan salamat ug Good luck sa event! 🏃‍♀️🏃‍♂️**
