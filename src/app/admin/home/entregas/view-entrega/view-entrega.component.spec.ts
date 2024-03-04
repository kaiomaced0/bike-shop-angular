import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEntregaComponent } from './view-entrega.component';

describe('ViewEntregaComponent', () => {
  let component: ViewEntregaComponent;
  let fixture: ComponentFixture<ViewEntregaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewEntregaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewEntregaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
