import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnderecoItemComponent } from './endereco-item.component';

describe('EnderecoItemComponent', () => {
  let component: EnderecoItemComponent;
  let fixture: ComponentFixture<EnderecoItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnderecoItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EnderecoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
