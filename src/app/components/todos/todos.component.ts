import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[];

  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
      this.todoService.getTodos().subscribe( 
        t => { this.todos = t; }
      );
  }

  deleteTodo(todo:Todo){
     //console.log(`deleteTodo  ${todo}`);    
     this.todoService.deleteTodo(todo).subscribe( 
       () => { this.todos = this.todos.filter( (e) => e.id !== todo.id ); }
     );
  }

  addTodo(todo:Todo) {
    this.todoService.addTodo(todo).subscribe( 
      (t) => { this.todos.push(t); }
    )
  }

}
