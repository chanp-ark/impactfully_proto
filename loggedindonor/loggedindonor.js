donors = ['Project A', 'Project B', 'Project C']

donors.forEach(elem => {
    // creat element
    var newDiv = document.createElement('div');
    newDiv.setAttribute("id", "div1")
    
    // create text
    var newContent = document.createTextNode(elem);
    newDiv.appendChild(newContent)
    
    // insert into html
    var currentDiv = document.getElementById("div1")
    document.getElementById('load-project').insertBefore(newDiv, currentDiv)
})

