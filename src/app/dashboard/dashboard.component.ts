import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AuthService } from '../core/auth/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  sidebarItems: MenuItem[] = [
    {
      label: 'Pages',
      items: [
        {
          label: 'Charts',
          icon: 'pi pi-fw pi-chart-bar',
          routerLink: 'charts',
        },
        {
          label: 'Listing',
          icon: 'pi pi-fw pi-download',
          routerLink: 'listing',
        },
      ],
    },
  ];
  constructor(private authService: AuthService) {}
  ngOnInit(): void {}

  onSignOut() {
    this.authService.signout();
  }
}
