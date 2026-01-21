import { CSSProperties } from 'react';
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
export declare const RandomSetCard: import("react").ForwardRefExoticComponent<RandomSetCardProps & import("react").RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=RandomSetCard.d.ts.map