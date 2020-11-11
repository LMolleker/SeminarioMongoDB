# Seminario MongoDB 2020
 Leonardo Molleker
### Clase 1
______________________
1. Instalar MongoDB en ambiente local.
2. Conectarse a MongoDB vía CLI.
> mongod

> mongo

3.  Crear una nueva base de datos llamada futbolfifa.
  > use futbolfifa

4. Crear una nueva collection llamada players.
 > db.createCollection("players")
 >show collections

5. Insertar 5 documentos en la collection players con datos básicos (nombre, apellido, posición, fecha de nacimiento, etc).

> db.players.insert({name: "Robert", surname:"Rojas",position:"defenza", birth: 30/04/1996,number: 2 })

> db.players.insert({name: "Matias", surname:"Suarez",position:"delantero", birth: 09/05/1988,number: 7})

> db.players.insert({name: "Leonardo", surname:"Ponzio",position:"mediocampo", birth: 17/07/1982,number: 23 })

> db.players.insert({name: "Enzo", surname:"Perez",position:"mediocampo", birth: 22/02/1986,number: 24 })

> db.players.insert({name: "Rafael", surname:"Santos Borré",position:"delantero", birth: 15/09/1995,number: 19 })

6.  Listar todos los documentos de la collection players.

 > db.players.find()

7.  Crear otras collections con documentos (ej. teams, games, etc).

> db.createCollection("teams")

> db.teams.insert({name:"River Plate", color:"rojo y blanco", puntos: 32})

> db.teams.insert({name:"Boca Juniors", color:"amarillo y azul", puntos: 32})

> db.teams.insert({name:"San Lorenzo", color:"rojo y azul", puntos: 30})

> db.teams.insert({name:"Racing", color:"celeste y blanco"}, puntos: 27)