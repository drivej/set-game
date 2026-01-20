import classNames from 'classnames';
import { CSSProperties, forwardRef } from 'react';
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
export const SetCardStandalone = forwardRef<HTMLDivElement, SetCardStandaloneProps>(
  ({ shape, color, fill, count, selected = false, faceUp = true, className, style, onClick }, ref) => {
    const ShapeComponent = ShapeLookup[shape as Shape];

    return (
      <div
        ref={ref}
        className={classNames('card', className)}
        data-count={count}
        data-selected={selected ? 1 : 0}
        data-faceup={faceUp ? 1 : 0}
        style={style}
        onClick={onClick}
      >
        <div className='card-front'>
          <ShapeComponent color={color as ShapeColor} fill={fill as ShapeFill} />
          <ShapeComponent color={color as ShapeColor} fill={fill as ShapeFill} />
          <ShapeComponent color={color as ShapeColor} fill={fill as ShapeFill} />
        </div>
        <div className='card-back'></div>
      </div>
    );
  }
);

SetCardStandalone.displayName = 'SetCardStandalone';

