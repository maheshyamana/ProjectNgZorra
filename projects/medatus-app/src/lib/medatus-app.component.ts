import { Component } from '@angular/core';
import { NzButtonSize, NzButtonType } from 'ng-zorro-antd/button';

@Component({
  selector: 'lib-MedatusApp',
  templateUrl:'medatus-app.component.html',
styleUrls: [
  'medatus-app.component.scss'
]
})
export class MedatusAppComponent {
  isClicked=false;
  sizeLarge: NzButtonSize = 'large';
  sizeSmall: NzButtonSize = 'default';
  buttonTypeDashed:NzButtonType="dashed"
  buttonTypePrimary:NzButtonType="primary"
  buttonType:NzButtonType="primary"
  sizes=[this.sizeLarge,this.sizeLarge,this.sizeSmall,this.sizeSmall]
  OnFocus(){
  console.log("inside OnFocus")
    this.buttonType="dashed"
  }
  
}

