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

  Increment() {
    this.counter++;
  }
  Decrement() {
    this.counter--;
  }
  Reset() {
    this.counter = 0;
  }
  ByTwo() {
    this.counter = this.counter * 2;
  }
}
