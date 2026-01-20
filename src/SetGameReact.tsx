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
  // Always include 'set-game' namespace class to scope all styles
  const combinedClassName = className ? `set-game ${className}` : 'set-game';

  return (
    <div className={combinedClassName} style={style}>
      <SetGame />
    </div>
  );
};

