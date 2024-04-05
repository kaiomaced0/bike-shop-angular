import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFreioComponent } from './edit-freio.component';

describe('EditFreioComponent', () => {
  let component: EditFreioComponent;
  let fixture: ComponentFixture<EditFreioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditFreioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditFreioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
