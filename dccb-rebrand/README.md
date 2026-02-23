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

- Installing SSL plugin

```bash
# This is a comment inside the code block
npm install @vitejs/plugin-basic-ssl
npm run dev
```

so far the inital installation before component development is:

# 🚀 DCCB Rebrand - Portfolio v1.02

This project is a high-performance React application built with **Vite**, designed for scalability using **shadcn/ui**.

---


## 🏗 shadcn/ui Architecture (v4 Optimized)

Unlike traditional component libraries, shadcn is not a closed package. Components are downloaded as source code directly into your `src/components/ui` folder, giving you 100% control.

## Automatic Dependency Management
When running `npx shadcn@latest init`, the modern CLI detects your environment and automatically configures:
**`class-variance-authority` (cva):** For managing component variants (e.g., button sizes/colors).
**`tailwind-merge` & `clsx`:** For intelligent class name merging.
**`src/lib/utils.js`:** Automatically creates the `cn()` utility function used by these libraries.

## 🛠 Core Tech Stack

**Framework:** React + Vite (JS)
**Styling:** Tailwind CSS v4 + shadcn/ui
**Routing:** Wouter (Ultra-lightweight 2kb)
**Security:** @vitejs/plugin-basic-ssl (Required for modern browser APIs)
**Network:** Tailscale Mesh VPN


### Why install `@types/node`?
In modern ESM environments, Node.js does not globally recognize variables like `__dirname`. We install these types manually to:
1.  **Configure Path Aliases (`@/`):** Allow Vite to map `@` to the `/src` directory.
2.  **Fix Editor Warnings:** Resolve "not defined" errors in `vite.config.js` when using the `path` module.

---

## 📥 Step-by-Step Installation

### 1. Preparation & Typing
Install the base dependencies and Node definitions so your configuration files work without errors.


```bash
npm install
npm install -D @types/node
```

> [!IMPORTANT]
> Ensure your `vite.config.js` defines `__dirname` manually (using `fileURLToPath`) so that shadcn aliases work correctly in ESM modules.

### 2. shadcn/ui Initialization
This command sets up the `components.json` file and the style utilities (`cn`, `cva`, `twMerge`) in one go.

```bash
# Already completed: Configures styles, CSS variables, and class utilities.
npx shadcn@latest init
```

---

## ⚡ Development Commands

### Run with Remote Access (Tailscale)
Starts the server in HTTPS mode and exposes it to your private network.


```bash
npm run dev
```

> [!TIP]
> **Network Checklist:** Access the app via `https://[YOUR-TAILSCALE-IP]:3000`. Since it uses a self-signed certificate, accept the security warning in your browser ("Advanced" -> "Proceed").

### Fix Blocked Port
If the Vite process doesn't close correctly on the Raspberry Pi:

```bash
# Find the Process ID (PID)
sudo lsof -i :3000

# Kill the process
kill -9 <PID>
```

---

## 🎨 Component Management

### Add New UI Elements
```bash
npx shadcn@latest add button card input
```

### Using the `cn()` Utility
Use this function (auto-generated in `src/lib/utils.js`) to combine base classes with conditional classes or CVA variants without specificity conflicts.

```jsx
import { cn } from "@/lib/utils"

// Usage Example
<div className={cn("text-sm font-medium", isSelected && "text-blue-500")} />
```

---

## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
