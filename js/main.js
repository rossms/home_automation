
function applySavings(){
    document.getElementById('togglediv').className += ' overlay';
    document.getElementById('confirmbox').className -= ' confirmboxhidden';
    document.getElementById('confirmbox').className += ' confirmboxshow';
}

$(document).ready(function () {
  var classNames = ['low', 'med', 'high', 'takeoff'];
  $('#toggle').click(function () {
      var $this = $(this);
      $this.toggleClass(function (i, className, b) {
          var ret_index;
          $.each(classNames, function (index, value) {
              if ($this.hasClass(value)) {
                  ret_index = (index + 1) % classNames.length;
              }
          });
          $this.removeClass(classNames.join(' '));
          return classNames[ret_index];
      });
  });
  var classNames2 = ['on', 'off'];
    $('#onoff').click(function () {
        var $this = $(this);
        $this.toggleClass(function (i, className2, b) {
            var ret_index;
            $.each(classNames2, function (index, value) {
                if ($this.hasClass(value)) {
                    ret_index = (index + 1) % classNames2.length;
                }
            });
            $this.removeClass(classNames2.join(' '));
            return classNames2[ret_index];
        });
    });

    var input = $('#input-a');
    input.clockpicker({
        autoclose: true
    });

    // Manual operations
    $('#button-a').click(function(e){
        // Have to stop propagation here
        e.stopPropagation();
        input.clockpicker('show')
                .clockpicker('toggleView', 'minutes');
    });
    $('#button-b').click(function(e){
        // Have to stop propagation here
        e.stopPropagation();
        input.clockpicker('show')
                .clockpicker('toggleView', 'hours');
    });
});

