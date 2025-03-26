let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');



window.onscroll = () => {
  sections.forEach(sec => {
     let top = window.scrollY;
     let offset = sec.offsetTop - 150;
     let height = sec.offsetHeight;
     let id = sec.getAttribute('id');



     if(top >= offset && top < offset + height){
       navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a [href*=' + id + ']').classList.add('active')
       })
     }
  })
}




menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}






  //  todolist

  let inputBx = document.querySelector('#inputBx');
  let list =  document.querySelector('#list');

  inputBx.addEventListener("keyup", function(event){
      if (event.key == "Enter") {
          addItem(this.value)
          this.value = ""
      }
  })

  let addItem = (inputBx) => {
      let listItem = document.createElement("li");
      listItem.innerHTML = `${inputBx} <i></i>`;

      listItem.addEventListener("click", function(){
        this.classList.toggle('done');
      })

      listItem.querySelector("i").addEventListener("click",
      function(){
        listItem.remove();
      })



      list.appendChild(listItem);
  }