import { Component, DoCheck } from '@angular/core';

// INTERFACE
import { TaskList } from '../../model/task-list';
import { withDebugTracing } from '@angular/router';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements DoCheck{
  
  public taskList: Array<TaskList> = JSON.parse( localStorage.getItem("list") || '[]'); // caso ele retorne errado receba um array valor vazio

  // executado quando algum valor é alterado
  ngDoCheck(): void{ 
    this.setLocalStorage();
  }

  public deleteItemTaskList(event: number): void{
    this.taskList.splice(event, 1); // indice - quantidades de itens da remoção
  }

  public deleteAllTaskList(): void{
    const confirm = window.confirm("Are you sure want to clean you todom?")

    if(confirm){
      this.taskList = [];
    }
  }

  public setEmitTaskList(event: string){    
    this.taskList.push({task: event, checked: false});
  }

  public validationInput(event: string, index: number){
    
    if(!event.length){    
      const confirm = window.confirm("Task está vazia, tem certeza que deseja deletar")

      if(confirm){
        this.deleteItemTaskList(index);
      }
    }
  } 


  public setLocalStorage(): void{
    if(this.taskList){
      // para ordenar valores booleanos vvoce vai subtrair como tipo number "primeiro valor - segundo valor"
      this.taskList = this.taskList.sort((first, second) => Number(first.checked) - Number(second.checked));
      localStorage.setItem("list", JSON.stringify(this.taskList));
    }
  }


}
