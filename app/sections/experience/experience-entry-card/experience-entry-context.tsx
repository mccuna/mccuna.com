import { createContext, useContext } from 'react';
import { ExperienceEntry } from '~/types/experience-entry';

type ExperienceEntryContextType = {
  experienceEntry: ExperienceEntry;
};

export const ExperienceEntryContext =
  createContext<ExperienceEntryContextType | null>(null);

export const useExperienceEntry = () => {
  const context = useContext(ExperienceEntryContext);
  if (!context) {
    throw new Error(
      'useExperienceEntry must be used within a ExperienceEntryContextProvider',
    );
  }

  const { experienceEntry } = context;

  if (!experienceEntry) {
    throw new Error(
      'experienceEntry cannot be null within a ExperienceEntryContext',
    );
  }

  return experienceEntry;
};
