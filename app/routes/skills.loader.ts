import { json, LoaderArgs } from '@remix-run/cloudflare';
import { Skill } from '~/types/skill';

export const loader = ({}: LoaderArgs) => {
  const skills: Skill[] = [
    {
      name: 'Javascript',
      level: 'expert',
      category: 'primary',
      orderIndex: 50,
    },
    {
      name: 'Typescript',
      level: 'expert',
      category: 'primary',
      orderIndex: 40,
    },
    {
      name: 'React',
      level: 'expert',
      category: 'primary',
      orderIndex: 30,
    },
    {
      name: 'Tailwind CSS',
      level: 'expert',
      category: 'primary',
      orderIndex: 60,
    },
    {
      name: 'Faunadb',
      level: 'intermediate',
      category: 'primary',
      orderIndex: 70,
    },
    {
      name: '.Net Core',
      level: 'expert',
      category: 'legacy',
      orderIndex: 0,
    },
    {
      name: 'c#',
      level: 'expert',
      category: 'legacy',
      orderIndex: 10,
    },
    {
      name: 'Entity Framework',
      level: 'expert',
      category: 'legacy',
      orderIndex: 20,
    },
    {
      name: 'Cypress',
      level: 'intermediate',
      category: 'primary',
      orderIndex: 80,
    },
    {
      name: 'Remix',
      level: 'intermediate',
      category: 'primary',
      orderIndex: 0,
    },
    {
      name: 'NextJS',
      level: 'expert',
      category: 'primary',
      orderIndex: 10,
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
