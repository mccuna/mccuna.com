import { json, LoaderArgs } from '@remix-run/cloudflare';
import { Skill } from '~/types/skill';

export const loader = ({}: LoaderArgs) => {
  const skills: Skill[] = [
    {
      name: 'Javascript',
      level: 'expert',
      category: 'frontend',
    },
    {
      name: 'Typescript',
      level: 'expert',
      category: 'frontend',
    },
    {
      name: 'React',
      level: 'expert',
      category: 'frontend',
    },
    {
      name: 'Tailwind CSS',
      level: 'intermediate',
      category: 'frontend',
    },
    {
      name: 'Faunadb',
      level: 'intermediate',
      category: 'frontend',
    },
    {
      name: '.Net Core',
      level: 'expert',
      category: 'backend',
    },
    {
      name: 'c#',
      level: 'expert',
      category: 'backend',
    },
    {
      name: 'Entity Framework',
      level: 'expert',
      category: 'backend',
    },
    {
      name: 'Git',
      level: 'intermediate',
      category: 'other',
    },
  ];

  const skillsPerCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as { [category: string]: Skill[] });

  return json(skillsPerCategory, {
    status: 200,
  });
};
