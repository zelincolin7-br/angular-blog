import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BigCard } from './components/big-card/big-card';

@Component({
  imports: [RouterOutlet, BigCard],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('angular-blog');
}
