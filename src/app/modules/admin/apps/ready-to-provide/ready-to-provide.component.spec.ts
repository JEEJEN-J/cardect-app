import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadyToProvideComponent } from './ready-to-provide.component';

describe('ReadyToProvideComponent', () => {
  let component: ReadyToProvideComponent;
  let fixture: ComponentFixture<ReadyToProvideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadyToProvideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadyToProvideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
