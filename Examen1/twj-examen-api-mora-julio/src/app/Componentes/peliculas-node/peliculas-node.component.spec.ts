import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculasNodeComponent } from './peliculas-node.component';

describe('PeliculasNodeComponent', () => {
  let component: PeliculasNodeComponent;
  let fixture: ComponentFixture<PeliculasNodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeliculasNodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeliculasNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
