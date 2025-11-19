# Instrucciones para Deploy en GitHub Pages

## Paso 1: Crear el Repositorio en GitHub

1. Ve a https://github.com/new
2. Nombre del repositorio: **lamansion-bar**
3. Descripción: "La Mansión Bar - Restaurant & Bar Website"
4. Selecciona **Public**
5. **NO** marques ninguna opción de inicialización (README, .gitignore, license)
6. Click en "Create repository"

## Paso 2: Conectar y Subir el Código

Copia y pega estos comandos en tu terminal (PowerShell) desde la carpeta del proyecto:

```powershell
cd "C:\Users\User\Desktop\test gemini"

# Conectar con tu repositorio (reemplaza USERNAME con tu usuario de GitHub)
git remote add origin https://github.com/USERNAME/lamansion-bar.git

# Subir el código
git push -u origin main
```

## Paso 3: Activar GitHub Pages

1. Ve a tu repositorio en GitHub
2. Click en "Settings" (Configuración)
3. En el menú lateral, click en "Pages"
4. En "Source", selecciona "main" branch
5. Click en "Save"

¡Listo! Tu sitio estará disponible en:
**https://USERNAME.github.io/lamansion-bar/**

---

**Nota:** El repositorio Git ya está inicializado y todos los archivos están commiteados. Solo necesitas crear el repositorio en GitHub y hacer push.
