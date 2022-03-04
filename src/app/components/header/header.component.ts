import { Component, HostListener, OnInit } from '@angular/core';

import {
  faBars,
  faChevronLeft,
  faSearch,
  faShoppingBag,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

type TypeMainNav = {
  display: string;
  path: string;
};

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  faSearch = faSearch;
  faShoppingBag = faShoppingBag;
  faUser = faUser;
  faChevronLeft = faChevronLeft;
  faBars = faBars;

  mainNav: TypeMainNav[] = [
    {
      display: 'Home',
      path: '/',
    },
    {
      display: 'Catalogs',
      path: '/catalog',
    },
    {
      display: 'Accessories',
      path: '/accessories',
    },
    {
      display: 'Contact',
      path: '/contact',
    },
  ];

  status: boolean = false;

  scroll: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  clickEvent() {
    this.status = !this.status;
  }

  @HostListener('window:scroll', []) onWindowScroll() {
    const verticalOffset =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    if (verticalOffset > 80) this.scroll = true;
    else if (verticalOffset < 80) this.scroll = false;
  }
}
