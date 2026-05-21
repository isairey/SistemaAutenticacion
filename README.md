<div align="center">

<img width="220" src="https://cdn-icons-png.flaticon.com/512/5968/5968267.png" />

# 🔐 Firebase Auth

### Sistema moderno de autenticación con Firebase y AngularJS ⚡

<p align="center">
  <b>Firebase Auth</b> es un módulo completo de autenticación desarrollado con AngularJS y Firebase Authentication, diseñado para implementar registro e inicio de sesión de usuarios de forma rápida, segura y escalable.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/AngularJS-Frontend-DD0031?style=for-the-badge&logo=angularjs&logoColor=white">
  <img src="https://img.shields.io/badge/Firebase-Authentication-FFCA28?style=for-the-badge&logo=firebase&logoColor=black">
  <img src="https://img.shields.io/badge/MaterializeCSS-UI-EE6E73?style=for-the-badge&logo=materialdesign&logoColor=white">
</p>

<p align="center">
  <a href="#-acerca-del-proyecto">Acerca</a> •
  <a href="#-características">Características</a> •
  <a href="#-tecnologías-utilizadas">Tecnologías</a> •
  <a href="#-instalación">Instalación</a> •
  <a href="#-vista-previa">Vista previa</a>
</p>

</div>

---

# 🔐 Acerca del proyecto

**Firebase Auth** es un sistema de autenticación frontend construido con AngularJS y Firebase Authentication que permite gestionar el registro e inicio de sesión de usuarios utilizando correo electrónico y contraseña.

El proyecto fue desarrollado para:

- 🔑 Gestionar autenticación de usuarios
- 📧 Registrar usuarios con email y contraseña
- 🔒 Proteger sesiones de usuario
- ⚡ Integrar Firebase Authentication
- 📱 Crear interfaces modernas de login
- 🌐 Implementar autenticación en tiempo real

La plataforma demuestra cómo implementar autenticación moderna utilizando Firebase 3.0 y AngularJS de forma simple y eficiente.

---

# ✨ Características

## 🔑 Sistema de autenticación

- 🔐 Inicio de sesión seguro
- 📧 Registro de usuarios
- 🔒 Validación de credenciales
- ⚡ Sesiones en tiempo real
- 🚪 Logout de usuarios

---

## 👥 Gestión de usuarios

- 👤 Creación de cuentas
- 📨 Autenticación por email
- 🔑 Gestión de contraseñas
- ⚡ Manejo de sesiones
- 🛡️ Validación automática

---

## 🎨 Interfaz moderna

- 📱 Diseño responsive
- ⚡ Material Design UI
- 🖥️ Formularios dinámicos
- 🎯 UX intuitiva
- 🌈 Feedback visual

---

## ☁️ Integración Firebase

- 🔥 Firebase Authentication
- ⚡ Realtime Authentication
- 🔒 Seguridad cloud
- 📊 Gestión centralizada
- 🌐 Escalabilidad automática

---

# 👨‍💻 Módulos del sistema

## 🔐 Authentication Module

Módulo principal de autenticación.

### Funcionalidades:

- 🔑 Login
- 📧 Registro
- 🔒 Gestión de sesiones
- ⚡ Validación de usuarios
- 🚪 Logout

---

## 👤 User Module

Gestión de usuarios autenticados.

### Funcionalidades:

- 👥 Creación de usuarios
- 📨 Gestión de emails
- 🔐 Contraseñas seguras
- ⚡ Estados de sesión

---

## 🎨 UI Module

Interfaz frontend moderna.

### Funcionalidades:

- 📱 Formularios responsive
- 🌈 Material Design
- ⚡ Feedback dinámico
- 🖥️ Validaciones visuales

---

# 🛠️ Tecnologías utilizadas

## ⚙️ Frontend

<p>
  <img src="https://skillicons.dev/icons?i=html,css,js,angularjs" />
</p>

- AngularJS 1.5
- HTML5
- CSS3
- JavaScript
- Responsive Design

---

## ☁️ Backend & Authentication

<p>
  <img src="https://skillicons.dev/icons?i=firebase" />
</p>

- Firebase 3.0
- Firebase Authentication
- Cloud Authentication
- Realtime Sessions

---

## 🎨 UI Framework

<p>
  <img src="https://skillicons.dev/icons?i=materialui" />
</p>

- Materialize CSS
- Material Icons
- Responsive Components
- Dynamic Forms

---

## 🧰 Herramientas

<p>
  <img src="https://skillicons.dev/icons?i=git,github,vscode" />
</p>

- Git
- GitHub
- VS Code
- Firebase Console

