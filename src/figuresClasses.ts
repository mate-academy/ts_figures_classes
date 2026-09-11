export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';
  getArea(): number; 
}

export class Triangle implements Figure {
  public shape: 'triangle' = 'triangle';
  
  constructor(
    public color: 'red' | 'green' | 'blue',
    public a: number,
    public b: number,
    public c: number
  ) {
    if (!this.isValid()) {
      throw new Error(
        'Triangle sides must be positive and satisfy triangle inequality theorem'
      );
    }
  }

  private isValid(): boolean {
    return (
      this.a > 0 &&
      this.b > 0 &&
      this.c > 0 &&
      this.a + this.b > this.c &&
      this.a + this.c > this.b &&
      this.c + this.b > this.a
    );
  }

  getArea(): number {
    const pp = (this.a + this.b + this.c) / 2;

    return Math.floor(Math.sqrt(pp * (pp - this.a) * (pp - this.b) * (pp - this.c)) * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape: 'circle' = 'circle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public radius: number
  ) {
    if (!this.isValid()) {
      throw new Error('Circle radius must be a positive number');
    }
  }

  private isValid(): boolean {
    return this.radius > 0;
  }

  getArea(): number {
    return Math.floor((Math.PI * this.radius ** 2) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: 'rectangle' = 'rectangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public width: number,
    public height: number
  ) {
    if (!this.isValid()) {
      throw new Error('Rectangle width and height must be positive numbers');
    }
  }

  private isValid(): boolean {
    return this.width > 0 && this.height > 0;
  }

  getArea(): number {
    return Math.floor(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
