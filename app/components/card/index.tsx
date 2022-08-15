import { CardActions } from './card-actions';
import { CardBody } from './card-body';
import { CardRoot } from './card-root';
import { CardTitle } from './card-title';

const Card = Object.assign(CardRoot, {
  Body: CardBody,
  Title: CardTitle,
  Actions: CardActions,
});

export * from './types';

export default Card;
