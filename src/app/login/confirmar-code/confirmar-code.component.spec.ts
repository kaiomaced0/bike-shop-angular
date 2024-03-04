import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmarCodeComponent } from './confirmar-code.component';

describe('ConfirmarCodeComponent', () => {
  let component: ConfirmarCodeComponent;
  let fixture: ComponentFixture<ConfirmarCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmarCodeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConfirmarCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
