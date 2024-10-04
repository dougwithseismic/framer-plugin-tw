# Framer Plugin Boilerplate

This boilerplate provides a solid foundation for developing Framer plugins using TypeScript, Jotai for state management, and a local storage option. It includes various examples demonstrating usage and interactions, a type-safe router for creating multiple pages or tabs, and Jest for testing.

## Features

- TypeScript support
- Jotai for state management
- Local storage integration
- Type-safe routing for multiple pages/tabs
- Jest for testing
- Various usage examples

## Getting Started

1. Clone this repository
2. Navigate to the plugin directory:

   ```bash
   cd apps/framer-plugin
   ```

3. Install dependencies:

   ```bash
   pnpm install
   ```

4. Start the development server:

   ```bash
   pnpm run dev
   ```

   This will open the plugin on `http://localhost:5173`

## Connecting to Figma

1. Open Figma
2. Click on the Figma logo in the top-left corner
3. From the dropdown menu, select "Plugins"
4. Choose "Development" > "Show Development Mode"
5. Go to the "Plugins" tab at the top of the Figma window
6. Click "Open Development Plugin"
7. Select your plugin from the list

## Current Limitations

While this boilerplate provides a robust starting point, there are some limitations in the current Framer ecosystem:

- Creating custom text elements within nested frames is not currently supported. If you know how to set the parent of a text element, please contribute or reach out!

## Contributing

We welcome contributions to improve this boilerplate! If you have any questions, suggestions, or improvements:

1. Open an issue in this repository
2. Submit a pull request with your changes

## Learn More

To dive deeper into the technologies used in this boilerplate:

- [Framer API Documentation](https://www.framer.com/api/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Jotai Documentation](https://jotai.org/)
- [Jest Documentation](https://jestjs.io/docs/getting-started)

## Feedback

We hope this boilerplate provides a great experience for developing Framer plugins. As the Framer ecosystem matures, we'll continue to update and improve this boilerplate. Your feedback and contributions are greatly appreciated!

Enjoy building your Framer plugin!
