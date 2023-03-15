import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import {Select} from "./Select";

export default  {
    title: 'Select',
    component: Select
}
const dats = [
    {name: 'user1', value: '1'},
    {name: 'user2', value: '2'},
    {name: 'user3', value: '3'}
]
export const SelectControlled = () => <Select name={'Custom Select'} list={dats} onChange={()=>{}}/>