import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent implements OnInit {
  serviceItems = [
    {
      image: '',
      desc: 'ویزیت پزشک',
      focused: false,
    },
    {
      image: '',
      desc: 'تجویز انواع سمعک های برند یونیترون و ارائه خدامات پس از فروش',
      focused: true ,
    },
    {
      image: '',
      desc: 'شنوایی سنجی',
      focused: false,
    },
    {
      image: '',
      desc: 'ارزیابی سیستم تعادل و سرگیجه',
      focused: false,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
