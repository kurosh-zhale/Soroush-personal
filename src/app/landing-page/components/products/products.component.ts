import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Renderer2 } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products = [
    {
      name: 'Test',
      image: '',
      selected: false,
    },
    {
      name: 'Test',
      image: '',
      selected: true,
    },
    {
      name: 'Test',
      image: '',
      selected: false,
    },
    // {
    //   name: 'Test',
    //   image: '',
    // },
    // {
    //   name: 'Test',
    //   image: '',
    // },
    // {
    //   name: 'Test',
    //   image: '',
    // },
  ];

  @ViewChild('') product!: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {}
}
