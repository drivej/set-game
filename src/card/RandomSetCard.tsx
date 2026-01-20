import { CSSProperties, forwardRef, useMemo } from 'react';
import { Shape, ShapeColor, ShapeFill } from '../models';
import { SetCardStandalone } from './SetCardStandalone';

const shapes = [Shape.DIAMOND, Shape.PILL, Shape.WIGGLE] as const;
const colors = [ShapeColor.RED, ShapeColor.GREEN, ShapeColor.PURPLE] as const;
const fills = [ShapeFill.NONE, ShapeFill.HATCH, ShapeFill.SOLID] as const;
const counts = [1, 2, 3] as const;

/**
 * Generates a random value from an array
 */
const randomFrom = <T,>(arr: readonly T[]): T => {
  return arr[Math.floor(Math.random() * arr.length)];
};

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
 * The card properties are randomly generated on mount and remain stable.
 * Use the `seed` prop to generate reproducible random cards.
 */
export const RandomSetCard = forwardRef<HTMLDivElement, RandomSetCardProps>(
  ({ seed, selected, faceUp, className, style, onClick }, ref) => {
    // Generate random card properties once and memoize them
    const cardProps = useMemo(() => {
      // If seed is provided, use it to generate deterministic random values
      if (seed !== undefined) {
        // Simple seeded random number generator
        const seededRandom = (s: number) => {
          const x = Math.sin(s) * 10000;
          return x - Math.floor(x);
        };
        
        return {
          shape: shapes[Math.floor(seededRandom(seed) * shapes.length)],
          color: colors[Math.floor(seededRandom(seed + 1) * colors.length)],
          fill: fills[Math.floor(seededRandom(seed + 2) * fills.length)],
          count: counts[Math.floor(seededRandom(seed + 3) * counts.length)]
        };
      }
      
      // Otherwise use true randomness
      return {
        shape: randomFrom(shapes),
        color: randomFrom(colors),
        fill: randomFrom(fills),
        count: randomFrom(counts)
      };
    }, [seed]);

    return (
      <SetCardStandalone
        ref={ref}
        shape={cardProps.shape}
        color={cardProps.color}
        fill={cardProps.fill}
        count={cardProps.count}
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

