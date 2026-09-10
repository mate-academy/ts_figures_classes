export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';
  getArea(): number; 
}

export class Triangle implements Figure {
  constructor(
    public a: number,
    public b: number,
    public c: number,
    public area: number
  ) {
    if (!this.isValid()) {
      throw new Error('Invalid triangle sides');
    }
  }

  isValid() {
    return (
      this.a > 0 &&
      this.b > 0 &&
      this.c > 0 &&
      this.a + this.b > this.c &&
      this.a + this.c > this.b &&
      this.c + this.b > this.a
    );
  }

  getArea() {
    const pp = (a + b + c / 2);
    this.area = Math.floor(Math.sqrt(pp * (pp - a) * (pp - b) * (pp - c)) * 100) / 100;
    return this.area;
  }
}

export class Circle implements Figure {
  constructor(
    public radius: number,
    public area: number
  ) {
    if (!this.isValid()) {
      throw new Error('Invalid circle radius');
    }
  }

  isValid() {
    return this.radius > 0;
  }

  getArea() {
    this.area = Math.floor((Math.PI * this.radius ** 2) * 100) / 100;
    return this.area;
  }
}

export class Rectangle implements Figure {
  constructor(
    public width: number,
    public height: number,
    public area: number
  ) {
    if (!this.isValid()) {
      throw new Error('Invalid rectangle sides');
    }
  }

  isValid() {
    return this.width > 0 && this.height > 0;
  }

  getArea() {
    this.area = Math.floor(this.width * this. height * 100) / 100;
    return this.area;
  }
}

export function getInfo(figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.area}`;
}
