import { CSSProperties } from 'react';
import { Shape, ShapeColor, ShapeFill } from '../models';
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
export declare const SetCardStandalone: import("react").ForwardRefExoticComponent<SetCardStandaloneProps & import("react").RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=SetCardStandalone.d.ts.map