import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoldsHomeComponent } from './molds-home.component';

describe('MoldsHomeComponent', () => {
  let component: MoldsHomeComponent;
  let fixture: ComponentFixture<MoldsHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoldsHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoldsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
