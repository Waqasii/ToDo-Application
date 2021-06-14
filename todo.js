var addButton= document.getElementById('add');
addButton.addEventListener('click',addItem);

var remButton= document.getElementById('remove');
remButton.addEventListener('click',remItem);
// 
var remButton= document.getElementById('clearAll');
remButton.addEventListener('click',clearAll);

// get all list item
var ul=document.getElementById('list');
var li;

function addItem (){
    var input=document.getElementById('inputTask');
    var itemText=input.value
    ul=document.getElementById('list')
    var textNode=document.createTextNode('\t'+itemText)

    if(itemText==''){
        
        let h=document.createElement('h1');
        h.innerHTML='Please Type Task Text!'
        h.className='warning text-danger'
        document.body.appendChild(h);
        document.body.appendChild(h)
        setTimeout(() => {
            h.remove();
        }, 1000);

    }else{
        li=document.createElement('li');

        var checkBox=document.createElement('input');
        checkBox.type='checkbox';
        checkBox.setAttribute('id','check');

        var label=document.createElement('label');

        ul.appendChild(label)
        li.appendChild(checkBox);
        li.appendChild(label);
        label.appendChild(textNode);
        ul.insertBefore(li,ul.childNodes[0]);
        li.className='blur';
        setTimeout(() => {
            li.className='visual';
        }, 200);




    }
}


// function to remove checked Tasks
function remItem (){
    // li will have all items of ul
    li=ul.children;

    // loop over all item of ul i.e each li
    for (let index = 0; index < li.length; index++) {
        while(li[index] && li[index].children[0].checked){
            ul.removeChild(li[index])
        }
        
    }
}


function clearAll(){
    ul.innerHTML=""
}