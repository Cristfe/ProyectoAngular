import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValoracionProductoComponent } from './valoracion-producto.component';

describe('ValoracionProductoComponent', () => {
  let component: ValoracionProductoComponent;
  let fixture: ComponentFixture<ValoracionProductoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValoracionProductoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValoracionProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
