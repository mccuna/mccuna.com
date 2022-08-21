import { json } from '@remix-run/cloudflare';
import { ExperienceEntry } from '~/types/experience-entry';

export const loader = () => {
  const experienceEntries: ExperienceEntry[] = [
    {
      refId: '1',
      name: 'Tokero Crypto Exchange',
      image: 'tokero-logo.png',
      company: {
        key: 'tokero',
        name: 'Tokero Crypto Exchange',
        description: 'One of the largest cryptocurrency exchanges in Romania',
        websiteHref: 'https://tokero.com/',
      },
      role: 'Team Lead & Software Architect',
      projectSize: {
        numberOfUsers: 'tens of thousands',
        devTeamMembers: '5-10',
      },
      fromYear: 2021,
      toYear: 'present',
      description:
        'Rewritten a legacy ASP.NET MVC application towards a modern tech stack using .NET Core and NextJS.',
      accomplishments: [
        'Architected and led the implementation of NextJS app that acted as both, the frontend app and the gateway to the backend API.',
        'Designed from scratch and led the development of a loosely coupled .Net Core back-end using Nuget packages and multiple APIs',
        'Introduced React and NextJS to the other teammates',
        'Held technical interviews for new team members',
      ],
      skillsNames: [
        'NextJS',
        'React',
        'Typescript',
        'SCSS',
        'CSS Modules',
        'Redux',
        '.Net Core',
        'c#',
        'Entity Framework Core',
        'SQL Server',
        'ASP.NET MVC',
      ],
    },
    {
      refId: '2',
      name: 'Client via Digitall',
      image: 'digitall-logo.svg',
      nda: true,
      company: {
        key: 'digitall',
        name: 'Digitall',
        description:
          'Outsourcing software development company with more than 1500 employees and 28 offices worldwide',
        websiteHref: 'https://digitall.com/',
      },
      role: 'Lead developer',
      projectSize: {
        devTeamMembers: '4-5',
        numberOfUsers: '100,000+',
      },
      fromYear: 2020,
      toYear: 2021,
      description:
        'Lead the development of an internal application for managing various cloud services.',
      accomplishments: [
        'Designed and implemented features able to handle very large amounts of data',
        'Created and updated unit tests in order to maintain a coverage rate of at least 90%.',
        'Greatly improved the accessibility of the application',
      ],
      skillsNames: [
        'TypeScript',
        'React',
        'RxJS',
        'SCSS',
        'CSS Modules',
        'Jest',
        'React Testing Library',
      ],
    },
    {
      refId: '3',
      name: 'Libra Internet Bank',
      image: 'libra-internet-bank-logo.svg',
      company: {
        key: 'libra-internet-bank',
        name: 'Libra Internet Bank',
        websiteHref: 'https://www.librabank.ro/english/',
      },
      role: 'Technical Expert',
      projectSize: {
        devTeamMembers: '10-15',
      },
      fromYear: 2019,
      toYear: 2020,
      description:
        'Designed and oversaw the migration from a monolithic architecture to a domain-driven-design microservices architecture.',
      accomplishments: [
        'Designed, from scratch, a new microservices architecture for a Win Forms application with all the domain logic in SQL Stored Procedures.',
        'Kick-started the pilot migration of existing application modules to the newly created architecture.',
        'Held knowledge-sharing sessions with other team members.',
      ],
      skillsNames: [
        'Web API',
        '.Net Core',
        'c#',
        'SQL Server',
        'DDD',
        'Microservices',
        'CQRS',
        'Event Sourcing',
        'Docker',
        'Kubernetes',
      ],
    },
    {
      refId: '4',
      name: 'Client via Netrom',
      image: 'netrom-logo.png',
      nda: true,
      company: {
        key: 'netrom',
        name: 'Netrom',
        description:
          'A nearshore software developer company with more than 400 employees',
        websiteHref: 'https://www.netrom.nl/en/',
      },
      role: 'Technical Lead',
      projectSize: {
        devTeamMembers: '2-3',
        numberOfUsers: 'tens of thousands',
      },
      fromYear: 2018,
      toYear: 2019,
      description:
        'Extended an application to manage private pension and insurance contracts for business owners and independent workers',
      accomplishments: [
        'Designed and implemented the back-end component for a decision matrix aimed to help users identify the best solution for their private pension',
        'Designed and implemented a customers import mechanism processing data of hundreds of thousands of customers',
      ],
      skillsNames: [
        'Asp.Net MVC',
        'Windows Services',
        '.Net Framework',
        'C#',
        'Entity Framework',
        'SQL Server',
        'GraphQL',
        'jQuery',
        'css',
      ],
    },
    {
      refId: '5',
      name: 'Client via Netrom',
      image: 'netrom-logo.png',
      nda: true,
      company: {
        key: 'netrom',
        name: 'Netrom',
        description:
          'A nearshore software developer company with more than 400 employees',
        websiteHref: 'https://www.netrom.nl/en/',
      },
      role: 'Software Engineer',
      projectSize: {
        devTeamMembers: '1',
        numberOfUsers: 'tens of thousands',
      },
      fromYear: 2016,
      toYear: 2018,
      description:
        'Extended and refactored an application to manage private pension and insurance contracts for business owners and independent workers',
      accomplishments: [
        'Created from scratch an engine for calculating maximum financial benefits for a specific private pension program.',
        'Created a generic import mechanism able to import private pension and insurance contracts from insurance companies.',
        'Created an application wide parameters framework.',
        'Integrated SQL Server full-text search engine for searching through insurance contracts and customer files based on various fields.',
      ],
      skillsNames: [
        'Asp.Net MVC',
        'Windows Services',
        '.Net Framework',
        'C#',
        'Entity Framework',
        'SQL Server',
        'jQuery',
        'css',
      ],
    },
    {
      refId: '6',
      name: 'Client via Netrom',
      image: 'netrom-logo.png',
      nda: true,
      company: {
        key: 'netrom',
        name: 'Netrom',
        description:
          'A nearshore software developer company with more than 400 employees',
        websiteHref: 'https://www.netrom.nl/en/',
      },
      role: 'Software Engineer',
      projectSize: {
        devTeamMembers: '1',
        numberOfUsers: 'thousands',
      },
      fromYear: 2016,
      toYear: 2016,
      description:
        'Redesigned an application to manage apartment and room rentals, focused on matching people looking for a place to stay with people looking for a roommate.',
      accomplishments: [
        'Helped redesign the application to a brand new look.',
        'Created SQL Server Integration Services flows for importing data from various sources.',
      ],
      skillsNames: [
        'Asp.Net MVC',
        '.Net Framework',
        'C#',
        'Entity Framework',
        'SQL Server',
        'SQL Server Integration Services',
        'jQuery',
        'css',
      ],
    },
  ];

  return json(experienceEntries, {
    headers: {
      cacheControl: `public, max-age=${maxAge}, s-maxage=${sMaxAge}, stale-while-revalidate=${staleWhileRevalidate}`,
    },
  });
};

const maxAge = 5 * 60; // 5 minutes
const sMaxAge = 90 * 24 * 60 * 60; // 90 days
const staleWhileRevalidate = 60; // 1 minute
