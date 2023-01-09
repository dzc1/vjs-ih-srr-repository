## Comandos de Git

Sigue estos pasos para hacer cambios en tu repositorio:

Para subir tus cambios al stream de git tienes que `añadir` tus cambios recientes mediante el siguiente comando:

`Añadir` todos tus cambios:

```bash
git add .
```

`Añadir` cambio individual por nombre de archivo:

```bash
git add "nombre de archivo ej: 01-bsaic-layout.html"
```

`Añadirle` un `comentario` al `commit` que estaremos empujando a tu repositorio en la web.

```bash
git commit -m "Texto descriptivo de los cambios recientes"
```

`Empujar` los cambios recientes a tu repositorio en la web. `Extended`.

```bash
git push origin "nombre del branch/rama que estaremos apuntando"
```

`Empujar` los cambios recientes a tu repositorio en la web. `Simplified`.

```bash
git push
```
