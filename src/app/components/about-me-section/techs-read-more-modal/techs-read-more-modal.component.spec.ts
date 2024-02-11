import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechsReadMoreModalComponent } from './techs-read-more-modal.component';

describe('TechsReadMoreModalComponent', () => {
  let component: TechsReadMoreModalComponent;
  let fixture: ComponentFixture<TechsReadMoreModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [TechsReadMoreModalComponent]
});
    fixture = TestBed.createComponent(TechsReadMoreModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
