enum Color {
  Negro,
  Blanco,
  Morado
}

interface FiguraGeometrica {
  nombre: string;
  color: Color;
}

const rectangulo: FiguraGeometrica = {
  nombre: "rectángulo",
  color: Color.Morado
};