import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TraductorNumerosLetrasPage } from './traductor-numeros-letras.page';

describe('TraductorNumerosLetrasPage', () => {
  let component: TraductorNumerosLetrasPage;
  let fixture: ComponentFixture<TraductorNumerosLetrasPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TraductorNumerosLetrasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TraductorNumerosLetrasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
