import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SubpageComponent } from './subpage.component';

describe('SubpageComponent', () => {
  let component: SubpageComponent;
  let fixture: ComponentFixture<SubpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubpageComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SubpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
