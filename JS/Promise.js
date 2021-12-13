function FilterFunc(i){
  let num = localStorage.getItem("number");
  if (num == 0) 
      return i.id <= 100
  else 
      return 100 < i.id && i.id <= 200
}

function clearAll(){
  var array = document.getElementsByClassName("tr");
  while(array.length > 1){
      array[1].remove();
  }   
}

function load(string, filterFunction=null, useRandom=false){

  clearAll();
  document.getElementsByClassName('preloader')[0].className = "preloader";
  document.getElementsByClassName('warning')[0].className = "warning hide";
  document.getElementsByClassName('main-todo-table')[0].className = "main-todo-table hide";

  fetch(string)
      .then(response => response.json())
      .then(todos => {
          if (useRandom){
              if (localStorage.getItem("number") == 1){
                  localStorage.setItem("number", 0);
              }
              else {
                  localStorage.setItem("number", 1);
              }   
          }
          todos.filter(filterFunction
              ).forEach(todo => {
              let tbody = document.getElementsByClassName('tbody')[0];
              tbody.insertAdjacentHTML('beforeend',`
                  <tr class="tr">
                  <td class="td">${todo.userId}</td>
                  <td class="td">${todo.id}</td>
                  <td class="td">${todo.title}</td>
                  <td class="td">${todo.completed}</td>
                  </tr>`);
          });
      })
      .then(()=>{
          document.getElementsByClassName('preloader')[0].className = "preloader hide";
          document.getElementsByClassName('main-todo-table')[0].className = "main-todo-table";
      })
      .catch(()=>{
          document.getElementsByClassName('preloader')[0].className = "preloader hide";
          document.getElementsByClassName('warning')[0].className = "warning block";
      })
}



function loadAll(){
  load('https://jsonplaceholder.typicode.com/todos', FilterFunc, true)
}

function loadById(){
  event.preventDefault();
  var inputs = document.getElementById("search").elements;
  var input = inputs[0].value;
  //window.alert(input);
  document.getElementById("smth").value = '';
  
  load(`https://jsonplaceholder.typicode.com/todos?userId=${input}`, (i)=> true);
}