# Seminario MongoDB 2020
 Leonardo Molleker
### Clase 3
______________________
1. Utilizar la misma base de datos de películas e insertar varias películas con distinto contenido.
> db.movies.insertMany([ 
{titulo: "Seven:los siete pecados capitales",year:1995, rating:5.0 , genre:"crimen", description:"Un solitario detective veterano a punto de retirarse...",
 actors:[{name:"Morgan",surname:"Freeman"},{name:"Brad",surname:"Pitt"}],
country:"Estados Unidos",income:327000000, duration:127},
{titulo: "La odisea de los giles",year:2019, rating:5.0 , genre:"aventura", description:"Cuando un grupo de vecinos descubre que perdieron todos sus ahorros...", 
actors:[{name:"Luis",surname:"Brandoni"},{name:"Ricardo",surname:"Darin"},{name:"Andres",surname:"Parra"},{name:"Chino",surname:"Darin"}],
country:"Argentina",income:7200000, duration:120}])

2. Listar todas las películas del año 2018.
> db.movies.find({year: 2018})

3. Listar las 10 primeras películas de Hollywood.
 > db.movies.find({},{country:'Hollywood'}).limit(10)

4. Listar las 5 películas más taquilleras.
> db.movies.find({}, {income: -1}).limit(5)

5. Listar el 2do conjunto de 5 películas más taquilleras.
> db.movies.find({},{title:1, _id:0}).sort({income:-1}).skip(5).limit(5)

6. Repetir query 3 y 4 pero retornando sólo el título y genre.

> db.find({},{title:1, genre:1, _id:0}).sort({income:-1}).limit(5)

7. Mostrar los distintos países que existen en la base de datos.
 > db.find({},{country})
