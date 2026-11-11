import Database from 'better-sqlite3';
 
// O arquivo escola.db será criado na raiz do projeto,
// caso ainda não exista.
const db = new Database('escola.db');
 
db.exec(`
  CREATE TABLE IF NOT EXISTS alunos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    email TEXT UNIQUE
  );
`);
 
console.log('Banco de dados conectado e tabela verificada!');
export default db;



789456123321654987123456789987654321147258369963852741147852369852147852369852147852369852147852369852147412582369632585214741258978967896541236589247789654123698521