import classNames from 'classnames';
import { CSSProperties, forwardRef } from 'react';
import { generateDeck } from '../deck/SetDeckProvider';
import { Shape, ShapeColor, ShapeFill } from '../models';
import { ShapeDiamond, ShapePill, ShapeShared, ShapeSquiggle } from '../SetShapes';

const ShapeLookup = {
  [Shape.DIAMOND]: ShapeDiamond,
  [Shape.PILL]: ShapePill,
  [Shape.WIGGLE]: ShapeSquiggle
};

/**
 * Generate the base deck for SetDeckCard component
 */
const BaseDeck = generateDeck();

export interface SetDeckCardProps {
  cardId: number;
  selected?: boolean;
  faceUp?: boolean;
  className?: string;
  style?: CSSProperties;
  onClick?: () => void;
}

// Component to render SVG patterns - only renders once
const SVGPatterns = () => <ShapeShared />;

export const SetDeckCard = forwardRef<HTMLDivElement, SetDeckCardProps>(({ cardId = 0, style, className, selected = false, faceUp = true, onClick }, ref) => {
  // Use modulo to wrap cardId to valid range (0-80)
  const validCardId = ((cardId % BaseDeck.length) + BaseDeck.length) % BaseDeck.length;
  const card = BaseDeck[validCardId];

  // Safety check - if deck generation failed, return empty card
  if (!card) {
    return <div ref={ref} className={classNames('card', className)} style={style} />;
  }

  const ShapeComponent = ShapeLookup[card.shape];

  return (
    <>
      {/* Render SVG patterns once - React will dedupe multiple instances */}
      <SVGPatterns />
      <div ref={ref} className={classNames('card', className)} data-count={card.number} data-selected={selected ? 1 : 0} data-faceup={faceUp ? 1 : 0} style={style} onClick={onClick}>
        <div className='card-front'>
          <ShapeComponent color={card.color as ShapeColor} fill={card.shading as ShapeFill} />
          <ShapeComponent color={card.color as ShapeColor} fill={card.shading as ShapeFill} />
          <ShapeComponent color={card.color as ShapeColor} fill={card.shading as ShapeFill} />
        </div>
        <div className='card-back'></div>
      </div>
    </>
  );
});

SetDeckCard.displayName = 'SetDeckCard';
