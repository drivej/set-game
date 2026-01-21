import { CSSProperties } from 'react';
export interface SetDeckCardProps {
    cardId: number;
    selected?: boolean;
    faceUp?: boolean;
    className?: string;
    style?: CSSProperties;
    onClick?: () => void;
}
export declare const SetDeckCard: import("react").ForwardRefExoticComponent<SetDeckCardProps & import("react").RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=SetCardStandalone.d.ts.map