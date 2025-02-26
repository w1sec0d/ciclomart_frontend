# CicloMart_front

Proyecto del curso Ingeniería de Software II de la Universidad Nacional de Colombia. Grupo de trabajo: CICLOMART

## Descripción

CicloMart es una aplicación web de compra-venta de bicicletas y repuestos de ciclismo. Ofrece una experiencia única, segura y confiable, al exigir documentación legal de propiedad a los vendedores. Los usuarios pueden encontrar exactamente lo que buscan usando filtros avanzados como grupos de transmisión, suspensión, peso, rines, frenos entre muchas otras características relevantes.

## Nombre del equipo

**CICLOMART**

## Miembros del equipo

- **Juan David Madrid Contreras** - [JuMad-SE](https://github.com/JuMad-SE)
- **Carlos David Ramirez Muñoz** - [w1sec0d](https://github.com/w1sec0d)
- **Johan David Rodriguez Gutierrez** - [Homeroso](https://github.com/Homeroso)
- **Ronald Daniel Jacanamejoy Mutumbajoy** - [RonaldDaniel20](https://github.com/RonaldDaniel20)

## Instalación para desarrolladores

1. Clona el repositorio:

```bash
git clone https://github.com/your-username/CicloMart_front.git
cd CicloMart_front
```

2. Instala las dependencias:

```bash
npm install
```

3. Ejecuta el servidor de desarrollo:

```bash
npm run dev
```

4. Abre tu navegador y navega a `http://localhost:5173` para ver la aplicación en funcionamiento.

Para ejecutar correctamente el projecto debe incluirse un archivo .env en la raiz del proyecto con las siguientes variables de entorno:

- VITE_API_URL

### Consideraciones adicionales

- Es recomendable instalar la extensión del formateador [Prettier para VSCODE](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) y establecerla como formateador por defecto para archivos .js y .jsx

  > ❗ **Importante:** Antes de hacer un Pull Request es necesario ejecutar:

  ```bash
  npm run format
  ```

Esto formateara todos los archivos de forma estándar y evitará conflictos innecesarios en los pull request

- El proyecto usa Redux, una librería que permite tener un estado global en la aplicacion,
  donde se almacenan los datos o las variables que se comparten entre los diferentes componentes.

  #### Usando el estado global

  - ¿Cómo se lee el estado global?
    Para acceder al estado global se debe usar el hook `useSelector` de la librería `react-redux`, este hook recibe una función que recibe el estado global y retorna solo una porción del estado que se necesite. Por ejemplo, así podremos acceder desde cualquier componente a la variable 'user' que contiene la informacion del usuario de forma global:

    ```javascript
    import { useSelector } from 'react-redux'
    // Más tarde en el componente que necesitemos:
    const Register = () => {
      const user = useSelector((state) => state.user)
      // ...
    }
    ```

  - ¿Cómo se modifica el estado global?
    Para modificar el estado primero usaremos el hook useDispatch, este retornará una funcion dispatch,
    que recibe como parametro acciones definidas en los slices de Redux, estas acciones son funciones que
    modifican el estado global como setNotification(), clearNotification. Esto lo que nos permite es por ejemplo, desde cualquier componente, modificar la variable global de notificación

    ```javascript
    import { useDispatch } from 'react-redux'
    // Más tarde en el componente que necesitemos:
    const Register = () => {
      const dispatch = useDispatch()
      // ...
      dispatch(
        setNotification({
          title: 'Hola Redux!',
          text: 'Esto es una notificación',
          icon: 'info',
        })
      )
    }
    ```

  #### Debuggeando el estado global

  Para debuggear el estado global se puede instalar la extensión de [Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd) en el navegador, esta extensión permite ver el estado global en tiempo real y ver las acciones que se están ejecutando.

  Esta extensión agrega una ventana en el navegador que muestra el estado global y las acciones que se están ejecutando, permitiendo ver el estado global en tiempo real y debuggear la aplicación de forma más sencilla.

## Licencia

Es posible usar el proyecto con fines educativos y no-comerciales únicamente. Ver más detalles a continuación:

[![License: CC BY-NC 4.0](https://img.shields.io/badge/License-CC%20BY--NC%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc/4.0/)
