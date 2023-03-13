import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Accordion from "./Accordion";


export default {
    title: 'Accordio',
    component: Accordion,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes

} ;

const Template: ComponentStory<typeof Accordion> = () => <Accordion  />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {

};