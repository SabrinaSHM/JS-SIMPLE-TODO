//alert('connected');
//TO CREATE AN ELEMENT :
//var h = document.createElement('le type de l'element par exemple : h1)
// var itsValue = document.createTextNode('le text qu'on veut mettre dans h')
//h.appendChild(itsValue) : ainsi la valeur rajouté sera colé au h1 de la page web
//document.uerySelector('h1').appendChild(h)



var ul = document.getElementById('list');
var li;
var addButton = document.getElementById('add');
var removeButton = document.getElementById('remove');





const removeItem =()=>{
    li = ul.children;
    for(var index = 0; index <li.length; index++){
        while(li[index] && li[index].children[0].checked){
            ul.removeChild(li[index]);
        }
    }
}

 const addItem =()=>{
    var input = document.getElementById('input');
    var item = input.value;
    ul = document.getElementById('list');
    var textnode = document.createTextNode(item);
    

   if(item === ''){
       alert('Empty todo -___- !');
       return false;
   }else{
    
        //je cree un todo element
        li = document.createElement('li');

        //je crée la boite du check
        var checkbox =document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.setAttribute('id','check');
        //je crée le contenu du todo element

        var label = document.createElement('label');
        label.setAttribute('for','item');
        ul.appendChild(label);
        li.appendChild(checkbox);
        label.appendChild(textnode);
        li.appendChild(label);
        ul.insertBefore(li , ul.childNodes[0]);
        li.className ='visual';
    }
    
}
addButton.addEventListener('click',addItem);
removeButton.addEventListener('click',removeItem);


