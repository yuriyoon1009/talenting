import { FormsModule, FormGroup, FormBuilder, Validators, NgModel } from '@angular/forms';
import { Component, OnInit, NgModule } from '@angular/core';

class User {
  constructor(
    public userid: string,
    public password: string,
    public email: string,
  ) {}
}


@Component({
  selector: 'app-editprofile',
  template: `
  <div class="wrapper">
    <div class="edit-profile-section">
        <!--sidenav-->
        <div class="sidenav">
          <ul>
              <li>프로필 수정</li>
              <li>사진</li>
          </ul>
        </div>
        <!--sidenav-->
        <!--form action="#" method="post"-->
        <!--1. 모듈에 FormsModule을 추가하기-->
        <!--2. form 요소에 NgForm 디렉티브가 적용되어 템플릿 기반 폼으로 동작-->
        <!--3. 탬풀랏 가번 폼에서는 submit 이벤트(데이터를 서버로 전송)
        ngSubmit 이벤트 사용한다 -->
        <div class="content-wrap">
          <div class="content-header">필수사항</div>
          <div class="content-body">
            <form #userForm="ngForm" (ngSubmit)="onNgSubmit(userForm)">
                <p>
                  <label for="이름">이름</label>
                  <input  type="text" name="firstName" placeholder="이름"
                  ngModel/>
                </p>
                <p>
                  <label for="성">성</label>
                  <input type="text" name="lastName" placeholder="성"
                  ngModel/>
                  <span class="info">공개 프로필에는 성을 제외한 이름만 표시됩니다. 예약 요청 시 호스트는 회원님의 성과
                  이름을 모두 확인할 수 있습니다.
                  </span>
                </p>
                <p>
                  <label for="성별">성별</label>
                  <select name="sex" ngModel>
                    <option value selected="selected">성별</option>
                    <option *ngFor="let s of sex"
                    [value]="s.value">{{s.value}}</option>
                  </select>
                </p>
                <p>
                  <label for="생년월일">생년월일</label>
                  <select name="months" ngModel>
                    <option value selected="selected">월</option>
                    <option *ngFor="let month of months"
                    [value]="month">{{month}}월</option>
                  </select>
                  <select name="days" ngModel>
                    <option value selected="selected">일</option>
                    <option *ngFor="let day of days"
                    [value]="day">{{day}}</option>
                  </select>
                  <select name="years" ngModel>
                    <option value selected="selected">년</option>
                    <option *ngFor="let year of years"
                    [value]="year">{{year}}</option>
                  </select>
                </p>
                <p>
                  <label for="email">이메일</label>
                  <input type="email" name="email" placeholder="email"
                  pattern="^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$"
                  required #email="ngModel" [(ngModel)]="user.email"
                  >
                  <em *ngIf="email"></em>
                </p>
                <p>
                  <label for="선호하는 언어">선호하는 언어</label>
                  <select name="years" ngModel>
                    <option value selected="selected">{{languages[0].value}}</option>
                    <option *ngFor="let language of languages"
                    [value]="language.value">{{ language.value }}</option>
                  </select>
                </p>
                <p>
                  <label for="거주 도시">거주 도시</label>
                  <input type="text" name="whereIam"
                  placeholder="예: 프랑스 파리, 뉴욕 브루클린, 일리노이주 시카고"
                  class="whereIam"/>
                </p>
                <p class="intro">
                  <label for="자기소개">자기소개</label>
                  <textarea rows="4"></textarea>
                  <span class="info">탈렌팅은 사람들간의 관계를 기반으로 만들어졌습니다. 회원님이 어떤 사람인지
                  알려주세요. 가장 좋아하는 여행지, 책, 영화, TV 프로그램, 음악, 음식 등
                  뭐든지 좋습니다.</span>
                </p>
                <p>
                  <input type="submit" value="저장하기" class="submit-btn">
                </p>
              </form>
          </div>
        </div>
    </div>
  </div>
  `,
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent {

  // editProfile 변수 FormGroup 객체 타입
  editProfile: FormGroup;
  selectedColor: string;
  //////
  user: User;
  email: string;
  // user: User;
  sex: any[] = [
    {value: '여자'},
    {value: '남자'}
  ];

  languages: any[] = [
    {value: '한국어'},
    {value: '일본어'},
    {value: '프랑스어'},
    {value: 'English'}
  ];

  months: number[] = Array.from(new Array(12), (x, i) => i + 1);
  days: number[] = Array.from(new Array(31), (x, i) => i + 1);
  years: number[] = Array.from(new Array(40), (x, i) => 1999 - i);
  onNgSubmit(userForm) { console.log(userForm.value);
    this.initUser();
    console.log(this.initUser());
  }
  initUser() {
    this.user = new User('', '', '');
  }
 /* tests = [
    {value: '여자'},
    {value: '남자'}
  ];
  colors = [
    {value: 'red', label: 'Red'},
    {value: 'green', label: 'Green'},
    {value: 'blue', label: 'Blue'},
    {value: 'cyan', label: 'Cyan'},
    {value: 'magenta', label: 'Magenta'},
    {value: 'yellow', label: 'Yellow'},
    {value: 'black', label: 'Black'},
  ];
  constructor(public fb: FormBuilder) {}
  ngOnInit() {
    this.editProfile = this.fb.group({
      firstName: ['', [Validators.required]]
    });
  }*/
}
