# Imagen base oficial de Python
FROM python:3.11-slim

# Crear directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar archivo de dependencias
COPY requirements.txt .

# Instalar dependencias
RUN pip install --no-cache-dir -r requirements.txt

# Copiar todo el proyecto dentro del contenedor
COPY . .

# Ejecutamos los tests al construir la imagen
RUN pytest -q

# Comando por defecto cuando se ejecuta el contenedor
CMD ["python", "src/app.py"]
