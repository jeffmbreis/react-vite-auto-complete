### 1 - What is the difference between Component and PureComponent? give an example where it might break my app.

The difference is that a PureComponent is only rerendered when we have a Prop/State change, so it has a better performance being rendered only when necessary. As it performs a Shallow Props/State Comparison, we have to be careful when using it, as the component may not be rendered as expected.

An example of how this can affect the application is you have a Prop that receives an object { user: { profile: {name: "Jefferson Reis"}}}, if the name is changed the component will not be rendered again, due to Shallow Props Comparison, and the old name will continue to be displayed.

### 2 - Context + ShouldComponentUpdate might be dangerous. Can think of why is that?

We might end up blocking context propagation unintentionally.

### 3 - Describe 3 ways to pass information from a component to its PARENT.

Callback Function: we can pass a Prop that will receive a callback function, when this function is executed we can pass the necessary information as a parameter and use it in the scope that the function was defined.

Context: Using context we can Write and Read the information in any component that is inside the Provider, so we can Write the information through the Child and access it in the Parent.

State Management Library: Similar to the Context, in this approach we can trigger Actions that make changes to the data stored in the Store, which is the Single Source of True of the application, the components that are covered by the Provider have access to this data. Therefore, the Child can change data in the Store that is being consumed by the Parent.

### 4 - Give 2 ways to prevent components from re-rendering.

PureComponents and useMemo/useCallback

### 5 - What is a fragment and why do we need it? Give an example where it might break my app.

Fragment allow you to wrap or group multiple elements without adding an extra node to the DOM, React Components can only render one element, if i need to have multiple elements i nedd do wrap them in a single root element, Fragments hel us with it.

Break app sample:

```javascript
return (
    <p>not work</p>
    <p>not work</p>
    <p>not work</p>
);
```

Working sample:

```javascript
return (
  <React.Fragment>
    <p>not work</p>
    <p>not work</p>
    <p>not work</p>
  </React.Fragment>
);
```

### 6 - Give 3 examples of the HOC pattern.

Higher Order Components is a component wrapper and are used to enhance a component with extra functionality/information.

We can use HOC to many things, like:

withTheme(<Component />) to add some theme related props to the component, like light/dark colors.

withFetch(<Component />) to add some implemented fetch functionality to the component.

connect(<Component />) Redux sample to pass actions and states to the component

### 7 - what's the difference in handling exceptions in promises, callbacks and async...await.

In Callbacks we need to send the error handler on the function params.

In Promise we can handle the errors on Reject, so we can access on .cath(e => {})

In Async/Await we can use a simple try/catch to handle any problem then return this

### 8 - How many arguments does setState take and why is it async.

One, can be a Value or a update function. It's async because the state change is scheduled to avoid any performance issue, state changes fire the componente rerender.

### 9 - List the steps needed to migrate a Class to Function Component.

change the class to be a function
remove the render method to be a return only
all the class methods need to be a function, now we can remove the "this"
remove the constructor and change the state to useState hook
we don't need bind the events anymore, so we need to remove
any state update sideEffects need to be moved to useEffect hook
lifeCycle methods needs to be changed to useEffect hook

### 10 - List a few ways styles can be used with components.

Pure css: Write css in files to import or inline css
Preprocessor: Like Sass or Less
Css framework: Like Tailwind and work with classes only
Libs: Like styled-components

### 11 - How to render an HTML string coming from the server.

React scapes all HTML to be more secure, so we need to use the dangerouslySetInnerHTML prop
