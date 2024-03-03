import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValuePropertieComponent } from './value-propertie.component';

describe('ValuePropertieComponent', () => {
  let component: ValuePropertieComponent;
  let fixture: ComponentFixture<ValuePropertieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ValuePropertieComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ValuePropertieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
