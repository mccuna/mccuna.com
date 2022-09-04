export type Skill = {
  name: string;
  level: 'novice' | 'intermediate' | 'expert';
  category: 'primary' | 'legacy';
  orderIndex: number;
  imagePath: string;
};
