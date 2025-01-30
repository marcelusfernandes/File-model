# Figma Page Structure Generator

A Figma plugin that automatically creates a standardized page structure for design projects, helping teams maintain consistent organization across their files.

## Features

- Creates a complete pre-defined page structure instantly
- Organizes pages into logical groups:
  - INTRO (About section)
  - HANDOFF (Design delivery)
  - DESIGN PROCESS (Design workflow pages)
  - ARCHIVE (Version history and components)
- Uses intuitive icons for easy visual navigation
- Includes dedicated pages for:
  - Discovery and research
  - Benchmarking
  - Design exploration
  - Working files
  - Prototypes
  - Component libraries
  - Version history

## Installation and Setup

Below are the steps to get your plugin running:

1. Download Node.js which comes with NPM:
   https://nodejs.org/en/download/

2. Install TypeScript globally:
   ```bash
   npm install -g typescript
   ```

3. Install the plugin dependencies:
   ```bash
   npm install --save-dev @figma/plugin-typings
   ```

## Development

This plugin is built using TypeScript, providing better code completion and type checking.

To set up your development environment:

1. Download Visual Studio Code: https://code.visualstudio.com/
2. Open this directory in Visual Studio Code
3. Compile TypeScript to JavaScript: 
   - Go to "Terminal > Run Build Task..."
   - Select "npm: watch"
   - Repeat this step whenever you reopen Visual Studio Code

The compiler will automatically regenerate the JavaScript file every time you save your TypeScript code.

## Usage

1. Install the plugin in Figma
2. Select the plugin from the plugins menu
3. Run the plugin and it will automatically:
   - Rename the first page to "⬓ ・About"
   - Create all additional pages with proper naming and organization
   - Group pages logically for design workflow

The generated structure includes:
```
INTRO
├── ⬓ ・About
├── --------------

HANDOFF
├── ◉ HANDOFF
├── ✓ ・ V 1.0 - 04/12/2024

DESIGN
├── ◉ DESIGN PROCESS
├── ☆ ・ Discovery
├── ☀ ・ Benchmark
├── ✐ ・ Exploration
├── ◆ ・ Work Page
├── ▶︎ ・ Prototype

ARCHIVE
├── ◉ OTHERS
├── ❐  ・ Achived
├── ⇠ ・ History Versions
├── ❖ ・ Local Components
└── ◇ ・ Doc Components
```

## Contributing

We welcome contributions to improve the page structure or add new features. Please feel free to submit pull requests or create issues for bugs and feature requests.

## License

# Figma Page Structure Generator

A Figma plugin that automatically creates a standardized page structure for design projects, helping teams maintain consistent organization across their files.

## Features

- Creates a complete pre-defined page structure instantly
- Organizes pages into logical groups:
  - INTRO (About section)
  - HANDOFF (Design delivery)
  - DESIGN PROCESS (Design workflow pages)
  - ARCHIVE (Version history and components)
- Uses intuitive icons for easy visual navigation
- Includes dedicated pages for:
  - Discovery and research
  - Benchmarking
  - Design exploration
  - Working files
  - Prototypes
  - Component libraries
  - Version history

## Installation and Setup

Below are the steps to get your plugin running:

1. Download Node.js which comes with NPM:
   https://nodejs.org/en/download/

2. Install TypeScript globally:
   ```bash
   npm install -g typescript
   ```

3. Install the plugin dependencies:
   ```bash
   npm install --save-dev @figma/plugin-typings
   ```

## Development

This plugin is built using TypeScript, providing better code completion and type checking.

To set up your development environment:

1. Download Visual Studio Code: https://code.visualstudio.com/
2. Open this directory in Visual Studio Code
3. Compile TypeScript to JavaScript: 
   - Go to "Terminal > Run Build Task..."
   - Select "npm: watch"
   - Repeat this step whenever you reopen Visual Studio Code

The compiler will automatically regenerate the JavaScript file every time you save your TypeScript code.

## Usage

1. Install the plugin in Figma
2. Select the plugin from the plugins menu
3. Run the plugin and it will automatically:
   - Rename the first page to "⬓ ・About"
   - Create all additional pages with proper naming and organization
   - Group pages logically for design workflow

The generated structure includes:
```
INTRO
├── ⬓ ・About
├── --------------

HANDOFF
├── ◉ HANDOFF
├── ✓ ・ V 1.0 - 04/12/2024

DESIGN
├── ◉ DESIGN PROCESS
├── ☆ ・ Discovery
├── ☀ ・ Benchmark
├── ✐ ・ Exploration
├── ◆ ・ Work Page
├── ▶︎ ・ Prototype

ARCHIVE
├── ◉ OTHERS
├── ❐  ・ Achived
├── ⇠ ・ History Versions
├── ❖ ・ Local Components
└── ◇ ・ Doc Components
```

## Contributing

We welcome contributions to improve the page structure or add new features. Please feel free to submit pull requests or create issues for bugs and feature requests.

## License

MIT LICENSE
Copyright <2025> <Marcelus Fernandes>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

