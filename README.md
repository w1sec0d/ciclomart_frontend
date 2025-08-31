# CicloMart_front

**Read this in other languages:** **English** | [Español](README.es.md)

CicloMart is a web application for buying and selling bicycles and cycling spare parts. It offers a unique, secure, and reliable experience by requiring legal ownership documentation from sellers. Users can find exactly what they're looking for using advanced filters such as transmission groups, suspension, weight, rims, brakes, and many other relevant characteristics.

## Team Members

- **Juan David Madrid Contreras** - [JuMad-SE](https://github.com/JuMad-SE)
- **Carlos David Ramirez Muñoz** - [w1sec0d](https://github.com/w1sec0d)
- **Johan David Rodriguez Gutierrez** - [Homeroso](https://github.com/Homeroso)
- **Ronald Daniel Jacanamejoy Mutumbajoy** - [RonaldDaniel20](https://github.com/RonaldDaniel20)

## Developer Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/CicloMart_front.git
cd CicloMart_front
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173` to see the application running.

To run the project correctly, you must include a .env file in the project root with the following environment variables:

- VITE_API_URL

### Additional Considerations

- It's recommended to install the [Prettier for VSCode](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) formatter extension and set it as the default formatter for .js and .jsx files

  > ❗ **Important:** Before making a Pull Request, you must run:

  ```bash
  npm run format
  ```

This will format all files in a standard way and avoid unnecessary conflicts in pull requests

- The project uses Redux, a library that allows having a global state in the application,
  where data or variables shared between different components are stored.

  #### Using Global State

  - How to read global state?
    To access global state, you must use the `useSelector` hook from the `react-redux` library. This hook receives a function that takes the global state and returns only a portion of the state that is needed. For example, this is how we can access the 'user' variable that contains user information globally from any component:

    ```javascript
    import { useSelector } from 'react-redux'
    // Later in the component we need:
    const Register = () => {
      const user = useSelector((state) => state.user)
      // ...
    }
    ```

  - How to modify global state?
    To modify the state, we first use the useDispatch hook, which will return a dispatch function
    that receives as a parameter actions defined in the Redux slices. These actions are functions that
    modify the global state like setNotification(), clearNotification. This allows us, for example, from any component, to modify the global notification variable

    ```javascript
    import { useDispatch } from 'react-redux'
    // Later in the component we need:
    const Register = () => {
      const dispatch = useDispatch()
      // ...
      dispatch(
        setNotification({
          title: 'Hello Redux!',
          text: 'This is a notification',
          icon: 'info',
        })
      )
    }
    ```

  #### Debugging Global State

  To debug global state, you can install the [Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd) browser extension. This extension allows you to see the global state in real time and view the actions being executed.

  This extension adds a window in the browser that shows the global state and the actions being executed, allowing you to see the global state in real time and debug the application more easily.

## License

The project can be used for educational and non-commercial purposes only. See more details below:

[![License: CC BY-NC 4.0](https://img.shields.io/badge/License-CC%20BY--NC%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc/4.0/)
