/* eslint-disable prettier/prettier */
export default class Task {
  constructor(nome, status, categoria, tarefa, conteudo, gravidade, data){
    this.nome = nome;
    this.status = status;
    this.categoria = categoria;
    this.tarefa = tarefa;
    this.conteudo = conteudo;
    this.gravidade = gravidade;
    this.data = data;
  }
}
