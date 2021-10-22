# enekotrigo_openWeather
## _Htmlr_

El html se compone de un navegador lateral responsive al tamaño de la pantalla, un header en el que hay un icono y un H2 con el eslogan del proyecto, y luego la estructura.

La estructura esta basada en un conjunto de DIV
1. El primero de todos contiene el formulario, que a su vez esta compuesto por un text input y un input de tipo boton. Este solo aparece cuando se realiza la accion correspondiente
2. El segundo esta dedicado a mostrar un card creado por Jquery con la informacion correspondiente al tiempo actual corelacionado con el lugar introducido en el formulario anterior
3. Despues de este encontramos un div que cumnple la funcion decontener el input de tipo boton que al ser seleccionado ejecuta la accion correspondiente 
4. Por ultimo esta el ultimo div donde se inserta una tabla con la informacion de los proximos 5 dias

## _Sass_

- Style: Es el Scss principal en este se declaran todas las propiedades de las clases y de los objetos 
- Variables: En este scss se declaran la bariables 
- Mixin: En este scss se declaran los atributos mas repetido con tal de facilitar el Stile 

## _Ajax_
En el Ajax hemos hecho dos peticiones, en la primera nos debuelbe la informacion del momento actual, y la segunda la informacion de los proximos dias. Los archivos jason que debuelve cada peticion son diferentes por lo que el tratamiento de estos tambien se hace de forma diferente

## _Jquery_
En el Jquery se realizan todas las acciones, desde el control del menu, hasta mostrar la informacion solicitada.
