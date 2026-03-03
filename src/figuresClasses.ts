// Definição do tipo 'Shape' que aceita apenas 'triangle', 'circle' ou 'rectangle'.
// Isso garante que a propriedade shape esteja sempre consistente.
type Shape = 'triangle' | 'circle' | 'rectangle';

// Definição do tipo 'Color' que aceita apenas 'red', 'green' ou 'blue'.
type Color = 'red' | 'green' | 'blue';

// Interface 'Figure' que descreve o contrato comum para todos os objetos geométricos.
// Toda classe que representa uma figura deve implementar estas propriedades e métodos:
// - shape: O tipo de geometria (triângulo, círculo ou retângulo).
// - color: A cor da figura.
// - getArea(): Método obrigatório para calcular e retornar a área.
export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

// Classe 'Triangle' que implementa a interface 'Figure'.
// Representa um triângulo definido por seus três lados (a, b, c).
export class Triangle implements Figure {
  // A propriedade shape é readonly e sempre será 'triangle'.
  readonly shape: Shape = 'triangle';

  // Propriedades públicas de cálculo: a, b, e c são os comprimentos dos lados.
  constructor(
    public readonly color: Color,      // Cor do triângulo
    public readonly a: number,         // Comprimento do lado a
    public readonly b: number,         // Comprimento do lado b
    public readonly c: number,         // Comprimento do lado c
  ) {
    // Validação 1: Lados devem ser positivos.
    // Se qualquer lado for menor ou igual a zero, é impossível formar um triângulo físico válido.
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('All sides must be positive numbers');
    }

    // Validação 2: Desigualdade triangular.
    // Para três segmentos formarem um triângulo, o segmento mais longo deve ser menor
    // que a soma dos outros dois. Caso contrário, não há espaço para fechar a figura.
    // Exemplo: Se lados são 1, 2 e 5, então 2 + 1 = 3, que é menor que 5 -> Falha na formação.
    if (a >= b + c || b >= a + c || c >= a + b) {
      throw new Error("Sides can't form a triangle");
    }
  }

  // Método para calcular a área do triângulo usando a Fórmula de Heron.
  // A Fórmula de Heron é baseada no semiperímetro (p) e nos lados do triângulo.
  // Área = sqrt(p * (p-a) * (p-b) * (p-c))
  getArea(): number {
    const p = (this.a + this.b + this.c) / 2; // Calcula o semiperímetro
    const area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

    // O resultado é arredondado para 2 casas decimais.
    // Multiplicar por 100, aplicar floor (arredondar para baixo inteiro), e dividir por 100.
    return Math.floor(area * 100) / 100;
  }
}

// Classe 'Circle' que implementa a interface 'Figure'.
// Representa um círculo definido apenas pelo seu raio.
export class Circle implements Figure {
  // A propriedade shape é readonly e sempre será 'circle'.
  readonly shape: Shape = 'circle';

  constructor(
    public readonly color: Color,      // Cor do círculo
    public readonly radius: number,    // Raio do círculo
  ) {
    // Validação: O raio deve ser um número positivo.
    // Um raio de zero ou negativo não tem sentido físico para uma área calculada.
    if (radius <= 0) {
      throw new Error('Radius must be a positive number');
    }
  }

  // Método para calcular a área do círculo.
  // Fórmula: Área = π * r²
  getArea(): number {
    const results = Math.PI * this.radius ** 2;

    // Arredonda o resultado para 2 casas decimais, assim como na classe Triangle.
    return Math.floor(results * 100) / 100;
  }
}

// Classe 'Rectangle' que implementa a interface 'Figure'.
// Representa um retângulo definido pela largura e altura.
export class Rectangle implements Figure {
  // A propriedade shape é readonly e sempre será 'rectangle'.
  readonly shape: Shape = 'rectangle';

  constructor(
    public readonly color: Color,      // Cor do retângulo
    public readonly width: number,     // Largura do retângulo
    public readonly height: number,    // Altura do retângulo
  ) {
    // Validação: Largura e altura devem ser positivos.
    // Dimensionamento negativo ou zero invalida a construção geométrica.
    if (width <= 0 || height <= 0) {
      throw new Error('Width and height must be positive numbers');
    }
  }

  // Método para calcular a área do retângulo.
  // Fórmula: Área = largura * altura
  getArea(): number {
    const area1 = this.width * this.height;

    // Arredonda o resultado para 2 casas decimais para padronizar o formato de saída.
    return Math.floor(area1 * 100) / 100;
  }
}

// Função utilitária 'getInfo' que formata a descrição da figura em uma string.
// Ela pega um objeto Figure e cria uma mensagem informativa contendo:
// - A cor da figura
// - O tipo de figura (shape)
// - A área calculada
// Isso facilita o uso rápido dos objetos geométricos em logs ou interfaces.
export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
