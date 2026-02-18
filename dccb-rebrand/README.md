# Old React CRA app replaced with a Brand new Vite + React + JavasCript tooling

This is made in order to rebrand dccb to offer Arquitectural and CAD technical services online, steps
made to this point:

- Migration of the old React CRA project to a legacy repo by directories.
- Installing React + JavaScript using Vite tooling.
- The server shows private to the PI, so next step is to make it public to my network.

## Firsts steps before starting components developing

- Installing tailwind css and vite plugin by - npm install tailwindcss @tailwindcss/vite

```bash
# This install tailwind + tailwind vite plugin
npm install tailwindcss @tailwindcss/vite
```

> **Note:** after tailwind command, add @tailwind tag to index.css and also tailwindcss() plugin
> vite config.

## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
