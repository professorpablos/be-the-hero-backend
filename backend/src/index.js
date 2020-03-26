const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/**
 * Métodos HTTP
 * GET: buscar uma informação no back-end
 * POST: criar nova informação no back-end
 * PUT: alterar uma informação no back-end
 * DELETE: apagar uma informação no back-end
 */

 /**
  * Tipo de Parâmetros
  * Query Params: parâmetros nomeados enviados na rota após o "?", para filtros, paginação
  * Route Params: parâemtros utilizados para identificar recursos
  * Request Body: corpo da requisição utilizado para criar ou alterar recursos
  */

  /** 
   * Comunicação com BD
   * 1. Driver: SELECT * FROM USERS
   * 2. QueryBuilder: table('users').select(*).where() - KNEX
   * 3. 
   */


app.listen(3333);