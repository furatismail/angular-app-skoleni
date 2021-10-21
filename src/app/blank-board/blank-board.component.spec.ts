import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlankBoardComponent } from './blank-board.component';

describe('BlankBoardComponent', () => {
  let component: BlankBoardComponent;
  let fixture: ComponentFixture<BlankBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlankBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlankBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
