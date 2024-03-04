import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FEB006Component } from './feb-006.component';

describe('FEB006Component', () => {
  let component: FEB006Component;
  let fixture: ComponentFixture<FEB006Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FEB006Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FEB006Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
