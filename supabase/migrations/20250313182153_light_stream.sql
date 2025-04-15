/*
  # Create contact submissions table

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key)
      - `name` (text, required)
      - `email` (text, required)
      - `message` (text, required)
      - `created_at` (timestamp with timezone)
      - `status` (text, default: 'new')

  2. Security
    - Enable RLS on `contact_submissions` table
    - Add policy for inserting new submissions (public access)
    - Add policy for reading submissions (authenticated users only)
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now(),
  status text DEFAULT 'new'
);

-- Enable Row Level Security
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Allow anyone to submit a contact form
CREATE POLICY "Allow public to insert contact submissions"
  ON contact_submissions
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Only authenticated users can view submissions
CREATE POLICY "Allow authenticated users to view submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);