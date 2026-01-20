import { CardState, Shape, ShapeColor, ShapeFill } from '../models';
export declare const useSetCard: (id: string) => {
    id: string;
    className: string;
    index: number;
    isFaceup: boolean;
    isSelected: boolean;
    state: CardState;
    color: ShapeColor;
    shape: Shape;
    shading: ShapeFill;
    number: 1 | 2 | 3;
    flip: () => void;
    toggleIsSelected: () => void;
    select: () => void;
};
//# sourceMappingURL=useSetCard.d.ts.map