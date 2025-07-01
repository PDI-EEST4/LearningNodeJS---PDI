import express from 'express';

const app = express();

app.get('/', (req, res) => {
  return res.json({
    message: 'Hola 7mo!'
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Mi aplicacion esta funcionando en http://localhost:${port}`);
})