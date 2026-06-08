export type CmEvent = {
  id: string
  created_at: string
  updated_at: string
  title: string
  event_date: string | null
  start_time: string | null
  end_time: string | null
  venue: string | null
  address: string | null
  rsvp_url: string | null
  dress_code: string | null
  parking_info: string | null
  description: string | null
  featured_guest: string | null
  is_next_event: boolean
  published: boolean
}

export type CmPhoto = {
  id: string
  created_at: string
  title: string | null
  description: string | null
  image_url: string
  event_date: string | null
  event_id: string | null
  section: string | null
  featured: boolean
  published: boolean
  sort_order: number
}

export type CmTestimonial = {
  id: string
  created_at: string
  name: string
  title: string | null
  company: string | null
  quote: string
  headshot_url: string | null
  featured: boolean
  published: boolean
  sort_order: number
}

export type CmRecap = {
  id: string
  created_at: string
  title: string
  event_date: string | null
  venue: string | null
  recap: string | null
  attendee_count: number | null
  featured_photo_url: string | null
  tags: string[] | null
  published: boolean
  sort_order: number
}

export type CmSpeaker = {
  id: string
  created_at: string
  name: string
  title: string | null
  company: string | null
  bio: string | null
  headshot_url: string | null
  linkedin_url: string | null
  twitter_url: string | null
  website_url: string | null
  talk_title: string | null
  talk_description: string | null
  event_id: string | null
  featured: boolean
  published: boolean
  sort_order: number
}

export type CmSponsor = {
  id: string
  created_at: string
  name: string
  logo_url: string | null
  website_url: string | null
  tier: string | null
  description: string | null
  published: boolean
  sort_order: number
}

export type CmSiteSetting = {
  id: string
  key: string
  value: string | null
  updated_at: string
}
