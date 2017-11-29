import { FormsModule, FormGroup, FormBuilder, Validators, NgModel } from '@angular/forms';
import { Component, OnInit, NgModule } from '@angular/core';


@Component({
  selector: 'app-editprofile',
  template: `
  <mat-card>
    <!--lastname-->
    <mat-form-field class="block">
      <!--placeholder는 사용자 정보 -->
      <input matInput type="text" name="firstName" formControlName="firstName" placeholder="이름"/>
    </mat-form-field>
    <!--lastname-->
    <!--firstname-->
    <mat-form-field class="block">
      <input matInput type="text" name="lastName" formControlName="lastName"
      placeholder="성"/>
    </mat-form-field>
    <!--firstname-->
    <!--sex-->
   <!-- <mat-form-field class="block">
      <mat-select placeholder="성별">
        <mat-option *ngFor="let test for tests" [value]="test.value">
          {{test.value}}
        </mat-option>
      </mat-select>
    </mat-form-field>-->
    <!--sex-->
    <!--birthday-->
    <mat-form-field>
      <mat-select placeholder="일" class="date">
        <mat-option></mat-option>
      </mat-select>
      <mat-select placeholder="월" class="date">
        <mat-option></mat-option>
      </mat-select>
      <mat-select placeholder="년" class="date">
        <mat-option></mat-option>
      </mat-select>
    </mat-form-field>
    <mat-form-field class="block">
      <input matInput type="email" name="email" formControlName="email" placeholder="메일"/>
    </mat-form-field>
    <mat-form-field class="block">
      <input matInput type="number" name="number" formControlName="number" placeholder="전화번호"/>
    </mat-form-field>
    <mat-form-field class="block">
      <mat-select placeholder="선호하는 언어">
        <mat-option></mat-option>
      </mat-select>
    </mat-form-field>
    <mat-form-field class="block">
      <input matInput type="text" name="whereIam" formControlName="whereIam"
      placeholder="거주도시"/>
    </mat-form-field>
    <mat-form-field class="block">
      <textarea matInput name="introduction" formControlName="introduction" placeholder="자기소개"></textarea>
    </mat-form-field>
    <!--birthday-->
    <!--<mat-form-field>
      <mat-select placeholder="Colors" [(ngModel)]="selectedColor">
        <mat-option *ngFor="let color of colors" [value]="color.value">
        {{ color.label }}
        </mat-option>
      </mat-select>
    </mat-form-field>-->
    <button mat-raised-button type="submit">저장하기</button>
  </mat-card>
  `,
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {

  // editProfile 변수 FormGroup 객체 타입
  editProfile: FormGroup;
  selectedColor: string;

  tests = [
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
  }
}
