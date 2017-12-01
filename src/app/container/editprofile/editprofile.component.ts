import { Component, OnInit, NgModule } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
        <!--content-->
        <div class="content-wrap">
          <div class="content-header">필수사항</div>
            <div class="content-body">
              <form [formGroup]="userForm" novalidate>
                  <div class="form-label">
                    <label for="이름">이름</label>
                    <input  type="text" name="firstName" placeholder="이름"
                    formControlName="firstName" required/>
                    <span *ngIf="firstName.errors?.required && firstName.touched" class="info">
                      이름을 입력하세요!
                    </span>
                  </div>
                  <div class="form-label">
                    <label for="성">성</label>
                    <input type="text" name="lastName" placeholder="성" formControlName="lastName"/>
                    <span *ngIf="lastName.errors?.required && lastName.touched" class="info">
                      성을 입력하세요!
                    </span>
                  </div>
                  <div class="form-label">
                    <!-- [attr.selected]=" i == 1  ? 'selected' : '' "-->
                    <label for="성별">성별</label>
                    <select name="se" formControlName="se">
                      <option
                        *ngFor="let s of se; let i=index"
                        [selected]="(s.value =='여자' ? true : null)"
                        [value]="s.value">
                        {{s.value}}
                      </option>
                    </select>
                  </div>
                  <div class="form-label">
                      <label for="생년월일">생년월일</label>
                      <select name="months">
                        <option value selected="selected">월</option>
                        <option *ngFor="let month of months"
                        [value]="month">{{month}}월</option>
                      </select>
                      <select name="days">
                        <option value selected="selected">일</option>
                        <option *ngFor="let day of days"
                        [value]="day">{{day}}</option>
                      </select>
                      <select name="years">
                        <option value selected="selected">년</option>
                        <option *ngFor="let year of years"
                        [value]="year">{{year}}</option>
                      </select>
                  </div>
                  <div class="form-label">
                      <label for="email">이메일</label>
                      <input type="email" name="email" placeholder="email">
                  </div>
                  <div class="form-label">
                    <label for="선호하는 언어">선호하는 언어</label>
                    <select name="years">
                      <option value selected="selected">{{languages[0].value}}</option>
                      <option *ngFor="let language of languages"
                      [value]="language.value">{{ language.value }}</option>
                    </select>
                  </div>
                  <div class="form-label">
                    <label for="선호하는 언어">국가, 지역</label>
                    <select name="country">
                      <option value selected="selected">{{countries[0].value}}</option>
                      <option *ngFor="let country of countries"
                      [value]="country.value">{{ country.value }}</option>
                    </select>
                    <select name="prefectrue">
                      <option value selected="selected">{{prefectures[0].value}}</option>
                      <option *ngFor="let prefecture of prefectures"
                      [value]="prefecture.value">{{ prefecture.value }}</option>
                    </select>
                  </div>
                  <div class="intro">
                    <label for="자기소개">자기소개</label>
                    <textarea rows="4"></textarea>
                    <span class="info">탈렌팅은 사람들간의 관계를 기반으로 만들어졌습니다. 회원님이 어떤 사람인지
                    알려주세요. 가장 좋아하는 여행지, 책, 영화, TV 프로그램, 음악, 음식 등
                    뭐든지 좋습니다.</span>
                  </div>
                  <div class="form-submit">
                    <!-- submit-btn -->
                    <input type="submit" value="저장하기" class="form-control submit-btn"
                    [disabled]="userForm.invalid">
                  </div>
                  <div>
                    {{userForm.value | json }}
                  </div>
                  <div>
                    {{ userForm.status }}
                  </div>
              </form>
            </div>
        </div>
    </div>
  </div>
  `,
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {

  // editProfile 변수 FormGroup 객체 타입
  editProfile: FormGroup;
  selectedColor: string;
  ///// 20171130
  /*
    1.
    리액티브 폼에서는 컴포넌트 클래스에 FormGroup
    인스턴스를 직접 생성하고 formGroup 디렉티브를
    사용하여 FormGroup 인스턴스와 폼 요소를 바인딩한다.
  */
  userForm: FormGroup;
  /*
    2. FormBuilder : FormGroup,FormControl, FormArray와
    같은 클래스를 사용하여 인스턴스를 생성
    formbuilder 리펙토링
  */
  constructor(private fb: FormBuilder) {}
  // user:User;
  // email: string;
  // user: User;
  se: any[] = [
    {value: '여자'},
    {value: '남자'}
  ];

  languages: any[] = [
    {value: '한국어'},
    {value: '일본어'},
    {value: '프랑스어'},
    {value: 'English'}
  ];

  countries: any[] = [
    {value: '한국'},
    {value: '일본'},
    {value: '프랑스'},
    {value: '미국'}
  ]

  prefectures: any[] = [
    {value: '서울'},
    {value: '부산'},
    {value: '대구'}
  ]



  months: number[] = Array.from(new Array(12), (x, i) => i + 1);
  days: number[] = Array.from(new Array(31), (x, i) => i + 1);
  years: number[] = Array.from(new Array(40), (x, i) => 1999 - i);
  onNgSubmit(userForm) { console.log(userForm.value.firstName);
   // user = new User(userForm[0].value, userForm[1].value)
   // this.();
   // Object.assign
  }
  initUser() {
    // this.user = new User('', '', '');
  }
  /* 3 */
  ngOnInit() {
    this.userForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      se: ['여자']
    });
  }


  // 템플릿에서 폼 모델에 접근할 수 있도록 컴포넌트 클래스에 getter를 정의한다.
  get firstName() {
    return this.userForm.get('firstName');
  }

  get lastName() {
    return this.userForm.get('lastName');
  }

  onSubmit() {
    console.log(this.userForm);
  }
}
