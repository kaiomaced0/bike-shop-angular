import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCupomComponent } from './edit-cupom.component';

describe('EditCupomComponent', () => {
  let component: EditCupomComponent;
  let fixture: ComponentFixture<EditCupomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditCupomComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditCupomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
