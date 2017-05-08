var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jQuery');

var {Todo} = require("Todo");

describe('Todo',() => {

  it('should exist',() => {

    expect(Todo).toExist();


  });

  it('should dispatch Toggle todo on click',() => {
    var todoData = {
      id:109,
      text:'Write test',
      completed: true
    };
    var spy = expect.createSpy();
    var todo = TestUtils.renderIntoDocument(<Todo{...todoData} dispatch= {spy}/>);
    var $el = $(ReactDOM.findDOMNode(todo));

    TestUtils.Simulate.click($el[0]);

    expect(spy).toHaveBeenCalledWith({
      type: "TOGGLE_TODO",
      id: todoData.id
    });
  })


});
