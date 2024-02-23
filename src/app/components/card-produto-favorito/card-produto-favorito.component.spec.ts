import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardProdutoFavoritoComponent } from './card-produto-favorito.component';

describe('CardProdutoFavoritoComponent', () => {
  let component: CardProdutoFavoritoComponent;
  let fixture: ComponentFixture<CardProdutoFavoritoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardProdutoFavoritoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardProdutoFavoritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
