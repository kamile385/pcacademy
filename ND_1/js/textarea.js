$(document).ready(function () {
  var textarea = document.getElementById('textarea');
  var minRows = textarea.getAttribute('rows');
  var maxRows = 10;

  textarea.oninput = function () { myFunction(); };

  function myFunction () {
    if (document.getElementById('textarea').value === '') {
      textarea.setAttribute('rows', minRows);
    } else {
      var txt = textarea.value;
      var cols = textarea.cols;
      var arraytxt = txt.split('\n');
      var rows = arraytxt.length;
      for (var i = 0; i < arraytxt.length; i++) {
        rows += parseInt(arraytxt[i].length / cols);
      }
      if (rows >= maxRows) {
        textarea.rows = maxRows;
      } else {
        if (rows >= minRows) {
          textarea.rows = rows;
        }
      }
    }
  }
});
