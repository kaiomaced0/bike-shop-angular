import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCupomComponent } from './new-cupom.component';

describe('NewCupomComponent', () => {
  let component: NewCupomComponent;
  let fixture: ComponentFixture<NewCupomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewCupomComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewCupomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
