import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailZipComponent } from './detail-zip.component';

describe('DetailZipComponent', () => {
  let component: DetailZipComponent;
  let fixture: ComponentFixture<DetailZipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailZipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailZipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
