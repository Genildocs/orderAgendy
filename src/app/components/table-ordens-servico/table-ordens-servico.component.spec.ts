import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableOrdensServicoComponent } from './table-ordens-servico.component';

describe('TableOrdensServicoComponent', () => {
  let component: TableOrdensServicoComponent;
  let fixture: ComponentFixture<TableOrdensServicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableOrdensServicoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableOrdensServicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
