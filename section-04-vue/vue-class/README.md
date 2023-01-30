# vue-class

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Class Info

#### Info acerca de vite/npm/basicamente info acerca de como funciona el projecto

HMR === hot module replacement

#### Estructura de un archivo SFC

SFC === Single File Component === Componente de Archivo Unico
.vue
Diego.vue
DiegoInfo.vue

3 elementos
html ---
css ---
js ---
html === <template>
js === <script>
css === <style>

#### Info acerca de elemento "style"

Cuando tengamos la palabra "scoped" dentro del "opening tag/etiqueta de apertura" significa que ese CSS/estilos solo se aplican a este archivo!

#### Info acerca de elemento "script"

Cuando tengamos la palabra "setup" dentro del "opening tag/etiqueta de apertura" significa que esta logica esta diseñada con el approach del composition API.

#### Estrcutura de un componente vue v-compositon api

<!-- HTML aca -->

<template></template>

<!-- JS - Logica aca -->
<script setup></script>
<!-- Css Estilos aca -->
<style scoped></style>
