document.addEventListener('DOMContentLoaded', function(){
  const form = document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit', function(e){
      if(!form.checkValidity()){
        e.preventDefault();
        // Find first invalid
        const invalid = form.querySelector(':invalid');
        if(invalid){
          invalid.focus();
          const msg = invalid.validationMessage || 'Please fix this field.';
          alert(msg);
        }
      } else {
        e.preventDefault();
        // Simulate success
        alert('Form submitted (demo). Thank you!');
        form.reset();
      }
    });

    const range = document.getElementById('progress');
    const meter = document.getElementById('meter');
    const output = document.getElementById('audienceOutput');
    if(range && meter && output){
      function sync(){
        meter.value = range.value;
        output.value = range.value;
      }
      range.addEventListener('input', sync);
      sync();
    }
  }
});


// Ghi chú (Tiếng Việt):
// 1) Lắng nghe sự kiện 'DOMContentLoaded' để chắc chắn DOM đã sẵn sàng trước khi truy cập phần tử.
// 2) form.checkValidity() là API HTML5 trả về false nếu có trường không hợp lệ theo thuộc tính required, pattern, minlength, v.v.
// 3) Khi form không hợp lệ: ngăn submit, focus vào trường đầu tiên bị lỗi và hiển thị alert (ví dụ đơn giản để học).
// 4) Khi form hợp lệ: đoạn code này chỉ giả lập hành vi gửi (demo) — nó preventDefault() và reset form.
//    Trên dự án thực tế, bạn có thể gửi dữ liệu bằng fetch()/XMLHttpRequest hoặc để form submit về server.
// 5) Đồng bộ hóa: input[type=range] (id="progress") được đồng bộ với <meter> và <output> để hiển thị giá trị trực quan.
//    Hàm sync() gán giá trị range vào meter và output; lắng nghe 'input' để cập nhật realtime.


