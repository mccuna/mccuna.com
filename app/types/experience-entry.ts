export type ExperienceEntry = {
  refId: string;
  name: string;
  image: {
    cdnPath: string;
    width: number;
    height: number;
  };
  /* The outsourcing companies I've worked for have a NDA agreement by default when it comes to the clients' names
   */
  nda?: boolean;
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
