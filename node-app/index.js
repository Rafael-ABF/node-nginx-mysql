const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 3000;

const connection = mysql.createConnection({
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'desafioDB'
});

const createTable = `CREATE TABLE IF NOT EXISTS people (ID INT NOT NULL AUTO_INCREMENT, NAME VARCHAR(255), PRIMARY KEY(ID))`;
connection.query(createTable);

app.get('/', (req, res) => {
  const nome = req.query.name ? req.query.name : 'Full Cycle';
  connection.query("INSERT INTO people(NAME) VALUES(?)", [nome]);
  
  connection.query('SELECT NAME FROM people', (err, results) => {
    if (err) throw err;

    let namesList = '<ol>';
    results.forEach(person => {
      namesList += `<li>${person.NAME}</li>`;
    });
    namesList += '</ol>';
    finalContent = `
      <h1>Full Cycle Rocks!</h1>
      ${namesList}
      <hr>
      <ul>
        <li>Utilize http://localhost:8080/?name=ALGUM_VALOR para incluir ALGUM_VALOR na lista</li>
        <li>
          Toda vez que a página carrega sem ?name=ALGUM_VALOR ou com 
          valor em branco (http://localhost:8080/?name=) é incluída a palavra 'Full Cycle'
        </li>
        <li>
          Os dados não se perdem ao remover os contêineres e subir a aplicação 
          novamente!
        </li>
        <li>
          Se quiser limpar a lista (voltar a ter somente um item) utilize <b>docker-compose down -v</b> para apagar o volume.
        </li>
      </ul>
    `;
    res.send(finalContent);
  });
});

app.listen(port, () => {
  console.log(`Rodando na porta ${port}`);
});