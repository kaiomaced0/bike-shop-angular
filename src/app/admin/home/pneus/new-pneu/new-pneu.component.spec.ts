import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPneuComponent } from './new-pneu.component';

describe('NewPneuComponent', () => {
  let component: NewPneuComponent;
  let fixture: ComponentFixture<NewPneuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewPneuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewPneuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
