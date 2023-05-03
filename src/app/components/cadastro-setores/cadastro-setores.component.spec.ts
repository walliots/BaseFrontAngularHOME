import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroSetoresComponent } from './cadastro-setores.component';

describe('CadastroSetoresComponent', () => {
  let component: CadastroSetoresComponent;
  let fixture: ComponentFixture<CadastroSetoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroSetoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroSetoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
