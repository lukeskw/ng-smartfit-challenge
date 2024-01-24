export interface UnitsResponse {
  current_country_id: number
  locations: Array<Location>
  wp_total: number
  total: number
  success: boolean
}

export interface Location {
  id: number
  title: string
  content?: string
  opened?: boolean
  mask?: string
  towel?: string
  fountain?: string
  locker_room?: string
  schedules?: Array<{
    weekdays: string
    hour: string
  }>
  street?: string
  region?: string
  city_name?: string
  state_name?: string
  uf?: string
}
