import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent {

  // 비로그인
  lists: any[] = [
    {title: '호스팅하기', cols: 1},
    {title: '이벤트', cols: 1},
    {title: '회원가입', cols: 1},
    {title: '로그인', cols: 1}
  ];

  restColspan() {
    const listColspan = this.lists.map(list => list.cols);
    let listColspanTotal = 0;
    listColspan.forEach(list => listColspanTotal += list);
    // logo colspan 2 빼면 전체 cols 10
    return 11 - listColspanTotal;
  }


}
