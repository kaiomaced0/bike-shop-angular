import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPneuComponent } from './view-pneu.component';

describe('ViewPneuComponent', () => {
  let component: ViewPneuComponent;
  let fixture: ComponentFixture<ViewPneuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewPneuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewPneuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
