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

/**
 * Generate the base deck for SetDeckCard component
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
        <ShapeComponent color={info.color as ShapeColor} fill={info.shading as ShapeFill}  />
        <ShapeComponent color={info.color as ShapeColor} fill={info.shading as ShapeFill} />
        <ShapeComponent color={info.color as ShapeColor} fill={info.shading as ShapeFill} />
      </div>
      <div className='card-back'></div>
    </div>
  );
});

SetDeckCard.displayName = 'SetDeckCard';
