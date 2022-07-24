import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  navButtons = [
    {
      name: 'جستوجو',
      rout: '',
    },
    {
      name: 'خدمات',
      rout: '',
    },
    {
      name: 'ساعت ویزیت',
      rout: '',
    },
    {
      name: 'مقالات',
      rout: '',
    },
    {
      name: 'درباره ما',
      rout: '',
    },
    {
      name: 'ارطبات با ما',
      rout: '',
    },  
    {
      name: 'پرسش های متداول',
      rout: '',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  onClick(id: number) {}
}
