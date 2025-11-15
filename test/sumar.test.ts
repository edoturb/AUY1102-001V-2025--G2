import { sumar } from "../src/sumar";

// TDD: primero definimos qué queremos comprobar de la función
describe("sumar()", () => {
  it("debería devolver la suma de dos números", () => {
    expect(sumar(2, 3)).toBe(5);
  });

  // BDD: nombre estilo Given / When / Then para describir comportamiento
  it("Given two positive numbers, when I call sumar, then I get their sum", () => {
    expect(sumar(10, 5)).toBe(15);
  });
});
