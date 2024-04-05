import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFerramentaComponent } from './view-ferramenta.component';

describe('ViewFerramentaComponent', () => {
  let component: ViewFerramentaComponent;
  let fixture: ComponentFixture<ViewFerramentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewFerramentaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewFerramentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
