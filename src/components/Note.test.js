import React from 'react';
import { mount } from 'enzyme';

import Note from './Note';

const props = { data: 'test note' }

describe('Note', () => {
  let note = mount(<Note {...props}/>);

  it('renders note text', () => {
    console.log(note.debug());
    //.find() finds matching tag
    //.text() grabs text from element in DOM
    expect(note.find('p').text()).toEqual(props.data);
  })
})