import { Component } from '@angular/core';
import { NzButtonSize, NzButtonType } from 'ng-zorro-antd/button';
@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrls:['./app.component.scss']
})
export class AppComponent {
  title = 'ProjectNgZorra';
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
