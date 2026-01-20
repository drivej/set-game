export declare enum CardState {
    IN_DECK = "in_deck",
    IN_PLAY = "in_play",
    DISCARDED = "discarded"
}
export type SetCardType = {
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
};
export declare enum ShapeFill {
    HATCH = "hatch",
    SOLID = "solid",
    NONE = "none"
}
export declare enum ShapeColor {
    GREEN = "green",
    RED = "red",
    PURPLE = "purple"
}
export declare enum Shape {
    PILL = "pill",
    DIAMOND = "diamond",
    WIGGLE = "wiggle"
}
//# sourceMappingURL=models.d.ts.map