import { json, LoaderArgs } from '@remix-run/cloudflare';
import { Skill } from '~/types/skill';

export const loader = ({}: LoaderArgs) => {
  const skills: Skill[] = [
    {
      name: 'Javascript',
      level: 'expert',
      category: 'primary',
      orderIndex: 50,
      imageHref: 'javascript.webp',
    },
    {
      name: 'Typescript',
      level: 'expert',
      category: 'primary',
      orderIndex: 40,
      imageHref: 'typescript.webp',
    },
    {
      name: 'React',
      level: 'expert',
      category: 'primary',
      orderIndex: 30,
      imageHref: 'react.webp',
    },
    {
      name: 'tailwindcss',
      level: 'expert',
      category: 'primary',
      orderIndex: 60,
      imageHref: 'tailwindcss.webp',
    },
    {
      name: 'faunadb',
      level: 'intermediate',
      category: 'primary',
      orderIndex: 70,
      imageHref: 'faunadb.webp',
    },
    {
      name: '.Net Core',
      level: 'expert',
      category: 'legacy',
      orderIndex: 0,
      imageHref: 'dot_net_core.webp',
    },
    {
      name: 'c#',
      level: 'expert',
      category: 'legacy',
      orderIndex: 10,
      imageHref: 'csharp.webp',
    },
    {
      name: 'Entity Framework',
      level: 'expert',
      category: 'legacy',
      orderIndex: 20,
      imageHref: 'entity_framework.webp',
    },
    {
      name: 'cypress',
      level: 'intermediate',
      category: 'primary',
      orderIndex: 80,
      imageHref: 'cypress.webp',
    },
    {
      name: 'Remix',
      level: 'intermediate',
      category: 'primary',
      orderIndex: 0,
      imageHref: 'remix.webp',
    },
    {
      name: 'Next.js',
      level: 'expert',
      category: 'primary',
      orderIndex: 10,
      imageHref: 'nextjs.webp',
    },
  ];

  const skillsPerCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<Skill['category'], Skill[]>);

  const sortedSkillsPerCategoryEntries = Object.entries(skillsPerCategory).map(
    ([category, skills]) => {
      return [
        category as Skill['category'],
        skills.sort((a, b) => a.orderIndex - b.orderIndex),
      ];
    },
  );

  const sortedSkillsPerCategory: Record<Skill['category'], Skill[]> =
    Object.fromEntries(sortedSkillsPerCategoryEntries);

  return json(sortedSkillsPerCategory, {
    status: 200,
  });
};
