import React from 'react';
import Toggle from "../components/NeuUI/Toggle/Toggle";

export default {
  title: 'Welcome',
  component: Toggle,
};

export const ToStorybook = () => <Toggle/>;

ToStorybook.story = {
  name: 'simple',
};
