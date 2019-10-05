export class Model{
  user;
  items;

  public sortByDataItem(): void {
    this.items.sort((a: TodoItem, b: TodoItem) => {
        return +new Date(a.data) - +new Date(b.data);
    });
  }
  constructor(){
    this.user = "Brenda Duque";
    this.items = [new TodoItem("Dominar o mundo", false, "alta", "2019-11-30"),
            new TodoItem("Falar com Trump", false, "baixa", "2020-01-02"),
            new TodoItem("Preparar aula", false, "alta", "2023-01-01"),
            new TodoItem("Caminhar 10km", true, "media", "2020-02-02") ]
  }
}

export class TodoItem{
  action;
  done;
  prioridade;
  data;
  constructor(action, done, prioridade, data){
    this.action = action;
    this.done = done;
    this.prioridade = prioridade;
    this.data = data;
  }
}