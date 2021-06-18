import React from 'react';
import { mount } from 'enzyme';
import App from './App';


describe('App', () => {
  const app = mount(<App />);

  it('renders the App title', () => {
    //console.log(app.debug());
    expect(app.find('h2').text()).toEqual('Note to Self');
  })

  it('renders the clear button', () => {
    expect(app.find('.btn').at(1).text()).toEqual('Clear Notes')
  })

  describe('when rendering the form', () => {
    it('creates a Form component', () => {
      expect(app.find('Form').exists()).toBe(true);
    })

    it('renders a FormControl component', () => {
      expect(app.find('FormControl').exists()).toBe(true);
    })

    it('renders a submit button', () => {
      expect(app.find('.btn').at(0).text()).toEqual('Submit')
    })
  })

  describe('when creating a note', () => {
    let testNote = 'test note';

    beforeEach(() => {
      app.find('FormControl').simulate('change', {
        target: { value: testNote }
      });
    });

    it('updates the text in state', () => {
      expect(app.find('FormControl').prop('value')).toEqual(testNote);
    })

    describe('and submitting the new note', () => {

      beforeEach(() => {
        app.find('Form').at(0).simulate('submit');
      });

      it('adds the new note to state', () => {
        expect(app.find('Note').text()).toEqual(testNote);
      });

      describe('and clicking the clear button', () => {
        beforeEach(() => {
          app.find('.btn').at(1).simulate('click');
        });

        it('clears the notes in state', () => {
          expect(app.find('Note').exists()).toBe(false);
        })
      })
    })
  })

})


