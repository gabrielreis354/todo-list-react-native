/* eslint-disable prettier/prettier */
import SQLite from 'react-native-sqlite-storage';

SQLite.DEBUG(true);
SQLite.enablePromise(true);

//Variáveis de conexão/criação do banco de dados
const database_name = 'Tasks_DB'; //titulo do banco de dados
const database_version = '1.0'; //Versão do banco de dados
const database_displayname = 'SQLite React Offline Database Tasks'; //titulo de exibição do banco de dados
const database_size = 200000; //tamanho do banco de dados

//TODO - FUTURAMENTE IMPLEMENTAR API OU FAZER JOIN EM BAIXO CRIAR CADA FUNCAO PARA CADA TELA OU CATEGORIA

export default class TaskDatabase {
  /**-Funções Primárias-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------**/
  Conectar() {
    let db;
    return new Promise(resolve => {
      console.log('Checando a integridade do plugin ...');
      SQLite.echoTest()
        .then(() => {
          console.log('Integridade Ok ...');
          console.log('Abrindo Banco de Dados ...');
          SQLite.openDatabase(
            database_name,
            database_version,
            database_displayname,
            database_size,
          )
            .then(DB => {
              db = DB;
              console.log('Banco de dados Aberto');
              db.executeSql('SELECT 1 FROM tb01_usuario LIMIT 1')
                .then(() => {
                  console.log(
                    'O banco de dados está pronto ... Executando Consulta SQL ...',
                  );
                })
                .catch(error => {
                  console.log('Erro Recebido: ', error);
                  console.log(
                    'O Banco de dados não está pronto ... Criando Dados',
                  );
                  db.transaction(tx => {
                    tx.executeSql(
                      'CREATE TABLE IF NOT EXISTS tb01_usuario (tb01_id INTEGER PRIMARY KEY AUTOINCREMENT, tb01_email varchar(30), tb01_senha varchar(30) )',
                    );
                    tx.executeSql(
                      'CREATE TABLE IF NOT EXISTS tb02_locais (tb02_id INTEGER PRIMARY KEY AUTOINCREMENT, tb02_titulo varchar(30),  tb02_local varchar(30),  tb02_descricao varchar(30), tb02_imagem TEXT, tb02_data date)',
                    );
                  })
                    .then(() => {
                      console.log('Tabela criada com Sucesso');
                    })
                    .catch(error => {
                      console.log(error);
                    });
                });
              resolve(db);
            })
            .catch(error => {
              console.log(error);
            });
        })
        .catch(error => {
          console.log('echoTest Falhou - plugin não funcional');
        });
    });
  }

  Desconectar(db) {
    if (db) {
      console.log('Fechando Banco de Dados');
      db.close()
        .then(status => {
          console.log('Banco de dados Desconectado!!');
        })
        .catch(error => {
          this.errorCB(error);
        });
    } else {
      console.log('A conexão com o banco não está aberta');
    }
  }
  /**-Funções Primárias-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------**/

  /**-Login-Cadastro------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------**/

  CadastroUsuario(user) {
    return new Promise(resolve => {
      this.Conectar()
        .then(db => {
          db.transaction(tx => {
            //Query SQL para atualizar um dado no banco
            tx.executeSql(
              'INSERT INTO tb01_usuario (tb01_email, tb01_senha) VALUES ( ?, ? )',
              [user.email, user.senha],
            ).then(([tx, results]) => {
              resolve(results);
            });
          })
            .then(result => {
              this.Desconectar(db);
            })
            .catch(err => {
              console.log(err);
            });
        })
        .catch(err => {
          console.log(err);
        });
    });
  }

