import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFerramentaComponent } from './edit-ferramenta.component';

describe('EditFerramentaComponent', () => {
  let component: EditFerramentaComponent;
  let fixture: ComponentFixture<EditFerramentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditFerramentaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditFerramentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
