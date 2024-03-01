import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEntregaComponent } from './new-entrega.component';

describe('NewEntregaComponent', () => {
  let component: NewEntregaComponent;
  let fixture: ComponentFixture<NewEntregaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewEntregaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewEntregaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
