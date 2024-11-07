import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemVagasComponent } from './item-vagas.component';

describe('ItemVagasComponent', () => {
  let component: ItemVagasComponent;
  let fixture: ComponentFixture<ItemVagasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItemVagasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemVagasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
