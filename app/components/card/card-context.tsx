import { createContext, useContext } from 'react';
import { CardVariant } from './types';

type CardContextType = {
  variant: CardVariant;
};

export const CardContext = createContext<CardContextType | null>(null);

CardContext.displayName = 'CardContext';

export const useCardContext = () => {
  const context = useContext(CardContext);

  if (context === null) {
    throw new Error('useCardContext must be used within a CardContext');
  }

  return context;
};
