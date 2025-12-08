FROM python:3.11-slim

# 1) Carpeta de trabajo dentro del contenedor
WORKDIR /usr/src/app

# 2) Copiar primero los archivos del proyecto
COPY . .

# 3) Instalar pytest (y otras dependencias si las hubiera)
RUN pip install --no-cache-dir pytest

# 4) Comando por defecto: ejecutar los tests
CMD ["pytest", "-q"]

