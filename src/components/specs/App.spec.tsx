
import React from 'react';
import { shallow } from 'enzyme';
import App from '../App/App';


let componentUnderTest: any;

const oneInstance: number = 1;
const expectedAppMessage: string = 
  'Welcome To Seinfeld - An app about nothing.';


describe('The App component must', () => {

  beforeEach(() => {
    componentUnderTest = shallow(<App />);
  });


  test('contain a header', () => {
    const headerElement: string = 'header';

    expect(componentUnderTest.find(headerElement).length).toBe(oneInstance);
  });


  test('display the text "Welcome To Seinfeld - An app about nothing."', () => {

    // This is OK to do because this text is currently the only text on the page.
    expect(componentUnderTest.text()).toBe(expectedAppMessage);
  });
})