---

# 📂 Estructura del proyecto

```bash
SistemaAutenticacion/
│
├── app/
│   ├── controllers/
│   ├── services/
│   ├── views/
│   └── app.js
│
├── assets/
│   ├── css/
│   ├── js/
│   └── images/
│
├── firebase/
│   └── config.js
│
├── home.html
├── README.md
└── LICENSE
```

---

# 🏗️ Arquitectura del sistema

## ⚡ Arquitectura de autenticación

```text
Usuario → AngularJS Frontend → Firebase Authentication → Firebase Cloud
```

---

## 🔄 Flujo del sistema

```text
Registro/Login → Validación Firebase → Sesión activa → Acceso autorizado
```

---

# 📊 Funcionalidades principales

## 🔐 Login

- Inicio de sesión
- Validación de credenciales
- Manejo de errores
- Sesiones persistentes

---

## 📧 Registro

- Creación de cuentas
- Registro con email
- Gestión automática
- Feedback dinámico

---

## ⚡ Firebase

- Realtime Authentication
- Cloud sessions
- Seguridad integrada
- Escalabilidad automática

---

# 🔐 Seguridad

## 🛡️ Protección del sistema

- 🔒 Firebase Authentication
- 🔑 Password Authentication
- ⚡ Session Management
- 🛡️ Secure Validation
- 🚫 Manejo de errores
- 🔐 Cloud Security

---

# ⚡ Instalación

## 📋 Requisitos

- Node.js
- AngularJS
- Firebase Project
- Navegador moderno
- VS Code

---

# 🚀 Configuración del proyecto

## 1️⃣ Clonar repositorio

```bash
git clone https://github.com/isairey/SistemaAutenticacion.git
```

---

## 2️⃣ Entrar al proyecto

```bash
cd SistemaAutenticacion
```

---

## 3️⃣ Configurar Firebase

Crear un proyecto en Firebase Console y habilitar:

- Firebase Authentication
- Email/Password Sign-In Method

---

## 4️⃣ Configurar Firebase SDK

```javascript
var config = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_DOMAIN",
  databaseURL: "YOUR_DATABASE_URL",
  projectId: "YOUR_PROJECT_ID",
};
firebase.initializeApp(config);
```

---

## 5️⃣ Ejecutar proyecto

Abrir `home.html` en el navegador o utilizar un servidor local.

---

# 💻 Ejemplo de autenticación

## 🔑 Login con Firebase

```javascript
$scope.signIn = function(){
  $scope.auth.$signInWithEmailAndPassword(
    $scope.email,
    $scope.pass
  ).then(function(firebaseUser){

    $scope.result =
      "Login successful: " + firebaseUser.uid;

  }).catch(function(error){

    console.log(error);

  });
}
```

---

## 📧 Registro de usuarios

```javascript
$scope.signUp = function(){

  $scope.auth
  .$createUserWithEmailAndPassword(
    $scope.email,
    $scope.pass
  );

}
```

---




# 🧠 Objetivos del proyecto

## 🎯 Aprendizaje y autenticación moderna

- Firebase Authentication
- AngularJS Authentication
- Gestión de sesiones
- Seguridad frontend
- Cloud authentication
- Formularios dinámicos
- Arquitectura frontend

---

# 🚧 Roadmap

## 🔮 Próximas mejoras

- 📱 Social Login
- 🔑 Google Authentication
- 🌐 JWT Integration
- ☁️ Firebase Firestore
- 📧 Password recovery
- 🔔 Email verification
- 🤖 Multi-factor authentication

---

# 🤝 Contribuciones

Las contribuciones son bienvenidas ❤️

## Cómo contribuir

1. Fork del proyecto

```bash
git checkout -b feature/nueva-funcionalidad
```

2. Commit

```bash
git commit -m "✨ Nueva funcionalidad"
```

3. Push

```bash
git push origin feature/nueva-funcionalidad
```

4. Pull Request 🚀

---

# 👨‍💻 Desarrollador

<div align="center">

## Isai Reyes - Full Stack & AI Developer

Desarrollador apasionado por plataformas SaaS, inteligencia artificial y arquitecturas empresariales modernas 🚀

</div>


---

# 🌟 Apoya el proyecto

⭐ Dale una estrella  
🍴 Haz fork  
📢 Comparte el proyecto

---

# 📜 Licencia

Proyecto open source orientado al aprendizaje de autenticación moderna, Firebase y desarrollo frontend con AngularJS.

---

<div align="center">

### 🔐 Firebase Auth — autenticación moderna y segura ⚡

</div>
