import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todoitem',
  templateUrl: './todoitem.component.html',
  styleUrls: ['./todoitem.component.css']
})
export class TodoitemComponent implements OnInit {

  @Input()   todo:       Todo;
  @Output()  deleteTodo: EventEmitter<Todo> = new EventEmitter();
  constructor(private ts:TodoService) { }

  ngOnInit(): void {
  }

  setClasses(){
    let classes = {
      todo: true,
      'is-complete': this.todo.completed
    }
    return classes;
  }

  onToggle(todo:Todo){
    todo.completed = !todo.completed;
    this.ts.toggleComleted(todo).subscribe(
      (td) => {
        console.log(td);
      }
    )

  }

  onDelete(todo:Todo){
    this.deleteTodo.emit(todo);
  }

}
