export interface Figure {
  shape: string;
  color: string;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: string = 'triangle';

  color: string;

  private a: number;

  private b: number;

  private c: number;

  constructor(color: string, a: number, b: number, c: number) {
    // Validar que todos los lados sean positivos
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('All sides must be positive numbers');
    }

    // Validar que sea un triángulo
    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error(
        `Invalid triangle: the sum of any two sides must be greater than ` +
          `the third side`,
      );
    }

    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;
  }

  getArea(): number {
    // Usar la fórmula de Herón
    const s = (this.a + this.b + this.c) / 2; // semiperímetro
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.floor(area * 100) / 100; // redondear hacia abajo a centésimas
  }
}

export class Circle implements Figure {
  shape: string = 'circle';

  color: string;

  private radius: number;

  constructor(color: string, radius: number) {
    // Validar que el radio sea positivo
    if (radius <= 0) {
      throw new Error('Radius must be a positive number');
    }

    this.color = color;
    this.radius = radius;
  }

  getArea(): number {
    const area = Math.PI * this.radius * this.radius;

    return Math.floor(area * 100) / 100; // redondear hacia abajo a centésimas
  }
}

export class Rectangle implements Figure {
  shape: string = 'rectangle';

  color: string;

  private width: number;

  private height: number;

  constructor(color: string, width: number, height: number) {
    // Validar que ancho y alto sean positivos
    if (width <= 0 || height <= 0) {
      throw new Error('Width and height must be positive numbers');
    }

    this.color = color;
    this.width = width;
    this.height = height;
  }

  getArea(): number {
    const area = this.width * this.height;

    return Math.floor(area * 100) / 100; // redondear hacia abajo a centésimas
  }
}

export function getInfo(figure: Figure): string {
  const area = figure.getArea();

  return `A ${figure.color} ${figure.shape} - ${area}`;
}
