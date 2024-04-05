import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBikeComponent } from './new-bike.component';

describe('NewBikeComponent', () => {
  let component: NewBikeComponent;
  let fixture: ComponentFixture<NewBikeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewBikeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewBikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
