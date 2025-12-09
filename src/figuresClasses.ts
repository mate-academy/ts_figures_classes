export interface Figure {
  color: 'red' | 'green' | 'blue'
  shape: 'triangle' | 'circle' | 'rectangle'
  getArea(): number
}

export class Triangle implements Figure {
  shape: 'triangle' = 'triangle'

  constructor(
    public color: 'red' | 'green' | 'blue',
    public a: number,
    public b: number,
    public c: number
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('All triangle sides must be positive numbers')
    }

    let maiorLado: number
    let menor1: number
    let menor2: number

    if (a >= b && a >= c) {
      maiorLado = a
      menor1 = b
      menor2 = c
    } else if (b >= a && b >= c) {
      maiorLado = b
      menor1 = a
      menor2 = c
    } else {
      maiorLado = c
      menor1 = a
      menor2 = b
    }

    if (maiorLado >= menor1 + menor2) {
      throw new Error(`The sides ${a}, ${b}, ${c} cannot form a triangle`)
    }
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2

    return Math.floor(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)) * 100) / 100
  }
}

export class Circle implements Figure {
  shape: 'circle' = 'circle'

  constructor(
    public color: 'red' | 'green' | 'blue',
    public radius: number
  ) {
    if (radius <= 0) {
      throw new Error('Radius must be greater than 0')
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius * this.radius * 100) / 100
  }
}

export class Rectangle implements Figure {
  shape: 'rectangle' = 'rectangle'

  constructor(
    public color: 'red' | 'green' | 'blue',
    public width: number,
    public height: number
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Width and height must be greater than 0')
    }
  }

  getArea(): number {
    return Math.floor(this.width * this.height * 100) / 100
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`
}
