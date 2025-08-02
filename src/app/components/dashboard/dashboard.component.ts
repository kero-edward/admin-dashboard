import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  username: string = '';

  constructor(private _AuthService: AuthService) {}

  ngOnInit(): void {
    this.username = this._AuthService.getUser();
  }
}
