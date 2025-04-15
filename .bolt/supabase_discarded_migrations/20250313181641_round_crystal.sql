/*
  # Create contact messages table

  1. New Tables
    - `contact_messages`
      - `id` (uuid, primary key)
      - `name` (text, required)
      - `email` (text, required)
      - `message` (text, required)
      - `created_at` (timestamp with timezone)
      - `user_id` (uuid, references auth.users)

  2. Security
    - Enable RLS on `contact_messages` table
    - Add policies for:
      - Users can insert their own messages
      - Users can view their own messages
      - Admins can view all messages
*/

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now(),
  user_id uuid REFERENCES auth.users(id)
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Allow users to insert their own messages
CREATE POLICY "Users can insert own messages"
  ON contact_messages
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- Allow users to view their own messages
CREATE POLICY "Users can view own messages"
  ON contact_messages
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

-- Allow admins to view all messages
CREATE POLICY "Admins can view all messages"
  ON contact_messages
  FOR ALL
  TO admin
  USING (true);