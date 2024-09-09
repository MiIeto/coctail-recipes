
# Coctail Recipes

Una aplicacion creada con React.js para buscar recetas de bebidas alcoholicas segun ingredientes, utilizando una API gratuita para la obtencion de informacion


## Demo

https://coctail-recipes-hazel.vercel.app/


## Run Locally

Clone the project

```bash
  git clone https://github.com/MiIeto/coctail-recipes.git
```

Go to the project directory

```bash
  cd coctail-recipes
```

Install dependencies

```bash
  pnpm install
```

Start the server

```bash
  pnpm run dev
  or
  pnpm dev
```


## API Reference

https://www.thecocktaildb.com/api.php

#### Get all categories

```https
  GET /api/json/v1/1/list.php?c=list
```

#### Get Recipes

```https
  GET /api/json/v1/1/filter.php?c=category&i=ingredient
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `category`      | `string` | **Required**. Category of item to fetch |
| `ingredient`      | `string` | **Required**. Ingredient of item to fetch |

#### Get item

```https
  GET /api/json/v1/1/lookup.php?i=id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |


## Tech Stack

React, Typescript, TailwindCSS, ZOD, Zustand, React-Router-DOM


## Gratitudes

Muchas Gracias a **@codigoconjuan** por impartir el curso utilizado para crear este proyecto
