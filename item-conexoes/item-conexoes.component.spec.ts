import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemConexoesComponent } from './item-conexoes.component';

describe('ItemConexoesComponent', () => {
  let component: ItemConexoesComponent;
  let fixture: ComponentFixture<ItemConexoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItemConexoesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemConexoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
