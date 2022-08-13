export type ExperienceEntry = {
  refId: string;
  name: string;
  imageName: string;
  description: string;
  role: string;
  company?: {
    key: string;
    name: string;
    description?: string;
    websiteHref?: string;
  };
  projectSize: {
    devTeamMembers: string;
    numberOfUsers?: string;
  };
  fromYear: number;
  toYear: number | string;
  accomplishments: string[];
  skillsNames: string[];
};
