import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BigCard } from './components/big-card/big-card';
import { MenuTitle } from './components/menu-title/menu-title';
import { Home } from './pages/home/home';

@Component({
  imports: [RouterOutlet, BigCard, MenuTitle, Home],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('angular-blog');
}
