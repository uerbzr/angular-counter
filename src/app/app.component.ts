import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-counter';

  counter: number = 0;

  increment() {
    this.counter++;
  }
  decrement() {
    this.counter--;
  }
  reset() {
    this.counter = 0;
  }
  bytwo() {
    this.counter = this.counter * 2;
  }
}
