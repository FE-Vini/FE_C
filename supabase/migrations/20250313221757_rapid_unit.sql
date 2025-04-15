/*
  # Create booking submissions table

  1. New Tables
    - `booking_submissions`
      - `id` (uuid, primary key)
      - `name` (text, required)
      - `company` (text, required)
      - `role` (text, required)
      - `employee_count` (integer, required)
      - `location` (text, required)
      - `waste_types` (text[], required)
      - `waste_volume` (text, required)
      - `email` (text, required)
      - `phone` (text, required)
      - `created_at` (timestamp with timezone)
      - `status` (text, default: 'new')

  2. Security
    - Enable RLS on `booking_submissions` table
    - Add policy for inserting new submissions (public access)
    - Add policy for reading submissions (authenticated users only)
*/

CREATE TABLE IF NOT EXISTS booking_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  company text NOT NULL,
  role text NOT NULL,
  employee_count integer NOT NULL,
  location text NOT NULL,
  waste_types text[] NOT NULL,
  waste_volume text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  created_at timestamptz DEFAULT now(),
  status text DEFAULT 'new'
);

-- Enable Row Level Security
ALTER TABLE booking_submissions ENABLE ROW LEVEL SECURITY;

-- Allow anyone to submit a booking form
CREATE POLICY "Allow public to insert booking submissions"
  ON booking_submissions
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Only authenticated users can view submissions
CREATE POLICY "Allow authenticated users to view submissions"
  ON booking_submissions
  FOR SELECT
  TO authenticated
  USING (true);