import { supabase } from './db.js';

async function testConnection() {
  console.log('Probando conexión a Supabase...');
  
  try {
    // Prueba con la tabla Restaurante
    const { data, error } = await supabase
      .from('Restaurante')
      .select('*')
      .limit(1);

    if (error) {
      console.error('Error de Supabase:', error);
      return;
    }

    console.log('Conexión exitosa! Datos de muestra:', data);
  } catch (err) {
    console.error('Error inesperado:', err);
  }
}

testConnection();
