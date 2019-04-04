import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepsnavbarComponent } from './stepsnavbar.component';

describe('StepsnavbarComponent', () => {
  let component: StepsnavbarComponent;
  let fixture: ComponentFixture<StepsnavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepsnavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepsnavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
