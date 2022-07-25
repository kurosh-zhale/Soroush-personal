import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss'],
})
export class StaffComponent implements OnInit {
  staffMembers = [
    {
      image: '../../../../assets/images/img_avatar.png',
      name: 'BOB',
      desription: 'HE IS BOB THE BUILDER!',
      focused: false,
    },
    {
      image: '../../../../assets/images/img_avatar.png',
      name: 'BOB',
      desription: 'HE IS BOB THE BUILDER!',
      focused: false,
    },
    {
      image: '../../../../assets/images/img_avatar.png',
      name: 'BOB',
      desription: 'HE IS BOB THE BUILDER!',
      focused: false,
    },
    {
      image: '../../../../assets/images/img_avatar.png',
      name: 'BOB',
      desription: 'HE IS BOB THE BUILDER!',
      focused: false,
    },
    {
      image: '../../../../assets/images/img_avatar.png',
      name: 'BOB',
      desription: 'HE IS BOB THE BUILDER!',
      focused: false,
    },
    {
      image: '../../../../assets/images/img_avatar.png',
      name: 'BOB',
      desription: 'HE IS BOB THE BUILDER!',
      focused: false,
    },
    {
      image: '../../../../assets/images/img_avatar.png',
      name: 'BOB',
      desription: 'HE IS BOB THE BUILDER!',
      focused: false,
    },
  ];

  constructor() {}

  ngOnInit(): void {
    this.changeFocus(this.staffMembers);
  }

  changeFocus(data: Array<any>) {
    let index = 0;
    let pervIndex = index - 1;
    setInterval(() => {
      if (index < data.length) {
        const member = data[index];
        let pervMember;
        if (index === 0) {
          pervMember = data[data.length - 1];
        } else {
          pervMember = data[pervIndex];
        }

        member.focused = !member.focused;
        if (pervMember && pervMember.focused) {
          pervMember.focused = false;
        }
        index++;
        pervIndex++;
      } else {
        index = 0;
        pervIndex = index - 1;
      }
    }, 2000);
  }
}
