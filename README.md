# filta-orchard-test

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

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

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

### Development Decisions:

I initialized a project with Vue 3 and Vite because it is the framework with which I have the most experience.
I also decided to choose SMACSS as my basic CSS structure to avoid adding complexity, and the same with LESS since I don’t see the need to use a CSS framework or a more complex methodology.
I chose to change the provided typography from .ttf to .woff because it is lighter.
I created some mocks to simulate content calls as if it were in a CMS.
I left the variables.less file as global to avoid importing it into each component or view.
I created some basic interactions and animations but gave them meaning according to their content.
I decided to create the styles as mobile-first since it was requested to be responsive but also because it is a good practice.
Some basic meta tags were added at the end because it is a good practice if you think about search engine optimization. Finally, some local tests were run with accessibility extensions like Wave to ensure it met minimum standards (only one error was found in the contrast of a text, but since it is part of the design, it was not modified).
