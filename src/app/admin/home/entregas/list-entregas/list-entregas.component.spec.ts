import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEntregasComponent } from './list-entregas.component';

describe('ListEntregasComponent', () => {
  let component: ListEntregasComponent;
  let fixture: ComponentFixture<ListEntregasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListEntregasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListEntregasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
