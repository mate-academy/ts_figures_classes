export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';
  getArea(): number;
}

export class Triangle implements Figure {
  shape: 'triangle';

  color: 'red' | 'green' | 'blue';

  a: number;

  b: number;

  c: number;

  constructor(
    color: 'red' | 'green' | 'blue',
    a: number,
    b: number,
    c: number,
  ) {
    // aqui uso o this, já que por norma os atributos são públicos
    this.shape = 'triangle';
    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;
    // abaixo é verificado se algum lado é igual a zero

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Invalid Data');
    }
    // se algum lado for maior que a soma de dois lados, não funcionará

    if (!(a < b + c && b < a + c && c < a + b)) {
      throw new Error('This is not a triangle');
    }
  }

  getArea(): number {
    // aqui calculo a área do triângulo
    const s = (this.a + this.b + this.c) / 2;
    // aqui uso a fórmula de Heron
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
    // aqui arrendondo o valor para um dígito, obedecendo ao requisito da tarefa

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: 'circle';

  color: 'red' | 'green' | 'blue';

  radius: number;

  constructor(color: 'red' | 'green' | 'blue', radius: number) {
    this.shape = 'circle';
    this.color = color;
    this.radius = radius;
    // se o raio foi igual ou menor que zero, não funcionará

    if (radius <= 0) {
      throw new Error('Invalid Data');
    }
  }

  getArea(): number {
    // aqui aplico a fórmula para descobrir a áreea do círculo
    const circleArea = Math.PI * this.radius * this.radius;

    return Math.floor(circleArea * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: 'rectangle';

  color: 'red' | 'green' | 'blue';

  width: number;

  height: number;

  constructor(color: 'red' | 'green' | 'blue', width: number, height: number) {
    this.shape = 'rectangle';
    this.color = color;
    this.width = width;
    this.height = height;
    // se zero ou menor que zero, os dados não são válidos

    if (width <= 0 || height <= 0) {
      throw new Error('Invalid Data');
    }
  }

  getArea(): number {
    // aplicação da fórmula para descobrir a área do retângulo
    const areaRectangle = this.width * this.height;

    return Math.floor(areaRectangle * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
