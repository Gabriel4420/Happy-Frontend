import express from 'express';
import path from 'path';
import cors from 'cors';
import 'express-async-errors';
import handler from './errors/handler';
import './database/conn';

import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads',express.static(path.join(__dirname, '..','uploads')));
app.use(handler)
app.listen(3333)

console.log('listen on port 3333');
// Rotas 
// Recurso ==> Users


// Métodos HTTP = GET, POST, PUT & DELETE

// GET => Buscar informação (list , item)
// POST ==> Criando uma informação 
// PUT ==> Editando uma informação -- Geralmente possui um id
// DELETE ==> Deletar uma informação -- Geralmente possui um id


// Parameters 

/* 
 
 Query:: http://localhost:3333/users?search=diego&page=2
 Route:: http://localhost:3333/users/1 --(identificar um recurso)
 Body :: Serve para enviar dados que não caibam nos paramêtros
 acima, que são especificos e geralmente oriundos de formulario
 
 Ex: se criarmos um usuario do zero, no body dessa requisição, é 
 carregado o nome, email, facebook, twitter e etc... Todos os dados 
 necessarios para a criação desse usuario.

 Em resumo --> body (<--) informações complexas  
 legenda: (<--) recebe;
 app.post('/users/:id', (req,res) => {
  console.log(req.query);
  console.log(req.params);
  console.log(req.body);
  return res.json({message: 'hello world'})
})

app.get('/users', (req,res) => {
  return res.json({message: 'hello world'})
})
 */



