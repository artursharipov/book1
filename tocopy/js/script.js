document.getElementById("filter").addEventListener('keyup', function(){

    var filter, ul, li, a, i, txtValue;

    filter = this.value.toUpperCase();
    ul = document.querySelector("#list > ul");
    li = ul.getElementsByTagName('li');
    
    for (i = 0; i < li.length; i++) {

      a = li[i].getElementsByTagName("a")[0];

      txtValue = a.textContent || a.innerText;

      if (txtValue.toUpperCase().indexOf(filter) > -1) {

        li[i].classList.remove("no");

        li[i].classList.add("yes");
    
      } else {

        li[i].classList.remove("yes");

        li[i].classList.add("no");
      }
    }
})

document.getElementById('burger').addEventListener('click', function(){
  document.querySelector('aside').classList.remove('active')
  document.getElementById('nav').classList.toggle('active')
})

document.getElementById('show-lists-mobile').addEventListener('click', function(){
  document.getElementById('nav').classList.remove('active')
  document.querySelector('aside').classList.toggle('active')  
})

document.getElementById('close-menu').addEventListener('click', function(){
  document.getElementById('nav').classList.remove('active')
})

document.getElementById('close-menu').addEventListener('click', function(){
  document.getElementById('nav').classList.remove('active')
})
document.getElementById('close-aside').addEventListener('click', function(){
  document.querySelector('aside').classList.remove('active')
})