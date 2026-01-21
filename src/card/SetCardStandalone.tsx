import classNames from 'classnames';
import { CSSProperties, forwardRef } from 'react';
import { generateDeck } from '../deck/SetDeckProvider';
import { Shape, ShapeColor, ShapeFill } from '../models';
import { ShapeDiamond, ShapePill, ShapeSquiggle } from '../SetShapes';

const ShapeLookup = {
  [Shape.DIAMOND]: ShapeDiamond,
  [Shape.PILL]: ShapePill,
  [Shape.WIGGLE]: ShapeSquiggle
};

export interface SetCardStandaloneProps {
  /** The shape of the symbols on the card */
  shape: Shape | 'diamond' | 'pill' | 'wiggle';
  /** The color of the symbols */
  color: ShapeColor | 'red' | 'green' | 'purple';
  /** The fill style of the symbols */
  fill: ShapeFill | 'none' | 'hatch' | 'solid';
  /** Number of symbols on the card (1, 2, or 3) */
  count: 1 | 2 | 3;
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
 * A standalone Set card component that can be used independently without the game context.
 * Displays a card from the Set game with customizable shape, color, fill, and count.
 */
const BaseDeck = generateDeck();

// Debug: Log deck info on module load
if (typeof window !== 'undefined') {
  console.log('SetCardStandalone: BaseDeck initialized with', BaseDeck.length, 'cards');
  console.log('SetCardStandalone: First card:', BaseDeck[0]);
  console.log('SetCardStandalone: Last card:', BaseDeck[80]);
}

export interface SetDeckCardProps {
  cardId: number;
  selected?: boolean;
  faceUp?: boolean;
  className?: string;
  style?: CSSProperties;
  onClick?: () => void;
}

export const SetDeckCard = forwardRef<HTMLDivElement, SetDeckCardProps>(({ cardId = 0, style, className, selected = false, faceUp = true, onClick }, ref) => {
  // Use modulo to wrap cardId to valid range (0-80)
  const validCardId = ((cardId % BaseDeck.length) + BaseDeck.length) % BaseDeck.length;
  const info = BaseDeck[validCardId];
  console.log({BaseDeck, validCardId });

  // Safety check - if deck generation failed, return empty card
  if (!info) {
    console.error(`SetDeckCard: Invalid card at index ${validCardId}. Deck has ${BaseDeck.length} cards.`);
    return <div ref={ref} className={classNames('card', className)} style={style} />;
  }

  const ShapeComponent = ShapeLookup[info.shape];

  return (
    <div
      ref={ref}
      className={classNames('card', className)}
      data-count={info.number}
      data-selected={selected ? 1 : 0}
      data-faceup={faceUp ? 1 : 0}
      style={style}
      onClick={onClick}
    >
      <div className='card-front'>
        <ShapeComponent color={info.color as ShapeColor} fill={info.shading as ShapeFill} />
        <ShapeComponent color={info.color as ShapeColor} fill={info.shading as ShapeFill} />
        <ShapeComponent color={info.color as ShapeColor} fill={info.shading as ShapeFill} />
      </div>
      <div className='card-back'></div>
    </div>
  );
});

SetDeckCard.displayName = 'SetDeckCard';

export const SetCardStandalone = forwardRef<HTMLDivElement, SetCardStandaloneProps>(({ shape, color, fill, count, selected = false, faceUp = true, className, style, onClick }, ref) => {
  const ShapeComponent = ShapeLookup[shape as Shape];

  return (
    <div ref={ref} className={classNames('card', className)} data-count={count} data-selected={selected ? 1 : 0} data-faceup={faceUp ? 1 : 0} style={style} onClick={onClick}>
      <div className='card-front'>
        <ShapeComponent color={color as ShapeColor} fill={fill as ShapeFill} />
        <ShapeComponent color={color as ShapeColor} fill={fill as ShapeFill} />
        <ShapeComponent color={color as ShapeColor} fill={fill as ShapeFill} />
      </div>
      <div className='card-back'></div>
    </div>
  );
});

SetCardStandalone.displayName = 'SetCardStandalone';
