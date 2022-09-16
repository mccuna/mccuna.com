import {
  createContext,
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useMemo,
  useState,
} from 'react';
import { ExperienceEntry } from '~/types';

type ExperienceEntryContextType = {
  experienceEntry: ExperienceEntry;
  isOpened: boolean;
  setIsOpened: Dispatch<SetStateAction<boolean>>;
};

const ExperienceEntryContext = createContext<ExperienceEntryContextType | null>(
  null,
);

type ExperienceEntryProviderProps = {
  experienceEntry: ExperienceEntry;
};

export const ExperienceEntryContextProvider: FC<
  PropsWithChildren<ExperienceEntryProviderProps>
> = ({ children, experienceEntry }) => {
  const [isOpened, setIsOpened] = useState(false);

  const contextValue = useMemo(() => {
    return { experienceEntry, isOpened, setIsOpened };
  }, [experienceEntry, isOpened, setIsOpened]);

  return (
    <ExperienceEntryContext.Provider value={contextValue}>
      {children}
    </ExperienceEntryContext.Provider>
  );
};

export const useExperienceEntry = () => {
  const context = useContext(ExperienceEntryContext);
  if (!context) {
    throw new Error(
      'useExperienceEntry must be used within a ExperienceEntryContextProvider',
    );
  }

  const { experienceEntry, isOpened, setIsOpened } = context;

  if (!experienceEntry) {
    throw new Error(
      'experienceEntry cannot be null within a ExperienceEntryContext',
    );
  }

  return {
    experienceEntry,
    isOpened,
    toggleOpenState: () =>
      setIsOpened((currIsOpen) => {
        return !currIsOpen;
      }),
  };
};
