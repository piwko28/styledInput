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
