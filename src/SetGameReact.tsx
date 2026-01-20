import React from 'react';
import SetGame from './SetGame';

export interface SetGameReactProps {
  className?: string;
  style?: React.CSSProperties;
}

export const SetGameReact: React.FC<SetGameReactProps> = ({
  className,
  style
}) => {
  return (
    <div className={className} style={style}>
      <SetGame />
    </div>
  );
};

