import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFerramentaComponent } from './new-ferramenta.component';

describe('NewFerramentaComponent', () => {
  let component: NewFerramentaComponent;
  let fixture: ComponentFixture<NewFerramentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewFerramentaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewFerramentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
