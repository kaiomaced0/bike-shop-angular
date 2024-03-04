import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjustesHomeComponent } from './ajustes-home.component';

describe('AjustesHomeComponent', () => {
  let component: AjustesHomeComponent;
  let fixture: ComponentFixture<AjustesHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AjustesHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AjustesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
