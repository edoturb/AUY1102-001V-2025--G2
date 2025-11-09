<img src="https://upload.wikimedia.org/wikipedia/commons/b/b7/DuocUC_logo.svg" alt="Duoc UC Logo" width="140" align="left" />

<br clear="left"/>

# Evaluación Parcial 2  
## Desarrollo de Pruebas Unitarias y Análisis de Seguridad II  

**Asignatura:** Ciclo de Vida del Software I – Sección 001V  
**Integrantes:** Lucía Villalobos – Eduardo Urbina  
**Docente:** Valentina Paz  
**Fecha de entrega:** 09 de noviembre de 2025  

---

## 1. Objetivo de la evaluación

El propósito de esta evaluación es aplicar los conocimientos del ciclo de vida del software, centrando el trabajo en la creación, ejecución y análisis de pruebas unitarias, junto con la evaluación de seguridad mediante herramientas automáticas.  
El proyecto integra los siguientes componentes:

- Uso de **Git y GitHub** como herramientas de control de versiones.  
- Implementación de **pruebas unitarias y de cobertura** con Jest.  
- Aplicación de metodologías **TDD (Test Driven Development)** y **BDD (Behavior Driven Development)**.  
- Ejecución de análisis de calidad con **ESLint**.  
- Evaluación de vulnerabilidades con **Dependabot**, **CodeQL Analysis** y **SonarQube Cloud**.  
- Aplicación de remediaciones y verificación posterior de seguridad.

---

## 2. Fase 1 – Control de versiones con Git y GitHub

### 2.1. Clonación y carga del repositorio

Se clonó el repositorio base proporcionado por la docente:

