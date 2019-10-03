# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

React is a javascript library that allows programmers to create large scale applications

1. What does it mean to think in react?
Thinking in react means thinking about components, reusable or not. 

1. Describe state.
State is a component level "variable", it is owned locally

1. Describe props.
Props are a parent component level "variable", it is passed to the child to trigger changed in the parent component

1. What are side effects, and how do you sync effects in a React component to state or prop changes?
Side effect happens after react updates the DOM, on every render. You useState() to set state from within useEffect(). When you use props they will automatically sync with useState() 
for an example
useEffect(() => {
  setSomeState(props)
}, [props])
whenever props get changed it will set the state inside useEffect, and after the DOM is already rendered (prevents loops)