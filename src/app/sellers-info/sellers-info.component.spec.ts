import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellersInfoComponent } from './sellers-info.component';

describe('SellersInfoComponent', () => {
  let component: SellersInfoComponent;
  let fixture: ComponentFixture<SellersInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellersInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellersInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
