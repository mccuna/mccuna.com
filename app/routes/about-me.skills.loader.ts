import { json } from '@remix-run/cloudflare';
import { Skill } from '~/types/skill';

export const loader = () => {
  const skills: Skill[] = [
    {
      name: 'Javascript',
      level: 'expert',
      category: 'primary',
      orderIndex: 50,
      imagePath: 'javascript.webp',
    },
    {
      name: 'Typescript',
      level: 'expert',
      category: 'primary',
      orderIndex: 40,
      imagePath: 'typescript.webp',
    },
    {
      name: 'React',
      level: 'expert',
      category: 'primary',
      orderIndex: 30,
      imagePath: 'react.webp',
    },
    {
      name: 'tailwindcss',
      level: 'expert',
      category: 'primary',
      orderIndex: 60,
      imagePath: 'tailwindcss.webp',
    },
    {
      name: '.Net Core',
      level: 'expert',
      category: 'legacy',
      orderIndex: 0,
      imagePath: 'dot_net_core.webp',
    },
    {
      name: 'c#',
      level: 'expert',
      category: 'legacy',
      orderIndex: 10,
      imagePath: 'csharp.webp',
    },
    {
      name: 'Entity Framework',
      level: 'expert',
      category: 'legacy',
      orderIndex: 20,
      imagePath: 'entity_framework.webp',
    },
    {
      name: 'Playwright',
      level: 'intermediate',
      category: 'primary',
      orderIndex: 80,
      imagePath: 'playwright.webp',
    },
    {
      name: 'cypress',
      level: 'intermediate',
      category: 'primary',
      orderIndex: 90,
      imagePath: 'cypress.webp',
    },
    {
      name: 'Remix',
      level: 'intermediate',
      category: 'primary',
      orderIndex: 0,
      imagePath: 'remix.webp',
    },
    {
      name: 'Next.js',
      level: 'expert',
      category: 'primary',
      orderIndex: 10,
      imagePath: 'nextjs.webp',
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
    ([category, categorySkills]) => {
      return [
        category as Skill['category'],
        categorySkills.sort((a, b) => a.orderIndex - b.orderIndex),
      ];
    },
  );

  const sortedSkillsPerCategory: Record<Skill['category'], Skill[]> =
    Object.fromEntries(sortedSkillsPerCategoryEntries);

  return json(sortedSkillsPerCategory, {
    status: 200,
    headers: {
      'Cache-Control': `public, max-age=${maxAge}, s-maxage=${sMaxAge}, stale-while-revalidate=${staleWhileRevalidate}`,
    },
  });
};

const maxAge = 60 * 60; // 60 minutes
const sMaxAge = 90 * 24 * 60 * 60; // 90 days
const staleWhileRevalidate = 60; // 1 minute
