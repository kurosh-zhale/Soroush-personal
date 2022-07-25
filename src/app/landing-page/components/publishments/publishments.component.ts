import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-publishments',
  templateUrl: './publishments.component.html',
  styleUrls: ['./publishments.component.scss'],
})
export class PublishmentsComponent implements OnInit {
  publishments = [
    {
      image: '../../../../assets/images/komarov-egor-LlvSEbgjQoA-unsplash.jpg',
      rout: '#',
      name: 'Test',
      desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore porro sapiente at molestias harum voluptas officiis accusantium veritatis vel. Excepturi voluptatem saepe voluptatum similique suscipit non inventore obcaecati aliquam nulla.',
    },
    {
      image: '../../../../assets/images/komarov-egor-LlvSEbgjQoA-unsplash.jpg',
      rout: '#',
      name: 'Test',
      desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore porro sapiente at molestias harum voluptas officiis accusantium veritatis vel. Excepturi voluptatem saepe voluptatum similique suscipit non inventore obcaecati aliquam nulla.',
    },
    {
      image: '../../../../assets/images/komarov-egor-LlvSEbgjQoA-unsplash.jpg',
      rout: '#',
      name: 'Test',
      desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore porro sapiente at molestias harum voluptas officiis accusantium veritatis vel. Excepturi voluptatem saepe voluptatum similique suscipit non inventore obcaecati aliquam nulla.',
    },
  ];

  description!: string;

  constructor() {}

  ngOnInit(): void {
    this.filterDescription();
  }

  filterDescription() {
    this.publishments.map((el) => (this.description = el.desc.slice(0, 100)));
    console.log(2);
  }
}