```bash
git clone https://github.com/Fundacion-Instituto-Profesional-Duoc-UC/AUY1102-Pipeline.git
Posteriormente, se eliminó el historial .git del proyecto y se inicializó uno nuevo, agregando el repositorio del grupo:

bash
Copiar código
rm -rf .git
git init
git add .
git commit -m "Versión inicial sin credenciales"
git branch -M main
git remote add origin https://github.com/edoturb/AUY1102-001V-2025--G2.git
git push -u origin main --force
<img width="940" height="529" alt="image" src="https://github.com/user-attachments/assets/d2d11752-ded9-4df4-9914-23f00089a38f" />




2.2. Colaboración y control de cambios
Lucía Villalobos: ejecución de pruebas unitarias, análisis de cobertura, configuración de ESLint y documentación (este README).

Eduardo Urbina: configuración y ejecución de herramientas de seguridad (Dependabot, CodeQL, SonarQube) y aplicación de remediaciones.

Todos los commits y sincronizaciones se realizaron utilizando comandos Git (add, commit, push, pull), garantizando trazabilidad y control de versiones.

📸 Evidencia: Historial de commits y cambios en GitHub.

3. Fase 2 – Pruebas unitarias y cobertura de código
3.1. Instalación de dependencias
Se ejecutó el siguiente comando para instalar los paquetes necesarios:

bash
Copiar código
npm install
Durante la instalación, npm reportó varias vulnerabilidades en dependencias externas, lo cual permitió posteriormente aplicar herramientas de análisis y remediación.

📸 Evidencia: Captura del resultado de instalación con listado de vulnerabilidades detectadas.

3.2. Ejecución de pruebas unitarias
Las pruebas unitarias fueron ejecutadas con Jest mediante:

bash
Copiar código
npm run test:unit
Resultado general:

Test Suites: 10 passed / 10 total

Tests: 18 passed / 18 total

Incluye prueba personalizada sumar.test.ts.

Durante la ejecución se detectaron advertencias relacionadas con fetch hacia api.example.com, sin impacto en la ejecución.

📸 Evidencia: Captura del resultado completo de npm run test:unit.

3.3. Análisis de cobertura
Se midió la cobertura total del código con:

bash
Copiar código
npm run test:coverage
Resultados obtenidos:

Statements: 43.28 %

Branches: 60 %

Functions: 56.66 %

Lines: 43.28 %

📸 Evidencia: Captura de la tabla de cobertura generada por Jest.

Este reporte permitió identificar áreas del código sin cobertura de pruebas, apoyando la mejora continua del desarrollo.

4. Fase 3 – Metodologías de prueba (TDD y BDD)
4.1. Ejemplo implementado
Se creó una función simple para ejemplificar TDD y BDD:

ts
Copiar código
// src/sumar.ts
export function sumar(a: number, b: number): number {
  return a + b;
}
Y su prueba unitaria:

ts
Copiar código
// test/sumar.test.ts
import { sumar } from "../src/sumar";

describe("sumar()", () => {
  // TDD: prueba definida antes de la implementación
  it("debería devolver la suma de dos números", () => {
    expect(sumar(2, 3)).toBe(5);
  });

  // BDD: descripción del comportamiento esperado
  it("Given two positive numbers, when I call sumar, then I get their sum", () => {
    expect(sumar(10, 5)).toBe(15);
  });
});
📸 Evidencia: Captura de ejecución de Jest con los resultados del test sumar.test.ts.

4.2. Análisis
TDD: permitió diseñar el código guiado por las pruebas, aplicando el ciclo Red → Green → Refactor.

BDD: permitió expresar el comportamiento esperado en un lenguaje más cercano al negocio.

Ambos enfoques promueven un desarrollo más confiable y orientado a calidad.

5. Fase 4 – Análisis de calidad del código (ESLint)
Se utilizó ESLint para revisar la calidad del código:

bash
Copiar código
npx eslint .
Inicialmente, se presentó el error:

ESLint couldn't find the config "airbnb-typescript/base" to extend from.

Para resolverlo, se instalaron las dependencias necesarias:

bash
Copiar código
npm install -D eslint eslint-config-airbnb-typescript eslint-config-airbnb-base eslint-plugin-import @typescript-eslint/eslint-plugin @typescript-eslint/parser
Aun así, la configuración continuó arrojando advertencias, pero permitió comprender el propósito del análisis estático de código en el ciclo de desarrollo.

📸 Evidencia: Captura de instalación y salida del comando ESLint.

6. Fase 5 – Análisis de vulnerabilidades y seguridad
6.1. Dependabot
Se habilitaron Dependabot Alerts y Security Updates en GitHub, generando reportes automáticos de vulnerabilidades en las dependencias del proyecto.

📸 Evidencia: Captura del panel de alertas de Dependabot.

6.2. CodeQL Analysis
Se configuró CodeQL desde la pestaña Security → Code scanning, generando análisis automáticos en cada push.

📸 Evidencia: Captura de las alertas y resultados del análisis CodeQL.

6.3. SonarQube Cloud
Eduardo configuró SonarQube Cloud, integrando el repositorio con un análisis externo de vulnerabilidades y calidad de código.
El análisis detectó vulnerabilidades de severidad medium y low, además de recomendaciones de estilo y complejidad.

📸 Evidencia: Capturas del panel de SonarQube con los reportes de vulnerabilidades y métricas de calidad.

7. Fase 6 – Remediaciones realizadas
Se aplicaron las siguientes acciones correctivas:

Se aceptó una actualización automática de Dependabot para una librería Node.js vulnerable, mitigando una alerta moderate.

Se ejecutó nuevamente CodeQL y SonarQube, observándose una reducción en la cantidad de alertas activas.

Se mantuvieron activas las actualizaciones automáticas de seguridad para prevenir futuros riesgos.

📸 Evidencia: Captura del Pull Request de Dependabot y nuevo reporte post-remediación.

8. Conclusiones
El trabajo permitió consolidar la comprensión del ciclo de vida del software aplicado a pruebas, calidad y seguridad.

Se comprobó el valor de las metodologías TDD y BDD para crear código robusto y comprobable.

El uso de herramientas automáticas como ESLint, Dependabot, CodeQL y SonarQube facilita el aseguramiento de la calidad y la detección temprana de vulnerabilidades.

El control de versiones con Git y GitHub fue esencial para la colaboración y trazabilidad del proyecto.

En conjunto, se logró un flujo de desarrollo alineado con las buenas prácticas de la industria, abarcando desde la planificación hasta la mejora continua.

📘 Repositorio oficial del grupo:
https://github.com/edoturb/AUY1102-001V-2025--G2

yaml
Copiar código
