# Seminario MongoDB 2020
 Leonardo Molleker
### Clase 4
___________________________
1. Utilizar la misma base de datos de pel�culas e insertar varias pel�culas (al menos 30) con distinto contenido.
> db.movies.insertMany({})

2. Crear �ndice en field rating y luego hacer b�squedas usando este campo.
> db.movies.createIndex({rating: 1})

> db.movies.find({rating: 4.5})

3. Crear �ndice en title y description, y despu�s hacer b�squedas de texto en estos campos.
> db.movies.createIndex({title:"text", description:"text"})

>db.movies.find({$text:{$search:"rocky", "boxeo"})
