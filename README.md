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
  
  _Ejemplo de respuesta de la peticion:_
  ``` 
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
```

## Eliminar Usuario

 _Para poder realizar borrar usuarios es necesario estar logeado como ADMIN._
    
    DELETE /api/users/id 
    
    _Ejemplo de respuesta de la peticion:_

```
{
     "User deleted"
}
```

##  Modificar Usuarios:
    Para poder realizar modificaciones o borrar usuarios es necesario estar logeado como "admin".
    
    PUT /api/users/id 
    
    _Ejemplo de la peticion:_ 
    
    {
      
        "firstname": "Toribio Fonseca",
        "lastname": "Gomez",
        "email": "ramgallagher@gmail.com",
      
    }
    
    _Ejemplo de respuesta de la peticion:_

{
     "User modified"
}

## Crear productos
    
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

##  Mostrar productos

GET /api/products

 _Ejemplo de respuesta de la peticion:_
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
    
    
##  Modificar productos

  PUT api/products/id
  
  _Ejemplo de la peticion:_ 
    ```
   {        
    "product_name": "Big Tasty",
    }
    ```
  
  _Ejemplo de respuesta de la peticion:_
  ```
  { 
  	"Product modified"
  }
  ```
  ##  Eliminar productos
  
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
_Ejemplo de respuesta de la peticion:_ 
```
{
   "Order created"
}
```
## Modificar un pedido

  PUT api/orders/id
  
  _Ejemplo de la peticion:_ 
   
   ```
   {        
    "status": "Listo",
    }
  ```
  _Ejemplo de respuesta de la peticion:_
  ```
  { 
  	"Order modified"
  }
  ```
  ## Eliminar un pedido
  
  DELETE api/orders/id
  ```
   {
   "Order deleted"
   }
```

## Autor ✒️

# Ramiro Gómez
