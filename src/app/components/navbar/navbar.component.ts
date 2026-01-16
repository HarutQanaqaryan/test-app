import { Component } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  MENU_ITEMS = [
    {
      name: 'Home',
      icon: '../assets/home.svg',
      current: true,
      href: '/claims',
    },
  ];
}
