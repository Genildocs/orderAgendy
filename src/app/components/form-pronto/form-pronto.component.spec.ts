import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormProntoComponent } from './form-pronto.component';

describe('FormProntoComponent', () => {
  let component: FormProntoComponent;
  let fixture: ComponentFixture<FormProntoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormProntoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormProntoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
