import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardItemPedidoComponent } from './card-item-pedido.component';

describe('CardItemPedidoComponent', () => {
  let component: CardItemPedidoComponent;
  let fixture: ComponentFixture<CardItemPedidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardItemPedidoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardItemPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
