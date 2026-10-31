
import 'dotenv/config';
import 'express-async-errors';

import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Archivos estáticos
app.use('/uploads', express.static('uploads'));

// Ruta de comprobación de la API
app.get('/api/v1/health', (req, res) => {
    res.status(200).json({
        status: 'OK',
        message: 'API de Gestor de Gastos activa'
    });
});

// Configuración del servidor
const PORT = process.env.PORT || 3000;

if (process.env.NODE_ENV !== 'test') {
    app.listen(PORT, () => {
        console.log(`Servidor escuchando en el puerto ${PORT}`);
    });
}

export default app;