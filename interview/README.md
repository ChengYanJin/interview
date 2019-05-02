Why the code isn't working?
----
#### App.js
- Line 3*: Curly braces is required here, otherwise we need to export default list in data.js file.

- Line 31: The push() method returns the new length of array. So it won't work when we click on "Add".

My suggestion to enhance the code.
----
#### App.js

- Line 20: I would like to put the style of the div into index.css file.

- Line 21-25: I would like to assign a key to our list items inside persons.map(). It can help React(vdom) indentify which item is added.

- Line 30: I would like to define a click event handler to check if the newPerson is already in the list.

>*: the line number is according to the original code.



