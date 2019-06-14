import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Your Todos';
  gradientPos = '0px -60px';
  todos = [
    { name: 'this is the first thing to do', done: false, id: 0 },
    { name: 'this is the second thing to do', done: false, id: 1 },
  ];

  public onMouseMove(event: MouseEvent) {
    this.gradientPos = `-${event.x / 2}px -${event.y}px`;
  }

  public onTodoDone(id: number) {
    this.todos[id].done = !this.todos[id].done;
  }
}
