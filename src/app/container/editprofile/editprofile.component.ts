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
        <!--form action="#" method="post"-->
        <!--1. 모듈에 FormsModule을 추가하기-->
        <!--2. form 요소에 NgForm 디렉티브가 적용되어 템플릿 기반 폼으로 동작-->
        <!--3. 탬풀랏 가번 폼에서는 submit 이벤트(데이터를 서버로 전송)
        ngSubmit 이벤트 사용한다 -->
        <div class="content-wrap">
          <div class="content-header">필수사항</div>
            <div class="content-body">
              <form [formGroup]="userForm" novalidate>
                  <div>
                    <label for="이름">이름</label>
                    <input  type="text" name="firstName" placeholder="이름"
                    formControlName="firstName" required/>
                    <span *ngIf="firstName.errors?.required && firstName.touched" class="info">
                      이름을 입력하세요!
                    </span>
                  </div>
                  <div>
                    <label for="성">성</label>
                    <input type="text" name="lastName" placeholder="성" formControlName="lastName"/>
                    <span *ngIf="lastName.errors?.required && lastName.touched" class="info">
                      성을 입력하세요!
                    </span>
                  </div>
                  <div>
                  <!-- [attr.selected]=" i == 1  ? 'selected' : '' "-->
                    <label for="성별">성별</label>
                    <select name="se" formControlName="se">
                      <option
                        *ngFor="let s of se; let i=index"
                        [selected]="(s.value =='여자' ? true : null)"
                        [value]="s.value"
                      >
                        {{s.value}}
                      </option>
                    </select>
                  </div>
                  <div>
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
                  <div>
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
  <!--
    
               
                
                <div>
                  <label for="email">이메일</label>
                  <input type="email" name="email" placeholder="email">
                  <!-- <div>{{email.value}}</div> -->
                  <!--[(ngModel)]="user.email" #email="ngModel"-->
                  <!-- <em *ngIf="email.errors?.pattern">email 형식이 맞지 않습니다.</em>-->
         <!--         </div>
                  <p>
                    <label for="선호하는 언어">선호하는 언어</label>
                    <select name="years">
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
  -->
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
