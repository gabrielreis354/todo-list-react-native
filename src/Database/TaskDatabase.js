/* eslint-disable prettier/prettier */
import SQLite from 'react-native-sqlite-storage';

SQLite.DEBUG(true);
SQLite.enablePromise(true);

//Variáveis de conexão/criação do banco de dados
const database_name = 'Tasks_DB'; //titulo do banco de dados
const database_version = '6.0'; //Versão do banco de dados
const database_displayname = 'SQLite React Offline Database Tasks'; //titulo de exibição do banco de dados
const database_size = 200000; //tamanho do banco de dados

//TODO - FUTURAMENTE IMPLEMENTAR API OU FAZER JOIN EM BAIXO CRIAR CADA FUNCAO PARA CADA TELA OU CATEGORIA
var dataURi = '';

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
                      'CREATE TABLE IF NOT EXISTS tb01_usuario (tb01_nome vachar(255), tb01_email varchar(255) PRIMARY KEY, tb01_senha varchar(255) )',
                    );
                    tx.executeSql(
                      'CREATE TABLE IF NOT EXISTS tb02_locais (tb02_id INTEGER PRIMARY KEY AUTOINCREMENT, tb02_titulo varchar(255), tb02_local varchar(255), tb02_categoria varchar(255), tb02_descricao varchar(255), tb02_imagem longblob, tb02_data varchar(255))',
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
              'INSERT INTO tb01_usuario (tb01_nome, tb01_email, tb01_senha) VALUES ( ?, ?, ? )',
              [user.nome, user.email, user.senha],
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
      const listaDeReparos = [];
      this.Conectar()
        .then(db => {
          db.transaction(tx => {
            //Query SQL para listar os dados da tabela
            tx.executeSql('SELECT * FROM tb01_usuario WHERE tb01_email = ? AND tb01_senha = ?',
            [email, senha]).then(
              ([tx, results]) => {
                console.log('Consulta completa');
                var len = results.rows.length;
                for (let i = 0; i < len; i++) {
                  let row = results.rows.item(i);
                  const { //mesmo titulo da sua coluna na tabela
                    tb01_nome,
                    tb01_email,
                    tb01_senha,
                  } = row;
                  listaDeReparos.push({
                    tb01_nome,
                    tb01_email,
                    tb01_senha,
                  });
                }
                console.log(listaDeReparos);
                resolve(listaDeReparos);
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

  ListarUsuario() {
    return new Promise(resolve => {
      const listaDeReparos = [];
      this.Conectar()
        .then(db => {
          db.transaction(tx => {
            //Query SQL para listar os dados da tabela
            tx.executeSql('SELECT * FROM tb01_usuario',
            []).then(
              ([tx, results]) => {
                console.log('Consulta completa');
                var len = results.rows.length;
                for (let i = 0; i < len; i++) {
                  let row = results.rows.item(i);
                  const { //mesmo titulo da sua coluna na tabela
                    tb01_nome,
                    tb01_email,
                    tb01_senha,
                  } = row;
                  listaDeReparos.push({
                    tb01_nome,
                    tb01_email,
                    tb01_senha,
                  });
                }
                console.log(listaDeReparos);
                resolve(listaDeReparos);
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
  AtualizarUsuario(email, newPass) {
    return new Promise(resolve => {
      this.Conectar()
        .then(db => {
          db.transaction(tx => {
            //Query SQL para atualizar um dado no banco
            tx.executeSql('UPDATE tb01_usuario SET tb01_senha = ? WHERE tb01_email = ?', [
              newPass,
              email,
            ]).then(([tx, results]) => {
              resolve(results);
            });
          }).then(result => {
              this.Desconectar(db);
            }).catch(err => {
              console.log(err);
            });
        }).catch(err => {
          console.log(err);
        });
    });
  }
  /**-Login-Cadastro-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------**/

  /**-CRUD Suítes-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------**/
  //Create
  CadastrarSuite(task) {
    return new Promise(resolve => {
      this.Conectar()
        .then(db => {
          db.transaction(tx => {
            //Query SQL para inserir um novo produto
            tx.executeSql(
              'INSERT INTO tb02_locais (tb02_titulo, tb02_local, tb02_categoria, tb02_descricao, tb02_imagem, tb02_data ) VALUES ( ?, ?, "Suítes", ?, ?, ? )',
              [
                task.titulo,
                task.local,
                task.descricao,
                task.image,
                task.data,
              ],
            ).then(([tx, results]) => {
              resolve(results);
            });
            console.log(
              task.titulo,
              task.local,
              task.descricao,
              task.image,
              task.data,
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
      const listaDeReparos = [];
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
                    tb02_categoria,
                    tb02_descricao,
                    tb02_imagem,
                    tb02_data,
                  } = row;
                  listaDeReparos.push({
                    tb02_id,
                    tb02_titulo,
                    tb02_local,
                    tb02_categoria,
                    tb02_descricao,
                    tb02_imagem,
                    tb02_data,
                  });
                }
                console.log(listaDeReparos);
                resolve(listaDeReparos);
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

  //Read
  ListarSuites() {
    return new Promise(resolve => {
      const listaDeReparos = [];
      this.Conectar()
        .then(db => {
          db.transaction(tx => {
            //Query SQL para listar os dados da tabela
            tx.executeSql('SELECT * FROM tb02_locais WHERE tb02_categoria = "Suítes" ').then(
              ([tx, results]) => {
                console.log('Consulta completa');
                var len = results.rows.length;
                for (let i = 0; i < len; i++) {
                  let row = results.rows.item(i);
                  const { //mesmo titulo da sua coluna na tabela
                    tb02_id,
                    tb02_titulo,
                    tb02_local,
                    tb02_categoria,
                    tb02_descricao,
                    tb02_imagem,
                    tb02_data,
                  } = row;
                  listaDeReparos.push({
                    tb02_id,
                    tb02_titulo,
                    tb02_local,
                    tb02_categoria,
                    tb02_descricao,
                    tb02_imagem,
                    tb02_data,
                  });
                }
                console.log(listaDeReparos);
                resolve(listaDeReparos);
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

  
  SetDataUri(imageUrl) {dataURi = imageUrl;}

  GetDataUri() {return dataURi;}

  //Update
  Atualizar(task) {
    return new Promise(resolve => {
      this.Conectar()
        .then(db => {
          db.transaction(tx => {
            //Query SQL para atualizar um dado no banco
            tx.executeSql('UPDATE tb02_locais SET tb02_titulo = ?, tb02_local = ?, tb02_descricao = ?, tb02_image = ?, tb02_data = ?  WHERE tb02_id = ?', [
              task.titulo,
              task.local,
              task.descricao,
              task.image,
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
            tx.executeSql('DELETE FROM tb02_locais WHERE tb02_id = ?', [id]).then(
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
