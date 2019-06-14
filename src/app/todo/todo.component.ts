import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';
import {Todo} from 'src/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  @Input()
  public todo: Todo;
  @Output()
  public done = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  @HostListener('click')
  public onClick() {
    this.done.emit(this.todo.id);
  }

}
