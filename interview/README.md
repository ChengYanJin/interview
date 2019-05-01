# Why the code isn't working?

## App.js
Line 3: Curly braces is required here, otherwise we need to export default list in data.js file.

Line 31: The push() method returns the new length of array. So it won't work when we click on "Add".

# My suggestion to enhance the code.

## App.js

Line 20: I would like to put the style of the div into index.css file.

Line 21-25: When we click on "Add", it triggers the App re-render and render every person again casuing unecessary time costing.

Line 30: I would like to define a click event handler to check whether the newPersion already in the persion list.

 




