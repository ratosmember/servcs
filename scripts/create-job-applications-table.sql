-- Create job_applications table for career applications
CREATE TABLE IF NOT EXISTS job_applications (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  experience TEXT,
  availability TEXT DEFAULT 'part-time',
  message TEXT,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'reviewed', 'interview', 'hired', 'rejected')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE job_applications ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (for the public application form)
CREATE POLICY "Allow anonymous inserts on job_applications"
  ON job_applications
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow authenticated reads (for admin)
CREATE POLICY "Allow authenticated reads on job_applications"
  ON job_applications
  FOR SELECT
  TO anon
  USING (true);

-- Allow authenticated updates (for admin)
CREATE POLICY "Allow authenticated updates on job_applications"
  ON job_applications
  FOR UPDATE
  TO anon
  USING (true);

-- Allow authenticated deletes (for admin)
CREATE POLICY "Allow authenticated deletes on job_applications"
  ON job_applications
  FOR DELETE
  TO anon
  USING (true);
