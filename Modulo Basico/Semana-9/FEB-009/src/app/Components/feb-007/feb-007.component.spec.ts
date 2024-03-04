import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FEB007Component } from './feb-007.component';

describe('FEB007Component', () => {
  let component: FEB007Component;
  let fixture: ComponentFixture<FEB007Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FEB007Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FEB007Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
