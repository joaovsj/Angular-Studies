import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todo-input-add-itens',
  templateUrl: './todo-input-add-itens.component.html',
  styleUrls: ['./todo-input-add-itens.component.scss']
})
export class TodoInputAddItensComponent {

  @Output() public emitTaskList = new EventEmitter();
  public addTaskList: string = ""

  public submitAddTaskList(): void {  
    
    this.addTaskList = this.addTaskList.trim();
                
    if(this.addTaskList){
      this.emitTaskList.emit(this.addTaskList);
      this.addTaskList = ""
    }
  }

}
