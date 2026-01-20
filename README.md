# Set Game React Component Library

A reusable React component library for the classic Set card game, built with TypeScript and Vite.

## Features

- 🎮 Full Set card game implementation with proper game mechanics
- 🎨 Beautiful SVG-based card graphics
- ⚡ Built with Vite for optimal performance
- 📘 Full TypeScript support with type declarations
- 🎯 React 18+ compatible
- 🔧 Easy to integrate into any React project

## Installation

```bash
npm install @drivej/set-game
```

## Usage

```tsx
import { SetGameReact } from '@drivej/set-game'
import '@drivej/set-game/styles.css'

function App() {
  return (
    <div className="app">
      <SetGameReact />
    </div>
  )
}
```

## Game Rules

Set is a card game where players find combinations of 3 cards where each attribute is either all the same or all different across the three cards.

Each card has 4 attributes:
- **Shape**: Pill, Diamond, or Wiggle
- **Color**: Green, Red, or Purple
- **Fill**: Solid, Hatch, or None
- **Count**: 1, 2, or 3

## Features

- ✅ Automatic set validation
- 💡 Hint system
- 🎲 Shuffle and deal cards
- ⏱️ Timer and scoring
- 🎯 Valid set counter
- 🔍 Cheat mode for development

## Development

### Setup

```bash
# Install dependencies
npm install

# Build the library
npm run build

# Run test app
npm test
```

### Project Structure

```
set-game/
├── src/                    # Library source code
│   ├── card/              # Card components
│   ├── deck/              # Deck management
│   ├── css/               # Styles
│   ├── SetGame.tsx        # Main game component
│   ├── SetGameReact.tsx   # React wrapper
│   └── index.ts           # Main exports
├── test-app/              # Development test application
├── dist/                  # Built library (generated)
└── package.json
```

## API

### Components

#### `SetGameReact`

The main game component wrapper.

```tsx
interface SetGameReactProps {
  className?: string;
  style?: React.CSSProperties;
}
```

### Exports

```tsx
// Main component
export { SetGameReact } from '@drivej/set-game'

// Core game component
export { SetGame } from '@drivej/set-game'

// Types
export type { SetCardType } from '@drivej/set-game'

// Enums
export { CardState, Shape, ShapeColor, ShapeFill } from '@drivej/set-game'

// Context and hooks
export { SetDeckProvider, useSetDeck } from '@drivej/set-game'
```

## Tech Stack

- **React** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **SCSS** - Styling
- **Bootstrap** - CSS framework
- **Material-UI** - Icons

## License

MIT

## Author

drivej

