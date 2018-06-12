import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashjsPlayerComponent } from './dashjs-player.component';

describe('DashjsPlayerComponent', () => {
  let component: DashjsPlayerComponent;
  let fixture: ComponentFixture<DashjsPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashjsPlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashjsPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
