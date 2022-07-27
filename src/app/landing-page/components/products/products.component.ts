import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Renderer2 } from '@angular/core';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit, AfterViewInit {
  products = [
    {
      name: 'Stride B-UP',
      image: '../../../../assets/images/Asset 4.png',
      selected: false,
    },
    {
      name: 'MoxiFit',
      image: '../../../../assets/images/Asset 2.png',
      selected: false,
    },
    {
      name: 'Insera W 312 W 312',
      image: '../../../../assets/images/Asset 3.png',
      selected: true,
    },
  ];

  @ViewChild('firstPage') pageElement!: ElementRef;

  private periviousElement!: EventTarget | null;

  constructor(private renderer2: Renderer2) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.initFirstPage();
  }

  private initFirstPage() {
    this.renderer2.addClass(this.pageElement.nativeElement, 'page-selected');
    this.periviousElement = this.pageElement.nativeElement;
  }

  async onClickPage(event: MouseEvent) {
    if (this.periviousElement) await this.unselectPervElement();

    this.renderer2.addClass(event.target, 'page-selected');

    this.periviousElement = event.target;
  }

  private async unselectPervElement() {
    this.renderer2.removeClass(this.periviousElement, 'page-selected');
  }
}
