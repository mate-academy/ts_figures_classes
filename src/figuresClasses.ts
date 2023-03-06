type Shape = 'triangle' | 'circle' | 'rectangle';

type Color = 'red' |'green' |'blue';

export interface Figure {
  shape: Shape[],
  color: Color[],
}

export class Triangle {
  constructor(
    public shape: string[],
    public area: number,
    public color: string[],
  ) {
    this.area = this.getArea;
    this.shape = shape;
    this.color = color;
  }
}

export class Circle {
  constructor(
    public shape: string[],
    public color: string[],
    public area: number,
  ) {
    this.shape = shape;
    this.color = color;
  }
}

export class Rectangle {
  constructor(
    public shape: string[],
    public color: string[],
    public area: number,
  ) {
    this.shape = shape;
    this.color = color;
  }
}

export function getInfo(figure: any): {} {
  getArea() {
    if (this.shape === 'rectangle') {
      return (a * b).toFixed(2);
    }
    if (this.shape === 'triangle') {
      if(a + b > c || a + c > b || b + c > a) {
        return (a * b).toFixed(2);
      }
      return 'your error message';
    }
    if (this.shape === 'circle') {
      return (Math.PI * r**2).toFixed(2);
    }
  }

  return `A ${figure.color} ${figure.shape} - ${figure.getArea}`

}
