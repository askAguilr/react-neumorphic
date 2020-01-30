import * as React from 'react';
import  Button  from '../components/NeuUI/Button/Button';
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

export default {
    title: 'Button',
    component: Button,
    decorators: [withKnobs]
};

export const Text = () => <Button>{text("Label","Accept")}</Button>;

export const Emoji = () => (
  <Button onClick={console.log('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);
