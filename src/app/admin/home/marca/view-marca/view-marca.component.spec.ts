import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMarcaComponent } from './view-marca.component';

describe('ViewMarcaComponent', () => {
  let component: ViewMarcaComponent;
  let fixture: ComponentFixture<ViewMarcaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewMarcaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewMarcaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
