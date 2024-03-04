import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCuponsComponent } from './list-cupons.component';

describe('ListCuponsComponent', () => {
  let component: ListCuponsComponent;
  let fixture: ComponentFixture<ListCuponsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListCuponsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListCuponsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
