import { NgModule } from '@angular/core';
import { MedatusAppComponent } from './medatus-app.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import {FormsModule} from '@angular/forms'
//icon loading
import { NzIconModule } from 'ng-zorro-antd/icon';
import { IconDefinition } from '@ant-design/icons-angular';
import {  DownloadOutline, StarFill } from '@ant-design/icons-angular/icons';
import { BrowserModule } from '@angular/platform-browser';

const icons: IconDefinition[] = [ DownloadOutline,StarFill ];

@NgModule({
  declarations: [
    MedatusAppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NzTableModule,
    NzButtonModule,
    NzDividerModule,
    NzRadioModule,
    NzIconModule.forRoot(icons)
  ],
  exports: [
    MedatusAppComponent
  ]
})
export class MedatusAppModule { }
