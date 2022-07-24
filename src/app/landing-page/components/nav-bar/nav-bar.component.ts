import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  navButtons = [
    {
      name: 'پرسش های متداول',
      rout: '',
    },
    {
      name: 'ارطبات با ما',
      rout: '',
    },  
    {
      name: 'درباره ما',
      rout: '',
    },
    {
      name: 'مقالات',
      rout: '',
    },
    {
      name: 'ساعت ویزیت',
      rout: '',
    },
    {
      name: 'خدمات',
      rout: '',
    },
      {
        name: 'جستوجو',
        rout: '',
      },
  ];

  constructor() {}

  ngOnInit(): void {}

  onClick(id: number) {}
}
