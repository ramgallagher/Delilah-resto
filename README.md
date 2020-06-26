Delilah Resto - API

### Para empezar 🛠️ 🚀

_Instalar las dependencias mediante el comando "npm install"_
```
 {
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
```

### Iniciando el servidor ⚙️🔧

_Utilizamos el comando npm start_ 
```
Veremos un mensaje en la consola de la terminal "Server up and running" y tendremos nuestro servidor corriendo en el puerto 3000.
```
 ### Probando la API 📋
 ```
 Para testear esta API es necesario utilizar alguna herramienta con la cual podremos hacer las peticiones necesarias, en este caso utilizaremos Postman.
 ```
 
 ## Registrar usuario con rol "admin":
 
 POST/api/users/register
 
 
 ```
 {
	"username":"whiterose",
	"firstname":"Ramiro",
  "lastname": "Gomez",
    "email":"ramgallagher@gmail.com",
    "phone_number": "34523234",
    "role": "admin"
    "password":"whiteclaudia"
  }
  ```
  
  ## Registrar usuario con rol "user":
  
  ```
 {
    username":"trenton",
    "firstname":"Natasha",
    "lastname": "Romanenko",
    "email": "nastasha_romanenko@gmail.com",
    "phone_number": "34523234",
    "password":"mgs123"
  }
  ```
  
  ##  Login de usuario:
  
  POST/api/users/login
  
  Para iniciar sesion el usuario debera ingresar: 
  ```
  {
  	"email": "ramgallagher@gmail.com",
  	"password": "whiteclaudia"
  }
  ```
  
  Esto nos devolvera un token que debemos pegar en el campo "headers" con la key "user-token".
  
 ## Mostrar usuarios registrados.
  
  GET/api/users
  
  Ejemplo de respuesta de la peticion
  
  {
        "id": 1,
        "username": "ramiroshka",
        "password": "$2a$10$0Sx8vye2F2E.GjkEJ7kL0ei6AvtRrF7v3Eaunc.Ysp73HCTRdxNd2",
        "firstname": "Ram",
        "lastname": "Gomez",
        "email": "ramgallagher@gmail.com",
        "phone_number": "420106\n",
        "role": "user",
        "createdAt": "2020-06-11T19:45:00.000Z",
        "updatedAt": "2020-06-25T14:43:59.000Z"
    },
    {
        "id": 2,
        "username": "whiterose",
        "password": "$2a$10$.84uZRzeMxjOVYd9KFpjieowXyABGhFQkRDAXgLMnxEQ/kD69IXva",
        "firstname": "Pablo",
        "lastname": "Gomez",
        "email": "pablogomezxo@gmail.com",
        "phone_number": "420106\n",
        "role": "admin",
        "createdAt": "2020-06-11T19:52:20.000Z",
        "updatedAt": "2020-06-11T19:52:20.000Z"
    }
    
    
    ##  Modificar Usuarios:
    _Para poder realizar modificaciones o borrar usuarios es necesario estar logeado como "admin"._
    
    PUT /api/users/id 
    
    Ejemplo de la peticion: 
    
    {
      
        "firstname": "Toribio Fonseca",
        "lastname": "Gomez",
        "email": "ramgallagher@gmail.com",
      
    }
    
    Ejemplo de respuesta de la peticion

{
     "User modified"
}

6. Eliminar Usuario

 Para poder realizar borrar usuarios es necesario estar logeado como ADMIN.
    
    DELETE /api/users/id 
    
    Ejemplo de respuesta de la peticion
```
{
     "User deleted"
}
```
##  Mostrar productos

GET /api/products

 Ejemplo de respuesta de la peticion
```
{
        "id": 1,
        "product_name": "Cheeseburger",
        "product_price": 50,
        "product_photo": "Cheeseburger.jpg",
        "createdAt": "2020-06-25T14:32:26.000Z",
        "updatedAt": "2020-06-25T14:32:26.000Z"
    },
    {
        "id": 2,
        "product_name": "Cangreburger",
        "product_price": 100,
        "product_photo": "Cangreburger.jpg",
        "createdAt": "2020-06-25T14:32:41.000Z",
        "updatedAt": "2020-06-25T14:32:41.000Z"
    },
    {
        "id": 3,
        "product_name": "Lomito Vegano",
        "product_price": 100,
        "product_photo": "NotLomito.jpg",
        "createdAt": "2020-06-25T14:33:24.000Z",
        "updatedAt": "2020-06-25T14:33:24.000Z"
    }
    ```
    8. Crear productos
    
    POST api/products
    ```
    {
    "id": 2,
    "product_name": "Lomito Vegano",
    "product_price": "100",
    "product_photo": "NotLomito.jpg",
    "updatedAt": "2020-06-26T13:47:45.416Z",
    "createdAt": "2020-06-26T13:47:45.416Z"
}
```
##  Modificar productos

  PUT api/products/id
  
  Ejemplo de la peticion: 
   ``` 
   {        
    "product_name": "Big Tasty",
    }
    ```
  
  Ejemplo de respuesta de la peticion
  ```
  { 
  	"Product modified"
  }
  ```
  10. Eliminar productos
  
  DELETE api/products/id
  ```
   {
   "Product deleted"
   }
   ```
   ##  Generar un pedido
   
   POST /api/orders
   ```
   {
    "status": "en preparacion",
    "description": "Cangreburger",
    "amount": "1",
    "payment": "cash",
    "productId": [1,2]
}
```
Ejemplo de respuesta de la peticion 
```
{
   "Order created"
}
```
12. Modificar un pedido

  PUT api/orders/id
  
  Ejemplo de la peticion: 
   ``` 
   {        
    "status": "Listo",
    }
  ```
  Ejemplo de respuesta de la peticion
  ```
  { 
  	"Order modified"
  }
  ```
  13. Eliminar un pedido
  
  DELETE api/orders/id
  ```
   {
   "Order deleted"
   }
```

## Autor ✒️

 Ramiro Gómez




    

    
    
  
  
  
  
  
  
 
  
  
  
 
 
 
