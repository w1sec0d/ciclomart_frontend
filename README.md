# CicloMart (Frontend) - Buy and Sell Bicycles and Cycling Spare Parts

[![en](https://img.shields.io/badge/Language-English-green)](README.md) [![es](https://img.shields.io/badge/Idioma-Español-green)](README.es.md)

- App Link: [ciclomart.com](https://ciclomart.com)
- User Instructions: [Canva Presentation](https://www.canva.com/design/DAG23e0XYS4/qg8KUY0ukJcyz4XLgN-wlw/edit?utm_content=DAG23e0XYS4&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)
- Hours Listing: [Google Spreadsheet](https://docs.google.com/spreadsheets/d/16X9bC5Drs2z4pwJ-D0CnR451mCKMRXd3i1B2WLkOS3M/edit?usp=sharing)

- Ciclomart Frontend: [Github Repository](https://github.com/w1sec0d/ciclomart_frontend)
- Ciclomart Backend: [Github Repository](https://github.com/w1sec0d/ciclomart_backend)

## Description

CicloMart is a web marketplace for buying and selling bicycles and cycling spare parts, with features tailored to the needs of cyclists. It offers advanced filters for spare parts (transmission groups, suspension, weight, rims, brakes, and many other characteristics), side-by-side bicycle comparison, and secure handling of legal ownership cards for every listing, providing a unique, secure, and reliable experience.

## Project Demo

![CicloMart demo](/src/docs/preview.gif)

[Click here to watch the full demo](https://youtu.be/vG_Zx618jJ4)

### Landing page

![CicloMart landing page](/src/docs/landingPage.png)

### Registration page

![Registration page](/src/docs/register.png)

### Advanced spare parts filter

![Advanced spare parts filter](/src/docs/SparePartsFilter.png)

### Product view

![Product view](/src/docs/productView.png)

### User profile

![User profile](/src/docs/profile.png)

## System Architecture
![System Architecture](/src/docs/system_architecture.png)

<!-- ### User Instructions -->

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

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
