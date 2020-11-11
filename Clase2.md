# Seminario MongoDB 2020
 Leonardo Molleker
### Clase 2
______________________

1. Crear una nueva base de datos de un sistema de streaming de video (ej. Netflix, Flow, Amazon Prime) que permita almacenar movies.

> use netflix

> db.createCollection("movies")

2. Para cada movie, se debería guardar información como título (String), year (Number), rating (Number, entre 1.0 y 5.0), genre (String), description (String), actors (Array<String>), country (String), income (Number), duration (Number).

3. Agregar películas usando insert(), insertOne() & insertMany().
	
> db.movies.insert({titulo: "Yo soy la venganza",year:2016, rating:3.7 , genre:"acción", description:"Stanley Hill es un hombre común...", 
actors:[{name:"John",surname:"Travolta"},{name:"Amanda",surname:"Schull"}],
country:"Estados Unidos",income:300000000, duration:92})

> db.movies.insertOne({titulo: "365 días",year:2020, rating:4.4 , genre:"drama", description:"Laura Biel es ejecutiva...", 
actors:[{name:"Anna",surname:"Sieklucka"},{name:"Michele",surname:"Molone"}],
country:"Polonia",income:150000000, duration:114})

> db.movies.insertMany([ 
{titulo: "Hubie Halloween",year:2020, rating:5.0 , genre:"Comedia", description:"Pese a su devoción por...",
 actors:[{name:"Adam",surname:"Sandler"},{name:"Kevin",surname:"James"}],
country:"Estados Unidos",income:327000000, duration:102},
{titulo: "Parásitos",year:2019, rating:5.0 , genre:"drama", description:"La familia Kim, compuesta por el padre...", 
actors:[{name:"Choi",surname:"Woo-shik"},{name:"Park",surname:"So-dam"}],
country:"Japon",income:7200000, duration:120}])

4. Actualizar películas agregando el field highlighted=true a aquellas con rating > 4.5.

> db.movies.updateMany(
{rating: {$gt:4.5}},
{$set:{highlighted:true}}
)

5. Actualizar películas cambiando el genre “drama” por “bored”.

> db.movies.updateMany(
	{genre:"drama"},
	{$set:{genre:"bored"}}
	)

6. Borrar todas las películas que tengan más de 30 años.

> db.movies.deleteMany({year:{$lt:1990}})

7. Buscar todas las películas argentinas.

> db.movies.find({country:"Argentina"})

8.Buscar todas las películas de acción con un buen rating (ej. > 4.0) que hayan salido los últimos 2 años.
  
> db.movies.find({genre:"accion", rating:{$gt:4.0}, year:{$gt:2018}})
