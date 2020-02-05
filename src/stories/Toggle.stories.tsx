import React from 'react';
import Toggle from "../components/Toggle/Toggle";

export default {
  title: 'Toggle',
  component: Toggle,
};

export const ToStorybook = () => <Toggle/>;

ToStorybook.story = {
  name: 'simple',
};
