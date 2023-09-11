# Web Awesome

A forward-thinking library of web components.

- Works with all frameworks 🧩
- Works with CDNs 🚛
- Fully customizable with CSS 🎨
- Includes an official dark theme 🌛
- Built with accessibility in mind ♿️
- Open source 😸

Built by the folks behind [Font Awesome](https://fontawesome.com/).

---

Documentation: [shoelace.style](https://shoelace.style)

Source: [github.com/shoelace-style/shoelace](https://github.com/shoelace-style/shoelace)

Twitter: [@shoelace_style](https://twitter.com/shoelace_style)

---

## Developers ✨

Developers can use this documentation to learn how to build Web Awesome from source. You will need Node >= 14.17 to build and run the project locally.

**You don't need to do any of this to use Web Awesome!** This page is for people who want to contribute to the project, tinker with the source, or create a custom build of Web Awesome.

If that's not what you're trying to do, the [documentation website](https://shoelace.style) is where you want to be.

### What are you using to build Web Awesome?

Components are built with [LitElement](https://lit-element.polymer-project.org/), a custom elements base class that provides an intuitive API and reactive data binding. The build is a custom script with bundling powered by [esbuild](https://esbuild.github.io/).

### Forking the Repo

Start by [forking the repo](https://github.com/shoelace-style/shoelace/fork) on GitHub, then clone it locally and install dependencies.

```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/webawesome
cd webawesome
npm install
```

### Developing

Once you've cloned the repo, run the following command.

```bash
npm start
```

This will spin up the dev server. After the initial build, a browser will open automatically. There is currently no hot module reloading (HMR), as browser's don't provide a way to reregister custom elements, but most changes to the source will reload the browser automatically.

### Building

To generate a production build, run the following command.

```bash
npm run build
```

### Creating New Components

To scaffold a new component, run the following command, replacing `wa-tag-name` with the desired tag name.

```bash
npm run create wa-tag-name
```

This will generate a source file, a stylesheet, and a docs page for you. When you start the dev server, you'll find the new component in the "Components" section of the sidebar.

### Contributing

Web Awesome is an open source project and contributions are encouraged! If you're interesting in contributing, please review the [contribution guidelines](CONTRIBUTING.md) first.

## License

Web Awesome is available under the terms of the MIT license.
