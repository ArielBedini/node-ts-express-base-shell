
# Aplicación Registro de usuarios e inicio de Sesión

Desarrollamos una Ap para permitir el registro de usuario de nuestra Web. Implementamos también las capacidades de verificación de autenticidad e inicio de sesión de los usuarios registrados

## Desarrollo

La aplicación esta desarrllada íntegramente en TypeScript + NodeJs. 

Consiste en un Servidor público de nuestro sitio y en una API Rest para le manejo de las consultas de los usuario.


Para dar inicio del proyecto instalamos los módulos y la estructura de directorios base para nuestra API.

```
npm init
```

#### Intalamos las dependencias de Desarrollo 

```
npm i -D typescript rimraf tsx @types/express

```

### Instalamos las depencias de la App

```
npm i dotenv env-var express
```

## Estructra de una ApiRest

Nuestra Api Rest la estructuramos de la siguiente forma

Tener una funcíon anónima autoinvocante que llama a la función main().
