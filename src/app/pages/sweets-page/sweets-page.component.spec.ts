import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SweetsPageComponent } from './sweets-page.component';

describe('SweetsPageComponent', () => {
  let component: SweetsPageComponent;
  let fixture: ComponentFixture<SweetsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SweetsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SweetsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
