// index.js
import express from 'express';
import { supabase } from './db.js'; // Importa la instancia de Supabase
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Rutas para la tabla Restaurante
app.get('/api/restaurante', async (req, res) => {
    const { data, error } = await supabase
        .from('Restaurante')
        .select('*');

    if (error) {
        return res.status(500).json({ error: error.message });
    }
    res.json(data);
});

app.get('/api/restaurante/:id', async (req, res) => {
    const { id } = req.params;
    const { data, error } = await supabase
        .from('Restaurante')
        .select('*')
        .eq('id_rest', id)
        .single();

    if (error) {
        return res.status(404).json({ error: 'Restaurante no encontrado' });
    }
    res.json(data);
});

app.post('/api/restaurante', async (req, res) => {
    const { nombre, ciudad, direccion, fecha_apertura } = req.body;
    const { data, error } = await supabase
        .from('Restaurante')
        .insert([{ nombre, ciudad, direccion, fecha_apertura }])
        .select()
        .single();

    if (error) {
        return res.status(500).json({ error: error.message });
    }
    res.status(201).json(data);
});

app.delete('/api/restaurante/:id', async (req, res) => {
    const { id } = req.params;
    const { error } = await supabase
        .from('Restaurante')
        .delete()
        .eq('id_rest', id);

    if (error) {
        return res.status(500).json({ error: error.message });
    }
    res.status(204).send(); // 204 No Content para indicar éxito sin cuerpo
});

// Rutas para la tabla Empleado
app.get('/api/empleado', async (req, res) => {
    const { data, error } = await supabase
        .from('Empleado')
        .select('*');

    if (error) {
        return res.status(500).json({ error: error.message });
    }
    res.json(data);
});

app.get('/api/empleado/:id', async (req, res) => {
    const { id } = req.params;
    const { data, error } = await supabase
        .from('Empleado')
        .select('*')
        .eq('id_empleado', id)
        .single();

    if (error) {
        return res.status(404).json({ error: 'Empleado no encontrado' });
    }
    res.json(data);
});

app.post('/api/empleado', async (req, res) => {
    const { nombre, rol, id_rest } = req.body;
    const { data, error } = await supabase
        .from('Empleado')
        .insert([{ nombre, rol, id_rest }])
        .select()
        .single();

    if (error) {
        return res.status(500).json({ error: error.message });
    }
    res.status(201).json(data);
});

app.delete('/api/empleado/:id', async (req, res) => {
    const { id } = req.params;
    const { error } = await supabase
        .from('Empleado')
        .delete()
        .eq('id_empleado', id);

    if (error) {
        return res.status(500).json({ error: error.message });
    }
    res.status(204).send();
});

// Rutas para la tabla Producto
app.get('/api/producto', async (req, res) => {
    const { data, error } = await supabase
        .from('Producto')
        .select('*');

    if (error) {
        return res.status(500).json({ error: error.message });
    }
    res.json(data);
});

app.get('/api/producto/:id', async (req, res) => {
    const { id } = req.params;
    const { data, error } = await supabase
        .from('Producto')
        .select('*')
        .eq('id_prod', id)
        .single();

    if (error) {
        return res.status(404).json({ error: 'Producto no encontrado' });
    }
    res.json(data);
});

app.post('/api/producto', async (req, res) => {
    const { nombre, precio } = req.body;
    const { data, error } = await supabase
        .from('Producto')
        .insert([{ nombre, precio }])
        .select()
        .single();

    if (error) {
        return res.status(500).json({ error: error.message });
    }
    res.status(201).json(data);
});

app.delete('/api/producto/:id', async (req, res) => {
    const { id } = req.params;
    const { error } = await supabase
        .from('Producto')
        .delete()
        .eq('id_prod', id);

    if (error) {
        return res.status(500).json({ error: error.message });
    }
    res.status(204).send();
});

// Rutas para la tabla Pedido
app.get('/api/pedido', async (req, res) => {
    const { data, error } = await supabase
        .from('Pedido')
        .select('*');

    if (error) {
        return res.status(500).json({ error: error.message });
    }
    res.json(data);
});

app.get('/api/pedido/:id', async (req, res) => {
    const { id } = req.params;
    const { data, error } = await supabase
        .from('Pedido')
        .select('*')
        .eq('id_pedido', id)
        .single();

    if (error) {
        return res.status(404).json({ error: 'Pedido no encontrado' });
    }
    res.json(data);
});

app.post('/api/pedido', async (req, res) => {
    const { fecha, id_rest, total } = req.body;
    const { data, error } = await supabase
        .from('Pedido')
        .insert([{ fecha, id_rest, total }])
        .select()
        .single();

    if (error) {
        return res.status(500).json({ error: error.message });
    }
    res.status(201).json(data);
});

app.delete('/api/pedido/:id', async (req, res) => {
    const { id } = req.params;
    const { error } = await supabase
        .from('Pedido')
        .delete()
        .eq('id_pedido', id);

    if (error) {
        return res.status(500).json({ error: error.message });
    }
    res.status(204).send();
});

// Rutas para la tabla DetallePedido
app.get('/api/detallepedido', async (req, res) => {
    const { data, error } = await supabase
        .from('DetallePedido')
        .select('*');

    if (error) {
        return res.status(500).json({ error: error.message });
    }
    res.json(data);
});

app.get('/api/detallepedido/:id', async (req, res) => {
    const { id } = req.params;
    const { data, error } = await supabase
        .from('DetallePedido')
        .select('*')
        .eq('id_detalle', id)
        .single();

    if (error) {
        return res.status(404).json({ error: 'Detalle de Pedido no encontrado' });
    }
    res.json(data);
});

app.post('/api/detallepedido', async (req, res) => {
    const { id_pedido, id_prod, cantidad, subtotal } = req.body;
    const { data, error } = await supabase
        .from('DetallePedido')
        .insert([{ id_pedido, id_prod, cantidad, subtotal }])
        .select()
        .single();

    if (error) {
        return res.status(500).json({ error: error.message });
    }
    res.status(201).json(data);
});

app.delete('/api/detallepedido/:id', async (req, res) => {
    const { id } = req.params;
    const { error } = await supabase
        .from('DetallePedido')
        .delete()
        .eq('id_detalle', id);

    if (error) {
        return res.status(500).json({ error: error.message });
    }
    res.status(204).send();
});

app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});