var inputBox = document.querySelector('#action');

console.log( inputBox.tagName );
console.log( inputBox.parentNode.tagName );

function addButtonToBody (name) {
  var newBtn = document.createElement('button');
  var newName = document.createTextNode(name);
  
  newBtn.appendChild(newName);
  document.body.appendChild(newBtn);


};

function addPara(txt){
var newP = document.createElement('p');
var newT = document.createTextNode(txt);
newP.appendChild(newText);
document.body.appendChild(newP);
};

var adjustTitle = document.querySelector('header > h1');
var newText = document.createTextNode('I Hope This Works');
adjustTitle.appendChild(newText);