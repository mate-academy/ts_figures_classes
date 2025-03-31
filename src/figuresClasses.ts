type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  public shape: Shape = 'triangle';

  public color: Color;

  constructor(
    color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    // Correção 1: Removido o ! da verificação
    if ([a, b, c].some((side) => typeof side !== 'number' || isNaN(side))) {
      throw new Error('All sides must be valid numbers');
    }

    // Correção 2: Removido o ! da verificação de valores positivos
    if ([a, b, c].some((side) => side <= 0)) {
      throw new Error('All sides must be positive numbers');
    }

    // Validação da desigualdade triangular
    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('Triangle inequality violated');
    }
    this.a = a;
    this.b = b;
    this.c = c;
    this.color = color;
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;

    return (
      Math.round(
        Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c)) * 100,
      ) / 100
    );
  }
}

export class Circle implements Figure {
  public shape: Shape = 'circle';

  public color: Color;

  constructor(
    color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('The radius must be a positive number.');
    }
    this.radius = radius;
    this.color = color;
  }

  getArea(): number {
    const areaCircle = Math.PI * Math.pow(this.radius, 2);
    const round = (areaCircle * 100) / 100;

    return parseFloat(round.toFixed(2));
  }
}

export class Rectangle implements Figure {
  public shape: Shape = 'rectangle';

  public color: Color;

  constructor(
    color: Color,
    public base: number,
    public height: number,
  ) {
    // Verifica se base é um número válido e positivo
    if (typeof base !== 'number' || isNaN(base) || base <= 0) {
      throw new Error(`Base must be a positive number. Received: ${base}`);
    }

    // Verifica se height é um número válido e positivo
    if (typeof height !== 'number' || isNaN(height) || height <= 0) {
      throw new Error(`Height must be a positive number. Received: ${height}`);
    }
    this.base = base;
    this.height = height;
    this.color = color;
  }

  getArea(): number {
    // Cálculo seguro, pois os valores já foram validados no construtor
    return Math.round(this.base * this.height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
