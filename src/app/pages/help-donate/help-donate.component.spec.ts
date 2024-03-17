import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpDonateComponent } from './help-donate.component';

describe('HelpDonateComponent', () => {
  let component: HelpDonateComponent;
  let fixture: ComponentFixture<HelpDonateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelpDonateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HelpDonateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
