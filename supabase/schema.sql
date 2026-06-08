-- ============================================================
-- Crypto Mondays LV — Supabase Schema
-- Run this in Supabase SQL Editor to set up all tables
-- ============================================================

-- ── cm_events ──────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS cm_events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  title text NOT NULL,
  event_date date,
  start_time time,
  end_time time,
  venue text,
  address text,
  rsvp_url text,
  dress_code text,
  parking_info text,
  description text,
  featured_guest text,
  is_next_event boolean DEFAULT false,
  published boolean DEFAULT false,
  sort_order integer DEFAULT 0
);

-- ── cm_photos ──────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS cm_photos (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  title text,
  description text,
  image_url text NOT NULL,
  event_date date,
  event_id uuid REFERENCES cm_events(id) ON DELETE SET NULL,
  section text, -- hero, community, recap, gallery
  featured boolean DEFAULT false,
  published boolean DEFAULT false,
  sort_order integer DEFAULT 0
);

-- ── cm_testimonials ────────────────────────────────────────
CREATE TABLE IF NOT EXISTS cm_testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  name text NOT NULL,
  title text,
  company text,
  quote text NOT NULL,
  headshot_url text,
  featured boolean DEFAULT false,
  published boolean DEFAULT false,
  sort_order integer DEFAULT 0
);

-- ── cm_recaps ──────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS cm_recaps (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  title text NOT NULL,
  event_date date,
  venue text,
  recap text,
  attendee_count integer,
  featured_photo_url text,
  tags text[],
  published boolean DEFAULT false,
  sort_order integer DEFAULT 0
);

-- ── cm_speakers ────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS cm_speakers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  name text NOT NULL,
  title text,
  company text,
  bio text,
  headshot_url text,
  linkedin_url text,
  twitter_url text,
  website_url text,
  talk_title text,
  talk_description text,
  event_id uuid REFERENCES cm_events(id) ON DELETE SET NULL,
  featured boolean DEFAULT false,
  published boolean DEFAULT false,
  sort_order integer DEFAULT 0
);

-- ── cm_sponsors ────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS cm_sponsors (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  name text NOT NULL,
  logo_url text,
  website_url text,
  tier text, -- title, gold, silver, community
  description text,
  published boolean DEFAULT false,
  sort_order integer DEFAULT 0
);

-- ── cm_site_settings ───────────────────────────────────────
CREATE TABLE IF NOT EXISTS cm_site_settings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  key text UNIQUE NOT NULL,
  value text,
  updated_at timestamptz DEFAULT now()
);

-- ── Seed default site settings ────────────────────────────
INSERT INTO cm_site_settings (key, value) VALUES
  ('next_event_date', NULL),
  ('rsvp_url', 'https://luma.com/CryptoMondaysVegas'),
  ('event_time', '6:00 PM – 9:00 PM'),
  ('venue', 'Legacy Club Rooftop — Circa Resort & Casino'),
  ('dress_code', 'Smart Casual'),
  ('welcome_message', 'The premier crypto, AI, and Web3 networking community in Las Vegas.')
ON CONFLICT (key) DO NOTHING;

-- ── Row Level Security ─────────────────────────────────────

ALTER TABLE cm_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE cm_photos ENABLE ROW LEVEL SECURITY;
ALTER TABLE cm_testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE cm_recaps ENABLE ROW LEVEL SECURITY;
ALTER TABLE cm_speakers ENABLE ROW LEVEL SECURITY;
ALTER TABLE cm_sponsors ENABLE ROW LEVEL SECURITY;
ALTER TABLE cm_site_settings ENABLE ROW LEVEL SECURITY;

-- Public SELECT for published rows
CREATE POLICY "Public can view published events" ON cm_events
  FOR SELECT USING (published = true);

CREATE POLICY "Public can view published photos" ON cm_photos
  FOR SELECT USING (published = true);

CREATE POLICY "Public can view published testimonials" ON cm_testimonials
  FOR SELECT USING (published = true);

CREATE POLICY "Public can view published recaps" ON cm_recaps
  FOR SELECT USING (published = true);

CREATE POLICY "Public can view published speakers" ON cm_speakers
  FOR SELECT USING (published = true);

CREATE POLICY "Public can view published sponsors" ON cm_sponsors
  FOR SELECT USING (published = true);

CREATE POLICY "Public can view site settings" ON cm_site_settings
  FOR SELECT USING (true);

-- Authenticated full access
CREATE POLICY "Authenticated full access to events" ON cm_events
  FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Authenticated full access to photos" ON cm_photos
  FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Authenticated full access to testimonials" ON cm_testimonials
  FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Authenticated full access to recaps" ON cm_recaps
  FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Authenticated full access to speakers" ON cm_speakers
  FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Authenticated full access to sponsors" ON cm_sponsors
  FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Authenticated full access to settings" ON cm_site_settings
  FOR ALL USING (auth.role() = 'authenticated');

-- ── Storage Setup (run separately or via Supabase dashboard) ──
-- 1. Create a storage bucket named "cm-photos" with public access
-- 2. Photos can be uploaded via dashboard or Supabase Storage API
-- 3. Public URL format: {SUPABASE_URL}/storage/v1/object/public/cm-photos/{filename}
