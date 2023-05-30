$(document).ready(function() {
    $('ul.tabs li').click(function() {
      var tab_id = $(this).attr('data-tab');
  
      $('ul.tabs li').removeClass('current');
      $('.tab-content').removeClass('current');
  
      $(this).addClass('current');
      $("#" + tab_id).addClass('current');
    });
  
    document.getElementById("myForm").addEventListener("submit", function(e) {
      e.preventDefault(); // 기본 제출 동작 막기
  
      var subjectChecked = document.querySelector('input[name="subject"]:checked');
      var locationChecked = document.querySelector('input[name="location"]:checked');
      var newnameValue = document.querySelector('input[name="newname"]').value;
      var newphoneValue = document.querySelector('input[name="newphone"]').value;
  
      if (!subjectChecked) {
        alert("과목을 선택해주세요.");
        return;
      }
  
      if (!locationChecked) {
        alert("지역을 선택해주세요.");
        return;
      }
  
      if (!newnameValue) {
        alert("이름을 입력해주세요.");
        return;
      }
  
      if (!newphoneValue) {
        alert("번호를 입력해주세요.");
        return;
      }
  
 // 번호 형식 확인
     var phoneRegex = /^\d{3}-\d{3,4}-\d{4}$/; // 예시: 010-1234-5678
    if (!phoneRegex.test(newphoneValue)) {
   alert("올바른 번호 형식으로 입력해주세요. (예시: 010-1234-5678)");
   return;
    }

      // 폼 데이터 전송
      var form = document.getElementById("myForm");
      var formData = new FormData(form);
  
      // AJAX를 사용하여 폼 데이터 전송
      var xhr = new XMLHttpRequest();
      xhr.open("POST", "/result"); // 폼 데이터를 보낼 경로 지정
      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
          // 응답 처리
          alert("연락드리겠습니당~");
          window.close(); // 창 닫기
        }
      };
      xhr.send(formData);
    });
  });
  