let addbutton = document.getElementById('AddToDo');
let ToDoContainer = document.getElementById('ToDolist');
let inputfield = document.getElementById('inputList');


addbutton.addEventListener('click', function(){
    var paragraph = document.createElement('p')
    paragraph.innerText = inputfield.value;
    ToDoContainer.appendChild(paragraph);
    inputfield.value = "";
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through"
    })

    paragraph.addEventListener('dblclick', function(){
        ToDoContainer.removeChild(paragraph)
    })
})

    