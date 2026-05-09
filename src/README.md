# Arcade API 🎮

API REST desarrollada con Express 5, TypeScript y pnpm para la gestión de máquinas arcade.

Este proyecto implementa un CRUD completo utilizando almacenamiento en memoria y middlewares personalizados.

---

#  Descripción del dominio

El dominio implementado es una Sala de Videojuegos / Arcade.

El recurso principal son las máquinas arcade, las cuales contienen información sobre:

- nombre de la máquina
- videojuego
- cantidad de tokens requeridos
- disponibilidad

---

#  Tecnologías utilizadas

- Node.js
- Express 5
- TypeScript
- pnpm
- ts-node-dev

---

#  Estructura del proyecto

```txt
arcade-api/
├── package.json
├── pnpm-lock.yaml
├── tsconfig.json
├── .env.example
└── src/
    ├── app.ts
    ├── server.ts
    ├── types.ts
    ├── store.ts
    └── routes/
        └── machines.routes.ts
```


#  Autor

Julian Camilo Avilez Caviedes

---

# Link para ver los resultados en imagenes 

https://docs.google.com/document/d/1RSJxmoJcPLr91JuW-Q37ooMz8VZ2-55gubB3zySDVn8/edit?usp=sharing