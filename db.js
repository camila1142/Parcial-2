// db.js
import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv'; // Si estás usando variables de entorno

dotenv.config(); // Carga las variables de entorno desde .env si existe

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);