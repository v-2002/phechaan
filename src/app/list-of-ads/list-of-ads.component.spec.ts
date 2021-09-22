import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfAdsComponent } from './list-of-ads.component';

describe('ListOfAdsComponent', () => {
  let component: ListOfAdsComponent;
  let fixture: ComponentFixture<ListOfAdsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfAdsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfAdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
