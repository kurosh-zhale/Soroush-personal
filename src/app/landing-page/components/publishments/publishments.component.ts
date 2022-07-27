import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-publishments',
  templateUrl: './publishments.component.html',
  styleUrls: ['./publishments.component.scss'],
})
export class PublishmentsComponent implements OnInit {
  publishments = [
    {
      image: '../../../../assets/images/Asset 5.png',
      rout: '#',
      name: 'Test',
      desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore porro sapiente at molestias harum voluptas officiis accusantium veritatis vel. Excepturi voluptatem saepe voluptatum similique suscipit non inventore obcaecati aliquam nulla.',
    },
    {
      image: '../../../../assets/images/Asset 6.png',
      rout: '#',
      name: 'Test',
      desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore porro sapiente at molestias harum voluptas officiis accusantium veritatis vel. Excepturi voluptatem saepe voluptatum similique suscipit non inventore obcaecati aliquam nulla.',
    },
    {
      image: '../../../../assets/images/Asset 8.png',
      rout: '#',
      name: 'Test',
      desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore porro sapiente at molestias harum voluptas officiis accusantium veritatis vel. Excepturi voluptatem saepe voluptatum similique suscipit non inventore obcaecati aliquam nulla.',
    },
    {
      image: '../../../../assets/images/Asset 9.png',
      rout: '#',
      name: 'Test',
      desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore porro sapiente at molestias harum voluptas officiis accusantium veritatis vel. Excepturi voluptatem saepe voluptatum similique suscipit non inventore obcaecati aliquam nulla.',
    },
  ];

  description!: string;

  constructor() {}

  ngOnInit(): void {
    this.filterDescription();
    console.log(window.innerWidth);
    
  }

  filterDescription() {
    this.publishments.map((el) => (this.description = el.desc.slice(0, 100)));
  }
}
