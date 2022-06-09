import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numeros-letras',
  templateUrl: './numeros-letras.page.html',
  styleUrls: ['./numeros-letras.page.scss'],
})
export class NumerosLetrasPage implements OnInit {

  num: number;
  numString: string;
  numInLetters: string;
  cantDigitos: number;
  show: boolean;

  translate() {

    this.numString = this.num.toString()
    this.cantDigitos = this.numString.length;

    if (this.num >= 0 && this.num <= 1000) {

      switch (this.cantDigitos) {
        case 1:
          this.numInLetters = this.calcularUnidad(this.numString).replace(/^\w/, (c) => c.toUpperCase());
          this.show = true;
          break;
        case 2:
          this.numInLetters = this.calcularDecena(this.numString).replace(/^\w/, (c) => c.toUpperCase());
          this.show = true
          break;
        case 3:
          this.numInLetters = this.calcularCentena(this.numString).replace(/^\w/, (c) => c.toUpperCase());
          this.show = true
          break;
        case 4:
          this.numInLetters = this.key.M.replace(/^\w/, (c) => c.toUpperCase());
          this.show = true
          break;
      }
    } else {
      console.log('Ingresa un numero valido')
    }
  }

  calcularUnidad(numString: string): string {
    return this.key.U[numString];
  }

  calcularDecena(numString: string): string{
    let firstCaracter: string = numString.charAt(0);
    let secondCaracter: string = numString.charAt(1);

    if (firstCaracter == '1') {                 /* Calcula las decenas de 10 */
      return this.key.D[1][numString]
    } else if (firstCaracter == '2') {          /* Calcula 20 */
      if (secondCaracter == '0') {
        return this.key.D[2][20]                /* Calcula las decenas de 20 */
      } else {
        return this.key.D[2]['_2X'] + this.calcularUnidad(secondCaracter);
      }
    } else {
      for (let i = 3; i <= 9; i++) {            /* Calcula las decenas de 30 a 90*/
        if (firstCaracter == i.toString()) {
          if (secondCaracter == '0') {          /* Calcula si la decena no tiene unidad */
            return this.key.D[i];
          } else {                              /* Calcula las decena tiene unidad */
            return this.key.D[i] + ' y ' + this.calcularUnidad(secondCaracter)
          }
        }
      }
    }
  }

  calcularCentena(numString: string): string {
    let firstCaracter: string = numString.charAt(0)
    let secondCaracter: string = numString.charAt(1)
    let thirdCaracter: string = numString.charAt(2)

    if (numString === '100') {                  /* Calcular si es cien */
      return this.key.C['_100']
    } else if ( secondCaracter === '0' && thirdCaracter === '0'){ /* Calcular centenas sin decenas ni unidades */
      return this.key.C[firstCaracter]          
    } else if (secondCaracter !== '0'){       /* Calcular centenas con decenas */
      return this.key.C[firstCaracter] + ' ' + this.calcularDecena(secondCaracter+thirdCaracter);
    } else if (secondCaracter === '0' && thirdCaracter !== '0'){ /* Calcular centenas sin decenas pero con unidades */
      return this.key.C[firstCaracter] + ' ' + this.calcularUnidad(thirdCaracter)
    }
  }

  key = {

    U: {
      0: 'cero',
      1: 'uno',
      2: 'dos',
      3: 'tres',
      4: 'cuatro',
      5: 'cinco',
      6: 'seis',
      7: 'siete',
      8: 'ocho',
      9: 'nueve',
    },

    D: {
      1: {
        10: 'diez',
        11: 'once',
        12: 'doce',
        13: 'trece',
        14: 'catorce',
        15: 'quince',
        16: 'dieciseis',
        17: 'diecisiete',
        18: 'dieciocho',
        19: 'diecinueve',
      },

      2: {
        20: 'veinte',
        _2X: 'veinti'
      },

      3: 'treinta',
      4: 'cuarenta',
      5: 'cincuenta',
      6: 'sesenta',
      7: 'setenta',
      8: 'ochenta',
      9: 'noventa',
    },

    C: {
      _100: 'cien',
      1: 'ciento',
      2: 'doscientos',
      3: 'trescientos',
      4: 'cuatrocientos',
      5: 'quinientos',
      6: 'seiscientos',
      7: 'setecientos',
      8: 'ochocientos',
      9: 'novecientos',
    },

    M: 'mil'
  }

  constructor() { }

  ngOnInit() {
  }

}
