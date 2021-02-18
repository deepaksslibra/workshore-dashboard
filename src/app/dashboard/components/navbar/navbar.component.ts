import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  @Input() signOutText = 'Signout';
  @Input() signOutIcon = 'pi-user';
  @Input() logoImgSrc =
    'https://www.primefaces.org/primeng/showcase/assets/showcase/images/primeng-logo-dark.svg';
  @Output() signOut = new EventEmitter<boolean>();
}
