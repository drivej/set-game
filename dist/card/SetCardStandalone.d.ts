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
export interface SetDeckCardProps {
    cardId: number;
    selected?: boolean;
    faceUp?: boolean;
    className?: string;
    style?: CSSProperties;
    onClick?: () => void;
}
export declare const SetDeckCard: import("react").ForwardRefExoticComponent<SetDeckCardProps & import("react").RefAttributes<HTMLDivElement>>;
export declare const SetCardStandalone: import("react").ForwardRefExoticComponent<SetCardStandaloneProps & import("react").RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=SetCardStandalone.d.ts.map