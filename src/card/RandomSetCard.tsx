import { CSSProperties, forwardRef, useMemo } from 'react';
import { SetDeckCard } from './SetCardStandalone';

export interface RandomSetCardProps {
  /** Optional seed for reproducible randomness (uses card index as seed) */
  seed?: number;
  /** Whether the card is selected */
  selected?: boolean;
  /** Whether the card is face up (true) or face down (false) */
  faceUp?: boolean;
  /** Additional CSS class names */
  className?: string;
  /** Inline styles */
  style?: CSSProperties;
  /** Click handler */
  onClick?: () => void;
}

/**
 * A component that generates a random Set card.
 * The card ID is randomly generated on mount and remains stable.
 * Use the `seed` prop to generate reproducible random cards.
 */
export const RandomSetCard = forwardRef<HTMLDivElement, RandomSetCardProps>(
  ({ seed, selected, faceUp, className, style, onClick }, ref) => {
    // Generate random cardId once and memoize it
    const cardId = useMemo(() => {
      // If seed is provided, use it to generate deterministic random value
      if (seed !== undefined) {
        // Better seeded random number generator
        const seededRandom = (s: number) => {
          const x = Math.sin(s * 12.9898) * 43758.5453;
          return Math.abs(x - Math.floor(x));
        };

        // Generate a cardId between 0-80 (81 total cards in deck)
        return Math.floor(seededRandom(seed) * 81);
      }

      // Otherwise use true randomness (0-80)
      return Math.floor(Math.random() * 81);
    }, [seed]);

    return (
      <SetDeckCard
        ref={ref}
        cardId={cardId}
        selected={selected}
        faceUp={faceUp}
        className={className}
        style={style}
        onClick={onClick}
      />
    );
  }
);

RandomSetCard.displayName = 'RandomSetCard';

