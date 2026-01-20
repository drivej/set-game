import { SetStateAction } from 'react';
import { SetCardType } from '../models';
export type SetDeckContextType = {
    cards: SetCardType[];
    deal: (count?: number) => void;
    setCards: React.Dispatch<React.SetStateAction<SetCardType[]>>;
    deselectAll: () => void;
    discard: (cardIds: string[]) => void;
    select: (cardIds: string[]) => void;
    shuffle(): void;
    reset(): void;
    setClassName(cardIds: string[], className: string): void;
    update: (fn: SetStateAction<SetCardType[]>) => void;
};
export declare const SetDeckContext: import("react").Context<SetDeckContextType>;
//# sourceMappingURL=SetDeckContext.d.ts.map