import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCurriculosComponent } from './item-curriculos.component';

describe('ItemCurriculosComponent', () => {
  let component: ItemCurriculosComponent;
  let fixture: ComponentFixture<ItemCurriculosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItemCurriculosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemCurriculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
