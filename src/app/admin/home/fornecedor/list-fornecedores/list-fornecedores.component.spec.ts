import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFornecedoresComponent } from './list-fornecedores.component';

describe('ListFornecedoresComponent', () => {
  let component: ListFornecedoresComponent;
  let fixture: ComponentFixture<ListFornecedoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListFornecedoresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListFornecedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
