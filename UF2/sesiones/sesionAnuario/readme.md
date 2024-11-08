# Sesion anuario
1. Creamos carpeta
2. Creamos repo
3. Inicializamos el proyecto `npm init` e instalamos lite-server: `npm install lite-server`
4. crear `.gitignore` para ignorar la carpeta node_modules
5. creamos archivo index.html e index.js
6. creamos carpeta /src y dentro metemos el index.html y index.js, dentro de la carpeta creamos dos carpetas: /componentes y /vistas
7. creamos un componente llamado header.js y para exportarlo ponemos export delante de la funcion
8. para importarlo en el index.js ponemos `import {header} from "./componentes/header.js"`
9. y para poder cargar scripts desde diferentes archivos en el html, en la etiqueta script, hay que poner `type="module"`