# 5KM Run for a Cause - Registration Portal

A professional PWA (Progressive Web App) registration system for the 5KM Run for a Cause event organized by Philippine Bodybuilders & Fitness Association in Kuwait.

## 🌟 Features

- ✅ **User Registration**: Easy-to-use registration form with all required fields
- 👔 **T-shirt Size Selection**: Dropdown with 7 size options (XS to 3XL)
- 🔐 **Admin Dashboard**: Secure login system for administrators
- 📊 **Registration Management**: View all registrations in a clean table format
- 💬 **Remarks System**: Add and edit remarks for each registration
- 📱 **PWA Support**: Installable on mobile and desktop devices
- 🎨 **Professional Design**: Modern, responsive UI with PBBFA branding
- 🌐 **Offline Ready**: Works even with poor internet connection

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- A Supabase account (free tier is perfect!)
- Git installed

### 1. Clone the Repository

\`\`\`bash
git clone https://github.com/YOUR_USERNAME/5km-run-registration.git
cd 5km-run-registration
\`\`\`

### 2. Install Dependencies

\`\`\`bash
npm install
\`\`\`

### 3. Set Up Supabase

#### A. Create a Supabase Project

1. Go to [https://supabase.com](https://supabase.com)
2. Click "Start your project"
3. Create a new organization and project
4. Wait for the project to be set up

#### B. Create the Database Table

1. In your Supabase dashboard, go to "SQL Editor"
2. Click "New Query"
3. Paste this SQL code:

\`\`\`sql
-- Create registrations table
CREATE TABLE registrations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  tel_no TEXT NOT NULL,
  email TEXT NOT NULL,
  organization TEXT,
  tshirt_size TEXT NOT NULL,
  remarks TEXT,
  registered_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE registrations ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public inserts (for registration)
CREATE POLICY "Allow public registration" ON registrations
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Create policy to allow authenticated users to read (for admin)
CREATE POLICY "Allow authenticated read" ON registrations
  FOR SELECT
  TO authenticated
  USING (true);

-- Create policy to allow authenticated users to update (for admin remarks)
CREATE POLICY "Allow authenticated update" ON registrations
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);
\`\`\`

4. Click "Run" to execute the query

#### C. Set Up Authentication

1. In your Supabase dashboard, go to "Authentication" → "Policies"
2. Go to "Authentication" → "Users"
3. Click "Add user" → "Create new user"
4. Enter admin email and password (you'll use this to log in)
5. Click "Create user"

#### D. Get Your API Keys

1. Go to "Settings" → "API"
2. Copy the "Project URL"
3. Copy the "anon public" key

### 4. Configure Environment Variables

Create a `.env.local` file in the root directory:

\`\`\`bash
cp .env.example .env.local
\`\`\`

Edit `.env.local` and add your Supabase credentials:

\`\`\`env
NEXT_PUBLIC_SUPABASE_URL=your_project_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
\`\`\`

### 5. Run the Development Server

\`\`\`bash
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) to see the app!

## 📦 Deployment to Vercel

### 1. Push to GitHub

\`\`\`bash
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/5km-run-registration.git
git push -u origin main
\`\`\`

### 2. Deploy to Vercel

1. Go to [https://vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "Add New..." → "Project"
4. Import your GitHub repository
5. Add environment variables:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
6. Click "Deploy"

Your app will be live at `https://your-app-name.vercel.app`!

## 📱 Installing as PWA

### On Mobile (Android/iOS)

1. Open the website in your browser
2. Tap the browser menu (three dots)
3. Select "Add to Home Screen" or "Install App"
4. The app icon will appear on your home screen!

### On Desktop (Chrome/Edge)

1. Open the website
2. Look for the install icon in the address bar
3. Click "Install"
4. The app will open in its own window!

## 🔑 Admin Access

- **URL**: `https://your-app-url.vercel.app/admin`
- **Email**: The email you created in Supabase
- **Password**: The password you set

## 📊 Admin Features

- View all registrations in real-time
- See registration statistics
- Add/edit remarks for each participant
- Search and filter registrations
- Export data (coming soon!)

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **PWA**: next-pwa
- **Hosting**: Vercel

## 📁 Project Structure

\`\`\`
5km-run-registration/
├── app/
│   ├── admin/
│   │   └── page.js          # Admin dashboard
│   ├── layout.js            # Root layout with PWA config
│   ├── page.js              # Registration form
│   └── globals.css          # Global styles
├── lib/
│   └── supabase.js          # Supabase client
├── public/
│   ├── logo.png             # PBBFA logo
│   ├── poster.jpeg          # Event poster
│   └── manifest.json        # PWA manifest
└── package.json
\`\`\`

## 🎨 Customization

### Change Colors

Edit `tailwind.config.js`:

\`\`\`javascript
theme: {
  extend: {
    colors: {
      primary: {
        500: '#your-color',
      }
    }
  }
}
\`\`\`

### Update Event Details

Edit `app/page.js` to change:
- Event date, time, and location
- Registration fields
- T-shirt sizes

## 🐛 Troubleshooting

### Registration Not Working

- Check if your Supabase URL and keys are correct in `.env.local`
- Verify the `registrations` table exists in Supabase
- Check Row Level Security policies are set up correctly

### Admin Login Failed

- Make sure you created an admin user in Supabase Auth
- Verify the email and password are correct
- Check browser console for error messages

### PWA Not Installing

- Make sure you're using HTTPS (Vercel provides this automatically)
- Check if `manifest.json` is accessible at `/manifest.json`
- Clear browser cache and try again

## 📞 Support

For issues or questions:
- Check the [Issues](https://github.com/YOUR_USERNAME/5km-run-registration/issues) page
- Create a new issue with details about your problem

## 📄 License

MIT License - feel free to use this for your own events!

## 🙏 Credits

Created for **Philippine Bodybuilders & Fitness Association in Kuwait**

Event: **5KM Run for a Cause**  
Date: **December 5, 2025**  
Location: **Green Island, Sharq Kuwait City**

---

**Happy Running! 🏃‍♀️🏃‍♂️**
