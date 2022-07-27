import { Component, OnInit, Renderer2 } from '@angular/core';

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

  private prevButton!: EventTarget | null;

  constructor(private renderer2: Renderer2) {}

  ngOnInit(): void {}

  async onClick(event: MouseEvent) {
    if (this.prevButton) {
      await this.renderer2.removeClass(this.prevButton, 'nav-selected');
      this.renderer2.addClass(this.prevButton, 'nav');
    }
    await this.renderer2.removeClass(event.target, 'nav');

    this.renderer2.addClass(event.target, 'nav-selected');

    this.prevButton = event.target;
  }
}
