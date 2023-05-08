import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsShowComponent } from './details-show.component';

describe('DetailsShowComponent', () => {
  let component: DetailsShowComponent;
  let fixture: ComponentFixture<DetailsShowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsShowComponent]
    });
    fixture = TestBed.createComponent(DetailsShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
