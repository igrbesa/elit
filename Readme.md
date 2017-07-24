# Blog : Made using React, Redux, React Router 4, Webpack Sample App

![React, Redux, Router, Webpack, Sass](https://cloud.githubusercontent.com/assets/733074/25338311/193a1a40-28ff-11e7-8f22-9a5d9dac7b84.png)


## Blog Application
This is forked from [Budgeting app](https://github.com/ModusCreateOrg/budgeting-sample-app-webpack2)
. It is free to use it as a reference app or a starter kit.

## Key concepts:

- [x] [Webpack 2 Tree shaking](http://moduscreate.com/webpack-2-tree-shaking-configuration/)
- [x] [PRPL pattern](https://www.slideshare.net/grgur/prpl-pattern-with-webpack-and-react) with minimal application core
- [x] Automatic code splitting with React Router 4 and `import()` statement
- [x] Automatic common chunk bundling
- [x] CSS modules
- [x] Performance budgets in Webpack 2


#### How did we get that performance?

1. **Minimal application core.** We decided to ditch the usual convention of creating a vendor chunk. Instead, it's bundled in the app core. The app core is actually very small, containing just the code needed to bootstrap the app.
2. **Common code is a chunk.** We let Webpack figure out which bundles we reuse in chunks and create a common chunk that's also asyncronous. 
3. **Redux module injection**. Each chunk contains respective views _and_ redux modules. Yes, that means reducers, action creators, actions - are all dynamically injected as we navigate through routes. That adds to the _minimal application core_ concept and PRPL pattern. 
4. **H2 Push.** The app is hosted on Firebase and we use the magic of _HTTP2 Push_ to push some of the scripts before they are requested.
5. **Pre-caching**. Service Workers pre-cache resources so the browser can access them as soon as the user needs to.



_Simulated size warning_

Note that running webpack dev server in production mode (`yarn run prod`) will trigger this warning because of the additional dev server code injected in the app. This code will not show in regular production builds.

## Service Workers
Service workers are enabled only when serving static files, not through webpack-dev-server. Here's how you can test service worker functionality:
1. Run `yarn run build` (or `npm run build`) to build the app
2. Run `yarn run serve` (or `npm run serve`) to serve the app on [localhost:3000](http://localhost:3000)
3. Run a new instance of Chrome with disabled security (because localhost is not on https): 

**OS X**

```bash
open -a "Google Chrome" --args --user-data-dir=/tmp/unsafe --unsafely-treat-insecure-origin-as-secure=http://localhost
```

**Linux**

```bash
/path/to/chrome --user-data-dir=/tmp/unsafe --unsafely-treat-insecure-origin-as-secure=http://localhost
```

**Windows**

```bash
chrome.exe --user-data-dir=c:\temp --unsafely-treat-insecure-origin-as-secure=http://localhost
```

4. Now you can observe network traffic in the Network tab or SW activity in Application > Service Workers in Developer Tools

## Stack
The app was built using these aweseome technologies

- [x] [Webpack 2.4](https://webpack.github.io)
- [x] [React 15.x](https://facebook.github.io/react/)
- [x] [Redux 3.6](http://redux.js.org/)
- [x] [React Router 4](https://reacttraining.com/react-router/)
- [x] [Reselect](https://github.com/reactjs/reselect/)
- [x] [Babel](https://babeljs.io/)
- [x] [Prettier](https://github.com/prettier/prettier)
- [x] [Yarn](https://yarnpkg.com/en/)
- [x] [Ducks](https://github.com/erikras/ducks-modular-redux/) 🐣
- [x] [Sass](http://sass-lang.com/)
- [x] [D3](https://d3js.org/)

## Yarn Scripts

* `yarn` - install dependencies
* `yarn start` - run development server
* `yarn run prod` - run production server
* `yarn run build` - build app for deployment
* `yarn run serve` - serve previously built app using pushstate server
* `yarn run lint` - lint check
* `yarn run lint:fix` - lint check + autofixes + prettify code with __prettier__

## NPM Scripts
Similar to Yarn, really...

* `npm install` - install dependencies
* `npm start` - run development server
* `npm run prod` - run production server
* `npm run build` - build app for deployment
* `npm run serve` - serve previously built app using pushstate server
* `npm run lint` - lint check
* `npm run lint:fix` - lint check + autofixes + prettify code with __prettier__

## Want more?
This project is maintained by [Modus Create](https://moduscreate.com). Fantastic React apps are in our DNA so give us a buzz if we can help with your awesome project.

## License
[MIT](License.md)
