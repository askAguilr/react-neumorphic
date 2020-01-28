import * as React from 'react';
//import { action } from '@storybook/addon-actions';
import  Button  from '../components/NeuUI/Button/Button';

export default {
  title: 'Button',
  component: Button,
};

export const Text = () => <Button>holi</Button>;

export const Emoji = () => (
  <Button onClick={console.log('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);
