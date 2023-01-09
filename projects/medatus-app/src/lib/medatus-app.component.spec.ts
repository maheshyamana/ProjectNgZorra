import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import { MedatusAppComponent } from './medatus-app.component';

import { NzTableModule, NzTbodyComponent } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzRadioModule } from 'ng-zorro-antd/radio';

//icon loading
import { NzIconModule } from 'ng-zorro-antd/icon';
import { IconDefinition } from '@ant-design/icons-angular';
import {  DownloadOutline, StarFill } from '@ant-design/icons-angular/icons';
const icons: IconDefinition[] = [ DownloadOutline,StarFill ];
describe('MedatusAppComponent', () => {
  let component: MedatusAppComponent;
  let fixture: ComponentFixture<MedatusAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedatusAppComponent ],
      imports:[        
        BrowserModule, 
        FormsModule,
        NzButtonModule,
        NzTableModule,
        NzDividerModule,
        NzRadioModule,
        NzIconModule.forRoot(icons)]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedatusAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should render heading', () => {
    const fixture = TestBed.createComponent(MedatusAppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h2')?.textContent).toContain('Medatus Button demo page');
  });
  it('should render table', () => {
    const fixture = TestBed.createComponent(MedatusAppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.getElementsByTagName('nzTable') !=null).toBeTruthy();
  });
  it('should render correct buttons', () => {
    const fixture = TestBed.createComponent(MedatusAppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.getElementsByTagName('button').length==20).toBeTruthy();
  });
  });
