import { Component } from '@angular/core';
import { MenuTitle } from '../../components/menu-title/menu-title';
import { BigCard } from '../../components/big-card/big-card';

@Component({
  imports: [MenuTitle, BigCard],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {}
