import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEntregaComponent } from './edit-entrega.component';

describe('EditEntregaComponent', () => {
  let component: EditEntregaComponent;
  let fixture: ComponentFixture<EditEntregaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditEntregaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditEntregaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
