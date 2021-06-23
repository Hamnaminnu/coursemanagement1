import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormmessageComponent } from './formmessage.component';

describe('FormmessageComponent', () => {
  let component: FormmessageComponent;
  let fixture: ComponentFixture<FormmessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormmessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormmessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
