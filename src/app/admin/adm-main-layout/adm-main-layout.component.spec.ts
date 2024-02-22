import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmMainLayoutComponent } from './adm-main-layout.component';

describe('AdmMainLayoutComponent', () => {
  let component: AdmMainLayoutComponent;
  let fixture: ComponentFixture<AdmMainLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdmMainLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdmMainLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
