import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValoracionUsuarioComponent } from './valoracion-usuario.component';

describe('ValoracionUsuarioComponent', () => {
  let component: ValoracionUsuarioComponent;
  let fixture: ComponentFixture<ValoracionUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValoracionUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValoracionUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
