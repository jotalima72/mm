module.exports =
  {
    "type": "postgres",
    "host":  'postgres_container',
    "port": 5432,
    "username": 'postgres',
    "password": 'postgres' ,
    "database": 'mm',
    "migrations": ["./dist/migrations/*.{ts,js}"],
    "entities": ["./dist/**/entities/*.{ts,js}"],
    "cli": {
      "migrationsDir": "./src/migrations"
    },

    "logging": false,
    "syncronize": true
  }
