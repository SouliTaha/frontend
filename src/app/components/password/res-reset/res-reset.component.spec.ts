import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResResetComponent } from './res-reset.component';

describe('ResResetComponent', () => {
  let component: ResResetComponent;
  let fixture: ComponentFixture<ResResetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResResetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResResetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
