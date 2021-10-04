import { Injectable } from '@angular/core';
import { NumberModel } from '../models/number.model';

@Injectable({
  providedIn: 'root',
})
export class TransformNumberIntoLetterService {
  private constantes: NumberModel[] = [
    { numero: 1, letra: 'Uno' },
    { numero: 2, letra: 'Dos' },
    { numero: 3, letra: 'Tres' },
    { numero: 4, letra: 'Cuatro' },
    { numero: 5, letra: 'Cinco' },
    { numero: 6, letra: 'Seis' },
    { numero: 7, letra: 'Siete' },
    { numero: 8, letra: 'Ocho' },
    { numero: 9, letra: 'Nueve' },
    { numero: 10, letra: 'Diez' },
    { numero: 11, letra: 'Once' },
    { numero: 12, letra: 'Doce' },
    { numero: 13, letra: 'Trece' },
    { numero: 14, letra: 'Catorce' },
    { numero: 15, letra: 'Quince' },
    { numero: 16, letra: 'Dieciseis' },
    { numero: 17, letra: 'Diecisiete' },
    { numero: 18, letra: 'Dieciocho' },
    { numero: 19, letra: 'Diecinueve' },
    { numero: 20, letra: 'Veinte' },
    { numero: 30, letra: 'Treinta' },
    { numero: 40, letra: 'Cuarenta' },
    { numero: 50, letra: 'Cincuenta' },
    { numero: 60, letra: 'Sesenta' },
    { numero: 70, letra: 'Setenta' },
    { numero: 80, letra: 'Ochenta' },
    { numero: 90, letra: 'Noventa' },
    { numero: 100, letra: 'Cien' },
    { numero: 200, letra: 'Doscientos' },
    { numero: 300, letra: 'Trescientos' },
    { numero: 400, letra: 'Cuatrocientos' },
    { numero: 500, letra: 'Quinientos' },
    { numero: 600, letra: 'Seiscientos' },
    { numero: 700, letra: 'Setecientos' },
    { numero: 800, letra: 'Ochocientos' },
    { numero: 900, letra: 'Novecientos' },
    { numero: 1000, letra: 'Mil' },
  ];

  constructor() {}

  transform(numberUser: number): string {
    let isExiste = this.getNumberLetter(numberUser);
    if (isExiste) {
      return isExiste;
    }

    if (numberUser > 20 && numberUser < 30) {
      return `Veinti${this.transform(numberUser - 20).toLowerCase()}`;
    }

    if (numberUser > 100 && numberUser < 200) {
      return `Ciento ${this.transform(numberUser - 100).toLowerCase()}`;
    }

    let cifras = this.GetCifras(numberUser);
    let unidad = this.getNumberLetter(cifras[0]);
    let decena = this.getNumberLetter(cifras[1]);
    let centena = this.getNumberLetter(cifras[2]);
    let result = '';

    result =
      centena === '' && decena === '' && unidad !== ''
        ? unidad
        : centena === '' && decena !== '' && unidad === ''
        ? decena
        : centena !== '' && decena === '' && unidad === ''
        ? centena
        : centena === '' && decena !== '' && unidad !== ''
        ? `${decena} y ${unidad.toLowerCase()}`
        : centena !== '' && decena !== '' && unidad === ''
        ? `${centena} ${decena.toLowerCase()}`
        : centena !== '' && decena === '' && unidad !== ''
        ? `${centena} ${unidad.toLowerCase()}`
        : centena !== '' && decena !== '' && unidad !== ''
        ? `${centena} ${decena.toLowerCase()} y ${unidad.toLowerCase()}`
        : '';
    return result;
  }

  private getNumberLetter(numberUser: number): string {
    const num = this.constantes.find((n) => n.numero === numberUser);
    return num ? num.letra : '';
  }

  private GetCifras(numberUser: number): number[] {
    let extraerUnidad = numberUser % 10;
    let extraerDecena = (numberUser % 100) - extraerUnidad;
    let extraerCentena = ((numberUser % 1000) - extraerDecena);
    let extraerUnidad2 = extraerCentena % 10;
    extraerCentena -= extraerUnidad2;
    return [extraerUnidad, extraerDecena, extraerCentena];
  }

}
