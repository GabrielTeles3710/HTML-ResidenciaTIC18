import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FEB008Component } from './feb-008.component';

describe('FEB008Component', () => {
  let component: FEB008Component;
  let fixture: ComponentFixture<FEB008Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FEB008Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FEB008Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
