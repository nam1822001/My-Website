
    var dateTime = new Date();
    var time =" Ngày "  + dateTime.getUTCDate() + " Tháng "
    + (dateTime.getMonth()+1) + " Năm " + dateTime.getFullYear();
    document.getElementById('time').innerHTML = time;

    
    $(function () {

        $('[data-toggle="tooltip"]').tooltip()
      })
    