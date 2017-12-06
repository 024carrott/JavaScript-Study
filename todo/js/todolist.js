(function(global) {
  
  // el 찾기
  var input = document.querySelector('input'),
      input_btn = document.querySelector('.input-btn'),
      list_container = document.querySelector('.list-container'),
      done_conatiner = document.querySelector('.done-container');
    

  // * 초기화 함수 *

  function init() {
    // console.log('lists:', lists);
    var lists = [];

    bind(lists);
  }
  // * 이벤트 바인딩 관련 함수 *

  function bind(lists) {
    
    // 입력창 이벤트
    input.addEventListener('keypress', function(e){
      if( e.target.value !== '' && e.charCode === 13 ){
        lists.push(e.target.value);
        console.log(lists);
        createList(e.target.value);
        e.target.value = '';
      }
    })
    // 삭제 btn 이벤트
    $(document).on( 'click', '.delete-btn', function(e){
      console.log('click');

    })
    
  }

  // * 동적 엘리먼트 관련 함수 *
  function createList(list_data) {
    // createElement
    var list_wrap = document.createElement('div'),
        checkbox = document.createElement('input'),
        list = document.createElement('div'),
        edit_btn = document.createElement('button'),
        delete_btn = document.createElement('button');

    // setAttribute
    list_wrap.setAttribute('class', 'list-wrap');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('class', 'checkbox');
    list.setAttribute('class', 'list');
    edit_btn.setAttribute('type', 'button');
    edit_btn.setAttribute('class', 'edit-btn');
    delete_btn.setAttribute('type', 'button');
    delete_btn.setAttribute('class', 'delete-btn');

    function bindToDo() {
      // append
      list_container.appendChild(list_wrap);
      list_wrap.appendChild(checkbox);
      list_wrap.appendChild(list);
      list_wrap.appendChild(edit_btn);
      list_wrap.appendChild(delete_btn);
      edit_btn.innerHTML = 'edit';
      delete_btn.innerHTML = 'delete';
  
      // inner
      list.innerText = list_data;
      console.log('data:',list_data);
    }

    function bindDone() {
      // append
      done_conatiner.appendChild(list_wrap);
      list_wrap.appendChild(checkbox);
      list_wrap.appendChild(list);
      list_wrap.appendChild(edit_btn);
      list_wrap.appendChild(delete_btn);
      edit_btn.innerHTML = 'edit';
      delete_btn.innerHTML = 'delete';
      
      // inner
      list.innerText = list_data;
    }

    bindToDo();

    function checkBox(){
      checkbox.addEventListener('click', function(e){
        if ( this.hasAttribute('value') === false ){
          e.target.setAttribute('value', 'checked');
          console.log('checkbox: true');
        } else {
          e.target.removeAttribute('value');
          console.log('checkbox: false');
        }
      })
    }
    checkBox();
  }



  // 체크박스 결과 
  // function checkbox() {
  //   $('.checkbox').on('click', function(e){
  //     console.log('checkbox-click');
  //   })
  // }

  // checkbox();
  init();

}(window));