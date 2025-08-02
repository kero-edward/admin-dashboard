import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { SideBarComponent } from '../side-bar/side-bar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [NavComponent, SideBarComponent, RouterOutlet],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {}
