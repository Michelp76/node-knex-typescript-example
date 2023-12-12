# Installer Yarn (dans un terminal/cmd Admin) :
```
corepack enable
```

# Installer dépendances (avec Yarn) :
```
yarn
```

# Créer le fichier .env (dotenv) :
```
DATABASE_HOSTNAME="localhost"
DATABASE_NAME="api-example"
DATABASE_USERNAME="api-user"
DATABASE_PASSWORD="XXXXXXX"
DATABASE_PORT=5432
DATABASE_POOL_MIN=2
DATABASE_POOL_MAX=10
```

# Créer le base de données (à la mano) :
Créer une bd "api-example" assignée à l'utilisateur (qu'il faut créer) "api-user"

# Compilation : 
```
yarn build.ts.watch
```

# Lancement (dans un autre terminal en parallèle) : 
```
yarn dev
```

# Consulter/interagir avec les données : 
```
http://localhost:8000/events
http://localhost:8000/user/current
```
