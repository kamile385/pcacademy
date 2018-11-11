$(document).ready(function () {
//   var minRows = document.getElementById('textarea').rows;
  var maxRows = 10;
  var minRows = document.getElementById('textarea').getAttribute('rows');
  var textarea = $(this);
  var scrollHeight = document.getElementById('textarea').scrollHeight;

  textarea.on('input', function () {
    if (document.getElementById('textarea').value === '') {
      document.getElementById('textarea').setAttribute('rows', minRows);
    }
    else{
      for (var rows = minRows; rows < maxRows; rows++) {
      var scrollHeight = $('textarea').get(0).scrollHeight;
      $('textarea').css('height', scrollHeight + 'px');

        // var a = document.getElementById('textarea').setAttribute('rows', rows);
      }
    }
  });
});