  LoginUsuario(email, senha) {
    return new Promise(resolve => {
      this.Conectar()
        .then(db => {
          db.transaction(tx => {
            //Query SQL para atualizar um dado no banco
            tx.executeSql(
              'SELECT * FROM tb01_usuario WHERE tb01_email = ? AND tb01_senha = ?',
              [email, senha],
            ).then(([tx, results]) => {
              resolve(results);
            });
          })
            .then(result => {
              this.Desconectar(db);
            })
            .catch(err => {
              console.log(err);
            });
        })
        .catch(err => {
          console.log(err);
        });
    });
  }
  /**-Login-Cadastro-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------**/

  /**-CRUD Suítes-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------**/
  //Create
  Cadastrar(task) {
    return new Promise(resolve => {
      this.Conectar()
        .then(db => {
          db.transaction(tx => {
            //Query SQL para inserir um novo produto
            tx.executeSql(
              'INSERT INTO tb02_locais (tb02_titulo, tb02_local, tb02_descricao, tb02_imagem, tb02_data ) VALUES ( ?, ?, ?, ?, ? )',
              [
                task.titulo,
                task.local,
                task.descricao,
                task.imagem,
                task.data,
              ],
            ).then(([tx, results]) => {
              resolve(results);
            });
            console.log(
              task.titulo,
              task.local,
              task.descricao,
              task.imagem,
              task.data
            );
          })
            .then(result => {
              this.Desconectar(db);
            })
            .catch(err => {
              console.log(err);
            });
        })
        .catch(err => {
          console.log(err);
        });
    });
  }

  //Read
  Listar() {
    return new Promise(resolve => {
      const listaDeTarefas = [];
      this.Conectar()
        .then(db => {
          db.transaction(tx => {
            //Query SQL para listar os dados da tabela
            tx.executeSql('SELECT * FROM tb02_locais', []).then(
              ([tx, results]) => {
                console.log('Consulta completa');
                var len = results.rows.length;
                for (let i = 0; i < len; i++) {
                  let row = results.rows.item(i);
                  const { //mesmo titulo da sua coluna na tabela
                    tb02_id,
                    tb02_titulo,
                    tb02_local,
                    tb02_descricao,
                    tb02_imagem,
                    tb02_data,
                  } = row;
                  listaDeTarefas.push({
                    tb02_id,
                    tb02_titulo,
                    tb02_local,
                    tb02_descricao,
                    tb02_imagem,
                    tb02_data,
                  });
                }
                console.log(listaDeTarefas);
                resolve(listaDeTarefas);
              },
            );
          })
            .then(result => {
              this.Desconectar(db);
            })
            .catch(err => {
              console.log(err);
            });
        })
        .catch(err => {
          console.log(err);
        });
    });
  }

  //Update
  Atualizar(task) {
    return new Promise(resolve => {
      this.Conectar()
        .then(db => {
          db.transaction(tx => {
            //Query SQL para atualizar um dado no banco
            tx.executeSql('UPDATE tb02_locais SET tb02_titulo = ?, tb02_local = ?, tb02_descricao = ?, tb02_iamgem = ?, tb02_data = ?  WHERE tb02_id = ?', [
              task.titulo,
              task.local,
              task.descricao,
              task.imagem,
              task.data,
              task.id
            ]).then(([tx, results]) => {
              resolve(results);
            });
          })
            .then(result => {
              this.Desconectar(db);
            })
            .catch(err => {
              console.log(err);
            });
        })
        .catch(err => {
          console.log(err);
        });
    });
  }

  //Delete
  Deletar(id) {
    return new Promise(resolve => {
      this.Conectar()
        .then(db => {
          db.transaction(tx => {
            //Query SQL para deletar um item da base de dados
            tx.executeSql('DELETE FROM tb01_tasks WHERE tb02_id = ?', [id]).then(
              ([tx, results]) => {
                console.log(results);
                resolve(results);
              },
            );
          })
            .then(result => {
              this.Desconectar(db);
            })
            .catch(err => {
              console.log(err);
            });
        })
        .catch(err => {
          console.log(err);
        });
    });
  }
  /**-CRUD Suítes-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------**/
}
