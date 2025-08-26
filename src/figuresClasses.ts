export interface Figure {
  color: string;
  shape: string;
  getArea(): number;
}

// ✅ Classe Triângulo
export class Triangle implements Figure {
  color: string;

  shape = 'triangle';

  a: number;

  b: number;

  c: number;

  constructor(color: string, a: number, b: number, c: number) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('All sides must be positive numbers');
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('Invalid triangle sides');
    }
    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.round(area * 100) / 100;
  }
}

// ✅ Classe Círculo
export class Circle implements Figure {
  color: string;

  shape = 'circle';

  radius: number;

  constructor(color: string, radius: number) {
    if (radius <= 0) {
      throw new Error('Invalid radius: must be > 0');
    }
    this.color = color;
    this.radius = radius;
  }

  getArea(): number {
    const area = Math.PI * this.radius ** 2;

    return Math.round(area * 100) / 100;
  }
}

// ✅ Classe Retângulo
export class Rectangle implements Figure {
  color: string;

  shape = 'rectangle';

  width: number;

  height: number;

  constructor(color: string, width: number, height: number) {
    if (width <= 0 || height <= 0) {
      throw new Error('Invalid dimensions: width and height must be > 0');
    }
    this.color = color;
    this.width = width;
    this.height = height;
  }

  getArea(): number {
    const area = this.width * this.height;

    return Math.round(area * 100) / 100;
  }
}

// ✅ Função utilitária (exportada também)
export function getInfo(fig: Figure): string {
  const area = fig.getArea();

  if (Number.isInteger(area)) {
    return `A ${fig.color} ${fig.shape} - área: ${area}`;
  }

  return `A ${fig.color} ${fig.shape} - área: ${area.toFixed(2)}`;
}
