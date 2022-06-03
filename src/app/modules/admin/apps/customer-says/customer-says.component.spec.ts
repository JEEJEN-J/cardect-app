import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerSaysComponent } from './customer-says.component';

describe('CustomerSaysComponent', () => {
  let component: CustomerSaysComponent;
  let fixture: ComponentFixture<CustomerSaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerSaysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerSaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
