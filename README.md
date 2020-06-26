Delilah Resto - API

Para empezar 🛠️ 🚀

Instalar las dependencias mediante el comando "npm install" 

: {
        "bcryptjs": "^2.4.3",
        "body-parser": "^1.19.0",
        "cors": "^2.8.5",
        "express": "^4.17.1",
        "express-validator": "^6.5.0",
        "jwt-simple": "^0.5.6",
        "moment": "^2.26.0",
        "mysql": "^2.18.1",
        "mysql2": "^2.1.0",
        "nodemon": "^2.0.4",
        "sequelize": "^5.21.11",
}

Iniciando el servidor ⚙️🔧

Utilizamos el comando npm start 

Veremos un mensaje en la consola de la terminal "Server up and running" y tendremos nuestro servidor corriendo en el puerto 3000.

 Probando la API 📋
 
 Para testear esta API es necesario utilizar alguna herramienta con la cual podremos hacer las peticiones necesarias, en este caso utilizaremos Postman.
 
 
 Registrar usuario con rol "admin":
 
 POST/api/users/register
 
 
 
 {
	"username":"whiterose",
	"firstname":"Ramiro",
  "lastname": "Gomez",
    "email":"ramgallagher@gmail.com",
    "phone_number": "34523234",
    "role": "admin"
    "password":"whiteclaudia"
  }
  
  
  Registrar usuario con rol "user":
  
  
 {
    username":"trenton",
    "firstname":"Natasha",
    "lastname": "Romanenko",
    "email": "nastasha_romanenko@gmail.com",
    "phone_number": "34523234",
    "password":"mgs123"
  }
  
  
  Login de usuario:
  
  POST/api/users/login
  
  Para iniciar sesion el usuario debera ingresar: 
  
  {
  	"email": "ramgallagher@gmail.com",
  	"password": "whiteclaudia"
  }
  
  
  Esto nos devolvera un token que debemos pegar en el campo "headers" con la key "user-token".
  
  
  
  
  
 
  
  
  
 
 
 
