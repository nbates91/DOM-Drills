document.addEventListener('DOMContentLoaded', function () {


    var div = document.createElement('div');
    div.className = 'header-container';

    var h1 = document.createElement('h1');
    var h2 = document.createElement('h2');
    var h3 = document.createElement('h3');
    var h4 = document.createElement('h4');
    var h5 = document.createElement('h5');
    var h6 = document.createElement('h6');
    var text1 = document.createTextNode('This is an h1');
    var text2 = document.createTextNode('This is an h2');
    var text3 = document.createTextNode('This is an h3');
    var text4 = document.createTextNode('This is an h4');
    var text5 = document.createTextNode('This is an h5');
    var text6 = document.createTextNode('This is an h6');

    var colors = ['red', 'blue', 'yellow', 'green', 'orange', 'purple', 'pink', 'grey'];

    h1.addEventListener('dblclick', function () {

        var random = Math.floor((Math.random() * 8));
        h1.style.color = colors[random];
    })
    h2.addEventListener('dblclick', function () {

        var random = Math.floor((Math.random() * 8));
        h2.style.color = colors[random];
    })
    h3.addEventListener('dblclick', function () {

        var random = Math.floor((Math.random() * 8));
        h3.style.color = colors[random];
    })
    h4.addEventListener('dblclick', function () {

        var random = Math.floor((Math.random() * 8));
        h4.style.color = colors[random];
    })
    h5.addEventListener('dblclick', function () {

        var random = Math.floor((Math.random() * 8));
        h5.style.color = colors[random];
    })
    h6.addEventListener('dblclick', function () {

        var random = Math.floor((Math.random() * 8));
        h6.style.color = colors[random];
    })


    var ul = document.createElement('ul');
    var itemnumber = 1;
    function insertItem() {
        var li = document.createElement('li');
        var liText = document.createTextNode('This is list item ' + itemnumber);
        li.addEventListener('click', function () {
            var random = Math.floor((Math.random() * 8));
            li.style.color = colors[random];
        })
        li.addEventListener('dblclick', function () {
            ul.removeChild(li);
        })
        li.appendChild(liText);
        ul.appendChild(li);
        itemnumber++;
    }

    var button = document.getElementById('listButton');
    button.addEventListener('click', insertItem);



    h1.appendChild(text1);
    h2.appendChild(text2);
    h3.appendChild(text3);
    h4.appendChild(text4);
    h5.appendChild(text5);
    h6.appendChild(text6);
    div.appendChild(h1);
    div.appendChild(h2);
    div.appendChild(h3);
    div.appendChild(h4);
    div.appendChild(h5);
    div.appendChild(h6);
    document.body.appendChild(div);
    document.body.appendChild(ul);
})