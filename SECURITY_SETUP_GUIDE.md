# 🔒 Guía de Configuración de Seguridad GitHub

## 📋 Configuración de Opciones de Seguridad en GitHub

Para completar la actividad de CodeQL, necesitas configurar las siguientes opciones de seguridad directamente en tu repositorio de GitHub:

### 🚀 Paso a Paso para Configurar Seguridad

#### 1. Acceder a la Configuración de Seguridad
1. Ve a tu repositorio: `https://github.com/edoturb/AUY1102-001V-2025--G2`
2. Haz clic en la pestaña **"Security"** (Seguridad)
3. En el panel izquierdo, verás las diferentes opciones de seguridad

#### 2. Habilitar Dependabot Alerts
1. Ve a **Security** → **Dependabot alerts**
2. Si no está habilitado, haz clic en **"Enable Dependabot alerts"**
3. Esto detectará vulnerabilidades conocidas en tus dependencias

#### 3. Habilitar Code Scanning Alerts
1. Ve a **Security** → **Code scanning alerts**
2. Haz clic en **"Set up code scanning"**
3. Selecciona **"Advanced setup"** 
4. Esto utilizará tu archivo `codeql.yml` que ya configuramos

#### 4. Habilitar Secret Scanning Alerts
1. Ve a **Security** → **Secret scanning alerts**
2. Si no está habilitado, haz clic en **"Enable secret scanning"**
3. Esto detectará tokens, claves API y otros secretos en tu código

#### 5. Configurar Protection Rules (Code Scanning)
1. Ve a **Settings** → **Branches** 
2. En "Branch protection rules", haz clic en **"Add rule"** o edita la regla existente para `main`
3. En la sección **"Restrict pushes that create security vulnerabilities"**:
   - Marca **"Require status checks to pass before merging"**
   - En **"Status checks that are required"**, busca y selecciona:
     - `CodeQL` o `Analyze`
4. En **"Check runs failure threshold"**:
   - Para **Security**: selecciona **"Any"**
   - Para **Other**: selecciona **"Any"**

### 🔍 Verificación de Configuración

Una vez configurado, deberías ver:
- ✅ Dependabot alerts: Enabled
- ✅ Code scanning alerts: Enabled  
- ✅ Secret scanning alerts: Enabled
- ✅ Branch protection rules: Configured with CodeQL checks

### 📸 Capturas de Pantalla Recomendadas

Para documentar tu trabajo, toma capturas de:
1. Panel de Security mostrando todas las opciones habilitadas
2. Configuración de Branch protection rules
3. Resultados de Code Scanning después del PR

### 🚨 Notas Importantes

- Algunas funciones pueden requerir permisos de administrador del repositorio
- Secret scanning puede estar limitado en repositorios públicos
- Los resultados de CodeQL pueden tardar varios minutos en aparecer

### 🔗 Enlaces Útiles

- **Tu repositorio**: https://github.com/edoturb/AUY1102-001V-2025--G2
- **Security tab**: https://github.com/edoturb/AUY1102-001V-2025--G2/security
- **Settings**: https://github.com/edoturb/AUY1102-001V-2025--G2/settings

---

**📝 Próximo Paso**: Una vez configuradas estas opciones, continúa con el pull request para probar el workflow de CodeQL.
