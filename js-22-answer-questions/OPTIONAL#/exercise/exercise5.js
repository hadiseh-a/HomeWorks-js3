//?In this exercise, you will use object literals to make cleaner constructors for objects.
//todo1:Change the Video constructor function to accept a single object literal argument instead of multiple arguments.
//hint:you must have only one argument like "params" as an object that contains all other arguments.
//todo2:add watch function to the Video prototype to console log this sentence:
//"You watch all $VideoSeconds$ seconds of $VideoTitle$
//todo3:Create a instance of Video constructor and call watch() on it.

function Video(title, uploader, seconds) {
  this.title = title;
  this.uploader = uploader;
  this.seconds = seconds;
}

//////////////////////َAnswer!!!!////////////
