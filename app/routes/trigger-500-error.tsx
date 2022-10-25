import { FC } from 'react';

export { handle } from './trigger-500-error.handle';

export const loader = async () => {
  throw new Error('Triggered 500 error');
};

const Trigger500Error: FC = () => {
  return <>You should not see this!</>;
};

export default Trigger500Error;
