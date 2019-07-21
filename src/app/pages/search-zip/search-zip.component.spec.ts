import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchZipComponent } from './search-zip.component';

describe('SearchZipComponent', () => {
  let component: SearchZipComponent;
  let fixture: ComponentFixture<SearchZipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchZipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchZipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
