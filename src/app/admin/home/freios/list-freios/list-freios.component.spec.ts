import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFreiosComponent } from './list-freios.component';

describe('ListFreiosComponent', () => {
  let component: ListFreiosComponent;
  let fixture: ComponentFixture<ListFreiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListFreiosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListFreiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
