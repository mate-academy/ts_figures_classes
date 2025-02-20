interface Figure {
  shape: string;
  color: string;
  getArea(): number;
  getInfo(): string;
}

//TRIANGULO

class Triangle implements Figure {
  shape: string = "triangle";
  color: string;
  a: number;
  b: number;
  c: number;

  // construtor da classe Triangle

  constructor(a: number, b: number, c: number, color: string) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error("Side lengths must be greater than 0");
    }
    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error("The sum of any two sides must be greater than the third side");
    }
    this.a = a;
    this.b = b;
    this.c = c;
    this.shape = "triangle";
  if (!['red', 'green', 'blue'].includes(color)) {
    throw new Error('Cor inválida. As cores válidas são vermelho, verde ou azul.');
  }
  this.color = color;
  }
getArea(): number {
  const s = (this.a + this.b + this.c) / 2;
  const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
  return Math.floor(area * 100) / 100; //
}
getInfo(): string {
  return `A ${this.color} triangle - ${this.getArea()} `
}
}

// CIRCULO

  class Circle implements Figure{
    shape: string = "circle";
    color: string;
    radius: number;

    // CONSTRUCTOR DA CLASS CIRCLE

constructor(radius: number, color: string){
  if(radius <= 0){
    throw new Error("Side lengths must be greater than 0")
  }
  this.radius = radius;
  this.shape = 'circle';

  if (!['red', 'green', 'blue'].includes(color)) {
    throw new Error('Cor inválida. As cores válidas são vermelho, verde ou azul.');
  }
  this.color = color;
}
  getArea(): number{
    const area = Math.PI * Math.pow(this.radius, 2);
    return Math.floor(area * 100) / 100;
  }
  getInfo(): string {
    return `A ${this.color} circle - ${this.getArea()}`
  }

  }

  // RETÂNGULO

  class Rectangle implements Figure{
    shape: string = "rectangle";
    color: string;
    width: number;
    height: number;

// CONTRUTOR DA CLASSE RETÂNGULO:

    constructor(width: number, height: number, color: string){
      if(width <= 0 || height <= 0){
        throw new Error("Side lengths must be greater than 0")
      }
      this.width = width;
      this.height = height;

      if (!['red', 'green', 'blue'].includes(color)) {
        throw new Error('Cor inválida. As cores válidas são vermelho, verde ou azul.');
      }
      this.color = color;
    }

    getArea(): number {
      const area = this.width * this.height;
      return Math.floor(area * 100) / 100;
    }
    getInfo(): string {
      return `A ${this.color} rectangle - ${this.getArea()}`
    }
    }

export interface Figure {
  shape: string;
  color: string;
  getArea(): number;
  getInfo(): string;
}

export class Triangle implements Figure {shape: string = "triangle";
  color: string;
  a: number;
  b: number;
  c: number;

  // construtor da classe Triangle

  constructor(a: number, b: number, c: number, color: string) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error("Side lengths must be greater than 0");
    }
    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error("The sum of any two sides must be greater than the third side");
    }
    this.a = a;
    this.b = b;
    this.c = c;
    this.shape = "triangle";
  if (!['red', 'green', 'blue'].includes(color)) {
    throw new Error('Cor inválida. As cores válidas são vermelho, verde ou azul.');
  }
  this.color = color;
  }
getArea(): number {
  const s = (this.a + this.b + this.c) / 2;
  const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
  return Math.floor(area * 100) / 100; //
}
getInfo(): string {
  return `A ${this.color} triangle - ${this.getArea()} `
}}

export class Circle implements Figure {
  shape: string = "circle";
  color: string;
  radius: number;

   // CONSTRUCTOR DA CLASS CIRCLE

constructor(radius: number, color: string){
  if(radius <= 0){
    throw new Error("Side lengths must be greater than 0")
  }
  this.radius = radius;
  this.shape = 'circle';

  if (!['red', 'green', 'blue'].includes(color)) {
    throw new Error('Cor inválida. As cores válidas são vermelho, verde ou azul.');
  }
  this.color = color;
}
  getArea(): number{
    const area = Math.PI * Math.pow(this.radius, 2);
    return Math.floor(area * 100) / 100;
  }
  getInfo(): string {
    return `A ${this.color} circle - ${this.getArea()}`
  }
}

export class Rectangle implements Figure {
  shape: string = "rectangle";
  color: string;
  width: number;
  height: number;

// CONTRUTOR DA CLASSE RETÂNGULO:

  constructor(width: number, height: number, color: string){
    if(width <= 0 || height <= 0){
      throw new Error("Side lengths must be greater than 0")
    }
    this.width = width;
    this.height = height;

    if (!['red', 'green', 'blue'].includes(color)) {
      throw new Error('Cor inválida. As cores válidas são vermelho, verde ou azul.');
    }
    this.color = color;
  }

  getArea(): number {
    const area = this.width * this.height;
    return Math.floor(area * 100) / 100;
  }
  getInfo(): string {
    return `A ${this.color} rectangle - ${this.getArea()}`
  }}

export function getInfo(figure: any): string {
  const shape = figure.shape;
  const color = figure.color;
  const area = figure.getArea();


  return `A ${this.color} ${this.shape} - ${this.area}`
}
