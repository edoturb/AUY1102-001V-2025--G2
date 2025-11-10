![image alt](https://github.com/edoturb/AUY1102-001V-2025--G2/blob/main/Evidencias/logo_duoc.png?raw=true)

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
```markdown
```bash
git clone https://github.com/Fundacion-Instituto-Profesional-Duoc-UC/AUY1102-Pipeline.git
Posteriormente, se eliminó el historial .git del proyecto y se inicializó uno nuevo, agregando el repositorio del grupo:


rm -rf .git
git init
git add .
git commit -m "Versión inicial sin credenciales"
git branch -M main
git remote add origin https://github.com/edoturb/AUY1102-001V-2025--G2.git
git push -u origin main --force
```
Clonación Edurado

![image alt](https://github.com/edoturb/AUY1102-001V-2025--G2/blob/f9ec2dfdc15447733f5ea6860508d091f8c1d0ad/Clonacion%20Edu.png)


Clonación Lucia

![image alt](https://github.com/edoturb/AUY1102-001V-2025--G2/blob/main/Clonacion%20Lucy.png?raw=true)


Origin apunta al repo de la profe:

![image alt](https://github.com/edoturb/AUY1102-001V-2025--G2/blob/main/git%20remote.png?raw=true)


Borramos el origin actual:

![image alt](https://github.com/edoturb/AUY1102-001V-2025--G2/blob/main/git%20remote%20-v.png?raw=true)


Añade el remoto nuevo, del grupo:

![image alt](https://github.com/edoturb/AUY1102-001V-2025--G2/blob/main/git%20remote%20add%20origin.png?raw=true)


![image alt](https://github.com/edoturb/AUY1102-001V-2025--G2/blob/main/git%20status.png?raw=true)

Remonbramos rama master por main para tener buenas practias y más estándar

![image alt](https://github.com/edoturb/AUY1102-001V-2025--G2/blob/main/master%20a%20main.png?raw=true)

No nos dejo hacer push porque dentro del commit hay un archivo **credentials.yml** con algo en la línea 1 que parece un token de GitHub”.

Aunque ya borramos el .git viejo, en este nuevo commit todavía está ese credentials.yml con algo **sospechoso**.

Sacaremos ese secreto del commit y recién ahí volvelveromos a hacer push.

![image alt](https://github.com/edoturb/AUY1102-001V-2025--G2/blob/main/commit%20y%20push.png?raw=true)

Con esto, el commit viejo (que tenía el supuesto secreto) deja de existir; ahora el último commit ya viene limpio.

![image alt](https://github.com/edoturb/AUY1102-001V-2025--G2/blob/main/Evidencias/Imagen10.png?raw=true)

(forced update) → el push forzado funcionó (reemplazó la historia anterior).

No hay advertencias de secretos ni errores de protección 🚫🔑.
Logramos subir correctamente el código base del proyecto a nuestro repositorio de grupo

![image alt](https://github.com/edoturb/AUY1102-001V-2025--G2/blob/main/Evidencias/Imagen11.png?raw=true)



## 3. Fase 2 – Colaboración y control de cambios
**Lucía Villalobos:** ejecución de pruebas unitarias, análisis de cobertura, configuración de ESLint y documentación (este README).

**Eduardo Urbina:** configuración y ejecución de herramientas de seguridad (Dependabot, CodeQL, SonarQube) y aplicación de remediaciones.


**3.1. Pruebas unitarias y cobertura de código**

Instalación de dependencias:

Se ejecutó el siguiente comando para instalar los paquetes necesarios.

Durante la instalación, npm reportó varias vulnerabilidades en dependencias externas, lo cual permitió posteriormente aplicar herramientas de análisis y remediación.

![image alt](https://github.com/edoturb/AUY1102-001V-2025--G2/blob/main/Evidencias/Imagen13.png?raw=true)

**3.2. Ejecución de pruebas unitarias**

Las pruebas unitarias fueron ejecutadas con Jest mediante:

**npm run test:unit**

Resultado general:

- Test Suites: 10 passed / 10 total
- Tests: 18 passed / 18 total
- Incluye prueba personalizada sumar.test.ts.

Durante la ejecución se detectaron advertencias relacionadas con fetch hacia api.example.com, sin impacto en la ejecución.

![image alt](https://github.com/edoturb/AUY1102-001V-2025--G2/blob/main/Evidencias/Imagen14.png?raw=true)

![image alt](https://github.com/edoturb/AUY1102-001V-2025--G2/blob/main/Evidencias/Imagen15.png?raw=true)

**3.3. Análisis de cobertura**

Se midió la cobertura total del código con:

**npm run test:coverage**

Resultados obtenidos:

- Statements: 43.28 %
- Branches: 60 %
- Functions: 56.66 %
- Lines: 43.28 %

![image alt](https://github.com/edoturb/AUY1102-001V-2025--G2/blob/main/Evidencias/Imagen16.png?raw=true)

![image alt](https://github.com/edoturb/AUY1102-001V-2025--G2/blob/main/Evidencias/Imagen17.png?raw=true)

Este reporte permitió identificar áreas del código sin cobertura de pruebas, apoyando la mejora continua del desarrollo.

## 4. Fase 3 – Metodologías de prueba (TDD y BDD)

**4.1. Ejemplo implementado**

Se creó una función simple para ejemplificar TDD y BDD:

```ts
// src/sumar.ts
export function sumar(a: number, b: number): number {
  return a + b;
}


Y su prueba unitaria:


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

```

![image alt](https://github.com/edoturb/AUY1102-001V-2025--G2/blob/main/Evidencias/Imagen18.png?raw=true)

![image alt](https://github.com/edoturb/AUY1102-001V-2025--G2/blob/main/Evidencias/Imagen19.png?raw=true)

![image alt](https://github.com/edoturb/AUY1102-001V-2025--G2/blob/main/Evidencias/Imagen20.png?raw=true)

**4.2. Corrimos nuevamente las pruebas**

![image alt](https://github.com/edoturb/AUY1102-001V-2025--G2/blob/main/Evidencias/Imagen20.png?raw=true)

![image alt](https://github.com/edoturb/AUY1102-001V-2025--G2/blob/main/Evidencias/Imagen21.png?raw=true)

![image alt](https://github.com/edoturb/AUY1102-001V-2025--G2/blob/main/Evidencias/Imagen22.png?raw=true)

**4.3. Análisis**

**TDD:** permitió diseñar el código guiado por las pruebas, aplicando el ciclo Red → Green → Refactor.

**BDD:** permitió expresar el comportamiento esperado en un lenguaje más cercano al negocio.

Ambos enfoques promueven un desarrollo más confiable y orientado a calidad.

## 5. Fase 4 – Análisis de calidad del código (ESLint)
Se utilizó ESLint para revisar la calidad del código:

npx eslint .
Inicialmente, se presentó el error:

ESLint couldn't find the config "airbnb-typescript/base" to extend from.

Para resolverlo, se instalaron las dependencias necesarias:

npm install -D eslint eslint-config-airbnb-typescript eslint-config-airbnb-base eslint-plugin-import @typescript-eslint/eslint-plugin @typescript-eslint/parser
Aun así, la configuración continuó arrojando advertencias, pero permitió comprender el propósito del análisis estático de código en el ciclo de desarrollo.

![image alt](https://github.com/edoturb/AUY1102-001V-2025--G2/blob/main/Evidencias/Imagen41.png?raw=true)

## 6. Fase 5 – Análisis de vulnerabilidades y seguridad

**6.1. Dependabot**

Se habilitaron Dependabot Alerts y Security Updates en GitHub, generando reportes automáticos de vulnerabilidades en las dependencias del proyecto.

![image alt](https://github.com/edoturb/AUY1102-001V-2025--G2/blob/main/Evidencias/Imagen23.png?raw=true)

![image alt](https://github.com/edoturb/AUY1102-001V-2025--G2/blob/main/Evidencias/Imagen24.png?raw=true)

![image alt](https://github.com/edoturb/AUY1102-001V-2025--G2/blob/main/Evidencias/Imagen25.png?raw=true)





**6.2. CodeQL Analysis**

Configuramos CodeQL desde la pestaña Security 

→ Code scanning, generando análisis automáticos en cada push.

![image alt](https://github.com/edoturb/AUY1102-001V-2025--G2/blob/main/Evidencias/Imagen26.png?raw=true)

![image alt](https://github.com/edoturb/AUY1102-001V-2025--G2/blob/main/Evidencias/Imagen%2027.png?raw=true)

Nueva configuración lista

![image alt](https://github.com/edoturb/AUY1102-001V-2025--G2/blob/main/Evidencias/Imagen28.png?raw=true)

Se configuró GitHub CodeQL para análisis automatizado del código fuente.
El flujo realiza escaneos cada 1 hora. Se activo Dependabot alerts y security updates

![image alt](https://github.com/edoturb/AUY1102-001V-2025--G2/blob/main/Evidencias/Imagen%2029.png?raw=true)




**6.3. SonarQube Cloud**

Configuramos SonarQube Cloud, integrando el repositorio con un análisis externo de vulnerabilidades y calidad de código.

El análisis detectó vulnerabilidades de severidad medium y low, además de recomendaciones de estilo y complejidad.

![image alt](https://github.com/edoturb/AUY1102-001V-2025--G2/blob/main/Evidencias/Imagen30.png?raw=true
)

Vulnerabilidades detectadas

![image alt](https://github.com/edoturb/AUY1102-001V-2025--G2/blob/main/Evidencias/Imagen31.png?raw=true)

Detecta una critica, token en archivo npm

![image alt](https://github.com/edoturb/AUY1102-001V-2025--G2/blob/main/Evidencias/Imagen32.png?raw=true)

Eliminamos Token sensible  desde archivo .npmrc

![image alt](https://github.com/edoturb/AUY1102-001V-2025--G2/blob/main/Evidencias/Imagen33.png?raw=true)


Tras la detección de las vulnerabilidades y problemas de mantenibilidad, se procedió a aplicar las siguientes **acciones correctivas** para mejorar la calidad y seguridad del proyecto:

### **7.1. Revocación y reemplazo del token de GitHub**
Se revocó el token comprometido y se generó un nuevo **Personal Access Token (PAT)** desde la configuración de GitHub, eliminando toda referencia al anterior.  
El nuevo token fue almacenado de forma segura mediante una variable de entorno en el archivo `~/.zshrc`, siguiendo las buenas prácticas de seguridad recomendadas.

- ![Generación de nuevo token en GitHub](https://github.com/edoturb/AUY1102-001V-2025--G2/blob/main/Evidencias/Imagen35.png?raw=true)
- ![Configuración del token como variable de entorno](https://github.com/edoturb/AUY1102-001V-2025--G2/blob/main/Evidencias/Imagen36.png?raw=true)

### **7.2. Limpieza del archivo `.npmrc`**
Se eliminó la línea que contenía el token expuesto y se reemplazó por una configuración segura sin credenciales directas.  
Esto permitió eliminar la alerta de seguridad clasificada como **Blocker**.

- ![Archivo .npmrc corregido](https://github.com/edoturb/AUY1102-001V-2025--G2/blob/main/Evidencias/Imagen34.png?raw=true)

### **7.3. Corrección de métodos vacíos (Code Smells)**
En el archivo `src/quality/errores-object.ts`, SonarQube marcó los métodos `getUserData()` y `sendEmail()` como vacíos.  
Para resolver el problema, se agregó un comentario `//TODO` dentro del método, dejando explícita la intención de implementación futura. Esto elimina el error sin afectar la lógica del programa.

- ![Corrección de métodos vacíos](https://github.com/edoturb/AUY1102-001V-2025--G2/blob/main/Evidencias/Imagen39.png?raw=true)
- ![Commit de remediación](https://github.com/edoturb/AUY1102-001V-2025--G2/blob/main/Evidencias/Imagen40.png?raw=true)

### **7.4. Confirmación de remediaciones**
Finalmente, se ejecutó un nuevo análisis en **SonarQube Cloud**, verificando que las vulnerabilidades críticas habían sido mitigadas y las observaciones de mantenibilidad disminuidas, cumpliendo así con las políticas de calidad establecidas en el proyecto.



## 🧩 8. Conclusiones

El desarrollo de este proyecto permitió consolidar de manera práctica los conocimientos sobre el **Ciclo de Vida del Software**, aplicados a las áreas de **pruebas, calidad y seguridad**.  

Se demostró la efectividad de las metodologías **TDD (Test Driven Development)** y **BDD (Behavior Driven Development)** para generar código más **robusto, mantenible y verificable**, fomentando un enfoque preventivo ante errores.  

Asimismo, la integración de herramientas automatizadas como **ESLint**, **Dependabot**, **CodeQL** y **SonarQube Cloud** fortaleció los procesos de **aseguramiento de calidad**, facilitando la **detección temprana de vulnerabilidades**, la mejora de la mantenibilidad y el cumplimiento de buenas prácticas de desarrollo seguro.  

El uso de **Git y GitHub** resultó esencial para garantizar la **colaboración, trazabilidad y control de versiones**, optimizando la gestión del trabajo en equipo y la documentación de los avances.  

En conjunto, se logró un **flujo de desarrollo integral y alineado con los estándares de la industria**, abarcando desde la planificación y codificación hasta la validación, corrección y mejora continua del producto final.


📘 Repositorio oficial del grupo:
https://github.com/edoturb/AUY1102-001V-2025--G2


