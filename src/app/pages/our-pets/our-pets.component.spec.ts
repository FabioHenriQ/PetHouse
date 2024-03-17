import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurPetsComponent } from './our-pets.component';

describe('OurPetsComponent', () => {
  let component: OurPetsComponent;
  let fixture: ComponentFixture<OurPetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurPetsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OurPetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
