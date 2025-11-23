-- ================================================
-- 5KM RUN FOR A CAUSE - DATABASE SETUP
-- ================================================
-- Run this script in your Supabase SQL Editor
-- Go to: Supabase Dashboard > SQL Editor > New Query
-- Paste this entire script and click "Run"

-- ================================================
-- 1. CREATE REGISTRATIONS TABLE
-- ================================================
CREATE TABLE IF NOT EXISTS registrations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  tel_no TEXT NOT NULL,
  email TEXT NOT NULL,
  organization TEXT,
  tshirt_size TEXT NOT NULL,
  remarks TEXT,
  registered_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ================================================
-- 2. CREATE UPDATED_AT TRIGGER
-- ================================================
-- This automatically updates the updated_at column
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_registrations_updated_at 
  BEFORE UPDATE ON registrations 
  FOR EACH ROW 
  EXECUTE FUNCTION update_updated_at_column();

-- ================================================
-- 3. ENABLE ROW LEVEL SECURITY
-- ================================================
ALTER TABLE registrations ENABLE ROW LEVEL SECURITY;

-- ================================================
-- 4. CREATE SECURITY POLICIES
-- ================================================

-- Allow anyone to insert (register)
DROP POLICY IF EXISTS "Allow public registration" ON registrations;
CREATE POLICY "Allow public registration" ON registrations
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Allow authenticated users to read all registrations (admin)
DROP POLICY IF EXISTS "Allow authenticated read" ON registrations;
CREATE POLICY "Allow authenticated read" ON registrations
  FOR SELECT
  TO authenticated
  USING (true);

-- Allow authenticated users to update registrations (add remarks)
DROP POLICY IF EXISTS "Allow authenticated update" ON registrations;
CREATE POLICY "Allow authenticated update" ON registrations
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- ================================================
-- 5. CREATE INDEXES FOR BETTER PERFORMANCE
-- ================================================
CREATE INDEX IF NOT EXISTS idx_registrations_email ON registrations(email);
CREATE INDEX IF NOT EXISTS idx_registrations_registered_at ON registrations(registered_at DESC);

-- ================================================
-- 6. SAMPLE DATA (OPTIONAL - for testing)
-- ================================================
-- Uncomment the lines below to insert sample data

-- INSERT INTO registrations (first_name, last_name, tel_no, email, organization, tshirt_size, remarks)
-- VALUES 
--   ('Juan', 'Dela Cruz', '+965 1234 5678', 'juan@example.com', 'PBBFA Kuwait', 'M', 'Confirmed attendance'),
--   ('Maria', 'Santos', '+965 9876 5432', 'maria@example.com', 'Filipino Community', 'S', NULL),
--   ('Pedro', 'Reyes', '+965 5555 1234', 'pedro@example.com', '', 'L', 'Requested early start');

-- ================================================
-- SETUP COMPLETE!
-- ================================================
-- Next steps:
-- 1. Go to Authentication > Users in Supabase Dashboard
-- 2. Click "Add user" > "Create new user"
-- 3. Create an admin account with email and password
-- 4. Use this email/password to login to /admin
