
import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('The App component must', () => {

  const oneInstance: number = 1;
  const expectedAppMessage: string = 
    'Welcome To Seinfeld - An app about nothing.';
  

  test('contain a header', () => {
    const componentUnderTest = shallow(<App />);
  
    expect(componentUnderTest.find('header').length).toBe(oneInstance);
  });


  test('display the text "Welcome To Seinfeld - An app about nothing."', () => {
    const componentUnderTest = shallow(<App />);

    // This is OK to do because this text is currently the only text on the page.
    expect(componentUnderTest.text()).toBe(expectedAppMessage);
  });
})

