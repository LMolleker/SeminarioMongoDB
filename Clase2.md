# Seminario MongoDB 2020
 Leonardo Molleker
### Clase 2
______________________

1. Crear una nueva base de datos de un sistema de streaming de video (ej. Netflix, Flow, Amazon Prime) que permita almacenar movies.

> use netflix

> db.createCollection("movies")

2. Para cada movie, se deber�a guardar informaci�n como t�tulo (String), year (Number), rating (Number, entre 1.0 y 5.0), genre (String), description (String), actors (Array<String>), country (String), income (Number), duration (Number).

3. Agregar pel�culas usando insert(), insertOne() & insertMany().
	
> db.movies.insert({titulo: "Yo soy la venganza",year:2016, rating:3.7 , genre:"acci�n", description:"Stanley Hill es un hombre com�n...", 
actors:[{name:"John",surname:"Travolta"},{name:"Amanda",surname:"Schull"}],
country:"Estados Unidos",income:300000000, duration:92})

> db.movies.insertOne({titulo: "365 d�as",year:2020, rating:4.4 , genre:"drama", description:"Laura Biel es ejecutiva...", 
actors:[{name:"Anna",surname:"Sieklucka"},{name:"Michele",surname:"Molone"}],
country:"Polonia",income:150000000, duration:114})

> db.movies.insertMany([ 
{titulo: "Hubie Halloween",year:2020, rating:5.0 , genre:"Comedia", description:"Pese a su devoci�n por...",
 actors:[{name:"Adam",surname:"Sandler"},{name:"Kevin",surname:"James"}],
country:"Estados Unidos",income:327000000, duration:102},
{titulo: "Par�sitos",year:2019, rating:5.0 , genre:"drama", description:"La familia Kim, compuesta por el padre...", 
actors:[{name:"Choi",surname:"Woo-shik"},{name:"Park",surname:"So-dam"}],
country:"Japon",income:7200000, duration:120}])

4. Actualizar pel�culas agregando el field highlighted=true a aquellas con rating > 4.5.

> db.movies.updateMany(
{rating: {$gt:4.5}},
{$set:{highlighted:true}}
)

5. Actualizar pel�culas cambiando el genre �drama� por �bored�.

> db.movies.updateMany(
	{genre:"drama"},
	{$set:{genre:"bored"}}
	)

6. Borrar todas las pel�culas que tengan m�s de 30 a�os.

> db.movies.deleteMany({year:{$lt:1990}})

7. Buscar todas las pel�culas argentinas.

> db.movies.find({country:"Argentina"})

8.Buscar todas las pel�culas de acci�n con un buen rating (ej. > 4.0) que hayan salido los �ltimos 2 a�os.
  
> db.movies.find({genre:"accion", rating:{$gt:4.0}, year:{$gt:2018}})
