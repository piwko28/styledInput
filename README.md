# STYLED INPUT

Make inputs stylable: checkbox, radiobutton, filepicker, select


Use script on inputs:

```js
$("select").styledInput({ // all select inputs on the webpage
  wrapperClass : 'myselect', // additional class
  wrapperId : 'myid', // additional id; for more elements - autoincremental
  before : true, // adds "before" container
  after : true // adds "after" container
});
```


We will get:

```html
<div class="styledInput myselect" id="myid">
  <select>
    <option>Value 1</option>
    <option>Value 2</option>
    <option>Value 3</option>
  </select>
  <span>Value 1</span>
</div>
```


## Angular directive

Add styledinput.js and angular.styledinput.js to head section.


Add a module to your angular application, ex.:

```js
angular.module('yourApp', ['styledInput']);
```


Now you can use styled input in your angular applications by adding styled-input attribute:

```html
<input type="checkbox" styled-input>
```


As a value you can put wrapper class:

```html
<select styled-input="select">
```


Other properties:

```html
<input type="radio"
  name="hobby"
  styled-input="radio"
  styled-input-id="hobby"
  styled-input-before
  styled-input after>
```
