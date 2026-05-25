import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://rgkrumnoalfrirruirgz.supabase.co'

const supabaseKey = 'sb_publishable_2RfEAt268LBv85ntcGMXMQ_g_k4I01b'

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
)