(function(global) {
  
  // el 찾기
  var input = document.querySelector('input'),
      input_btn = document.querySelector('.input-btn'),
      list_container = document.querySelector('.list-container'),
      done_container = document.querySelector('.done-container');

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
    // 입력버튼 클릭 이벤트
    input_btn.addEventListener('click', function(e) {
      if ( input.value !== '') {
        lists.push(input.value);
        console.log(lists);
        createList(input.value);
        input.value = '';
        input.focus();
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
        list = document.createElement('label'),
        edit_list = document.createElement('input'),
        edit_btn = document.createElement('button'),
        delete_btn = document.createElement('button');

    // setAttribute
    list_wrap.setAttribute('class', 'list-wrap');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('class', 'checkbox');
    list.setAttribute('class', 'list');
    edit_list.setAttribute('class', 'edit-list none');
    edit_list.setAttribute('value', list_data);
    edit_btn.setAttribute('type', 'button');
    edit_btn.setAttribute('class', 'edit-btn');
    delete_btn.setAttribute('type', 'button');
    delete_btn.setAttribute('class', 'delete-btn');

    // * element 추가하는 함수 *
    function bindToDo() {
      // append
      list_container.appendChild(list_wrap);
      list_wrap.appendChild(checkbox);
      list_wrap.appendChild(list);
      list_wrap.appendChild(edit_list);
      list_wrap.appendChild(edit_btn);
      list_wrap.appendChild(delete_btn);
      edit_btn.innerHTML = 'edit';
      delete_btn.innerHTML = 'delete';
  
      // inner
      list.innerText = list_data;
      console.log('data:',list_data);
    } bindToDo();

    // * delete_btn 클릭시 해당 list 삭제하는 함수 *
    function deleteList() {
      delete_btn.addEventListener('click', function(e) {
        var parent = this.parentNode;
        var grand_parent = parent.parentNode;
        console.log('delete-btn:', parent);
        parent.removeChild(delete_btn);
        parent.removeChild(edit_btn);
        parent.removeChild(list);
        parent.removeChild(edit_list);
        parent.removeChild(checkbox);
        grand_parent.removeChild(parent);

      })
    } deleteList()


    // * 체크박스 클릭 시 'checked' 라는 클래스 주는 함수 *
    function checkBox(){
      checkbox.addEventListener('click', function(e){
        if ( this.hasAttribute('value') === true ){
          e.target.removeAttribute('value');
          console.log('checkbox: true');
        } else {
          e.target.setAttribute('value', 'checked');
          console.log('checkbox: false');
        }
      })
    } 

    // * edit 버튼 클릭시 수정
    function edit() {
      var i = 0;
      edit_btn.addEventListener('click', function(e) {
        i = i + 1
        if ( i % 2 !== 0) {
          parent = this.parentNode;
          current_list = parent.querySelector('.edit-list');
          console.log(current_list);
          $(current_list).removeClass('none');
          current_list.focus();
        }else {
          console.log('수정완료');
          $(current_list).addClass('none');
          var change_data = current_list.value;
          // list.innerText = change_data;
          list_data = change_data;
          list.innerText = list_data;
        }

        // 부모가 가진 자식요소중 list 를 찾아야 함.
        // 수정버튼 클릭 시 해당 부모의 edit_list에 있는 'none' 이라는 클래스 제거
        // input 창에 입력한 값을
        // 해당 list의 text 노드에다가 추가

        //  * 데이터 수정 *
        
      })
    } edit();

    // * 체크박스 클릭 시 todo 에서 done 으로, done 에선 todo 로 이동 하는 함수 *
    function removeToDo() {
      checkbox.addEventListener('click', function(e) {
        // if ( getAtt !== 'checked') {
          var getAtt = checkbox.getAttribute('value', 'checked');
          var parent = this.parentNode;
          var grand_parent = parent.parentNode;
          console.log('delete-btn:', parent);
          parent.removeChild(delete_btn);
          parent.removeChild(edit_btn);
          parent.removeChild(list);
          parent.removeChild(edit_list);
          parent.removeChild(checkbox);
          grand_parent.removeChild(parent);
  
          done_container.appendChild(list_wrap);
          list_wrap.appendChild(checkbox);
          list_wrap.appendChild(list);
          list_wrap.appendChild(edit_list);
          list_wrap.appendChild(edit_btn);
          list_wrap.appendChild(delete_btn);
          edit_btn.innerHTML = 'edit';
          delete_btn.innerHTML = 'delete';
      
          // inner
          list.innerText = list_data;
        // }

        if ( getAtt === 'checked') {
          console.log('체크된 박스');
          list_container.appendChild(list_wrap);
          list_wrap.appendChild(checkbox);
          list_wrap.appendChild(list);
          list_wrap.appendChild(edit_list);
          list_wrap.appendChild(edit_btn);
          list_wrap.appendChild(delete_btn);
          edit_btn.innerHTML = 'edit';
          delete_btn.innerHTML = 'delete';
      
          // inner
          list.innerText = list_data;
        }
      })
      checkBox();
    } removeToDo();
  }

  init();

}(window));