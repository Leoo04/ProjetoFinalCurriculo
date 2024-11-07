import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCriativoComponent } from './item-criativo.component';

describe('ItemCriativoComponent', () => {
  let component: ItemCriativoComponent;
  let fixture: ComponentFixture<ItemCriativoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItemCriativoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemCriativoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
