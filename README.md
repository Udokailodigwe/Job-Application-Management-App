# Jobify

### Track Your Job Search

- Job Tracking application, to enable you keep track of your job
  application, upcoming interviews and essentially organizing your job
  search activities. Makes your life as a potential job candidate
  stress free, so you can concentrate on landing your preferred job.

### Run The App Locally

```sh
npm run install-dependencies
```

- rename .env.temp to .env
- setup values for - MONGO_URL, JWT_SECRET, JWT_LIFETIME

```sh
npm start
```

- visit url http://localhost:3000/

### Setup React App

- create <b>client</b> folder
- open terminal

```sh
cd client
```

```sh
npx create-react-app .
```

```sh
npm start
```

### App Styling

- Utilized Normalize.css and Global Styles, CSS in JS (styled-components)
- normalize.css [normalize docs](https://necolas.github.io/normalize.css/)
- Checkout [Styled Components Docs](https://styled-components.com/)

```sh
npm install normalize.css
```

- import 'normalize.css' in index.js

- for styled components

```sh
npm install styled-components
```

```js
import styled from "styled-components";

const El = styled.el`
  // styles go here
`;
```

```js
const Wrapper = styled.el``;

const Component = () => {
  return (
    <Wrapper>
      <h1> Component</h1>
    </Wrapper>
  );
};
```

- Wrappers was used only for styling
- Wrappers folder in assets

### Site Navigation

- React Router Version 6
- [React Router Docs](https://reactrouter.com/docs/en/v6)

```sh
npm install history@5 react-router-dom@6
```

- Four components utilized

```js
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
```
