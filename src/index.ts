// Main React component export
export { SetGameReact } from './SetGameReact';
export type { SetGameReactProps } from './SetGameReact';

// Core game component
export { default as SetGame } from './SetGame';

// Standalone card component
export { SetCardStandalone } from './card/SetCardStandalone';
export type { SetCardStandaloneProps } from './card/SetCardStandalone';

// Models and types
export { CardState, Shape, ShapeColor, ShapeFill } from './models';
export type { SetCardType } from './models';

// Context and hooks
export { SetDeckProvider } from './deck/SetDeckProvider';
export { useSetDeck } from './deck/useSetDeck';

// Default export
export { SetGameReact as default } from './SetGameReact';

