import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoSetorComponent } from './novo-setor.component';

describe('NovoSetorComponent', () => {
  let component: NovoSetorComponent;
  let fixture: ComponentFixture<NovoSetorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovoSetorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NovoSetorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
