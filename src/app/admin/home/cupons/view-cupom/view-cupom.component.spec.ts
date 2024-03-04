import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCupomComponent } from './view-cupom.component';

describe('ViewCupomComponent', () => {
  let component: ViewCupomComponent;
  let fixture: ComponentFixture<ViewCupomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewCupomComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewCupomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
