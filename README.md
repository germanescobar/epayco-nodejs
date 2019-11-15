# Integración de ePayco con React y Express

Para integrar pagos en tu aplicación crea una cuenta en [ePayco](https://epayco.co/) y ubica los siguientes valores que encontrarás en **Integraciones** -> **Llaves API** dentro de la interfaz web:

* `PUBLIC_KEY`: debes incluir este valor en `client/Home.js` en el valor del atributo `data-epayco-key`.
* `P_KEY`: debes incluir este valor en `server/routes.js` en la variable `pkey`

Para que la confirmación funcione debes publicar la aplicación en Heroku y actualizar las URL's en el archivo `client/Home.js`
