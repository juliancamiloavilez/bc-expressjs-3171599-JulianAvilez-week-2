import app from './app';

const PORT = 3000;

const server = app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});

const shutdown = () => {
  console.log('🛑 Cerrando servidor...');

  server.close(() => {
    console.log('✅ Servidor cerrado correctamente');

    process.exit(0);
  });
};

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);