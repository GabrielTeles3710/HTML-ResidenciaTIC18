import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadjsonComponent } from './readjson.component';

describe('ReadjsonComponent', () => {
  let component: ReadjsonComponent;
  let fixture: ComponentFixture<ReadjsonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReadjsonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReadjsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
