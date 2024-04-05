import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPneuComponent } from './edit-pneu.component';

describe('EditPneuComponent', () => {
  let component: EditPneuComponent;
  let fixture: ComponentFixture<EditPneuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditPneuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditPneuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
