// Define the Figure interface
interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';
  getArea(): number;
}

// Define the Triangle class
class Triangle implements Figure {
  shape: 'triangle' = 'triangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public a: number,
    public b: number,
    public c: number
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error(`Sides must be greater than 0. Provided: a=${a}, b=${b}, c=${c}`);
    }
    if (a >= b + c || b >= a + c || c >= a + b) {
      throw new Error(`Sides ${a}, ${b}, and ${c} can't form a triangle.`);
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2; // Semi-perimeter
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c)); // Heron's formula
    return Math.floor(area * 100) / 100; // Round down to hundredths
  }
}

// Define the Circle class
class Circle implements Figure {
  shape: 'circle' = 'circle';

  constructor(public color: 'red' | 'green' | 'blue', public radius: number) {
    if (radius <= 0) {
      throw new Error(`Radius must be greater than 0. Provided: radius=${radius}`);
    }
  }

  getArea(): number {
    const area = Math.PI * Math.pow(this.radius, 2); // Circle area formula
    return Math.floor(area * 100) / 100; // Round down to hundredths
  }
}

// Define the Rectangle class
class Rectangle implements Figure {
  shape: 'rectangle' = 'rectangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public width: number,
    public height: number
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error(`Width and height must be greater than 0. Provided: width=${width}, height=${height}`);
    }
  }

  getArea(): number {
    const area = this.width * this.height; // Rectangle area formula
    return Math.floor(area * 100) / 100; // Round down to hundredths
  }
}

// Define the getInfo function
function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
