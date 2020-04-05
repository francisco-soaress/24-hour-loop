$(function(){

	setInterval(function(){

    var currentDate = new Date();
    var hours = Math.floor(24 - currentDate.getHours());
    var minutes = Math.floor(60 - currentDate.getMinutes());
    var seconds = Math.floor(59 - currentDate.getSeconds());

    hours = hours <= 9 ? "0" + hours : hours;
    minutes = minutes <= 9 ? "0" + minutes : minutes;
    seconds = seconds <= 9 ? "0" + seconds : seconds;
      
    /* ==== day : minutes : seconds ==== */
    day = "<div class='contador-format-txt'>" + hours + "<div class='contador-data-txt'>Horas</div></div><span class='contador-dois-ponto'>:</span>" + "<div class='contador-format-txt'>" + minutes + "<div class='contador-data-txt'>minutos</div></div><span class='contador-dois-ponto'>:</span>" + "<div class='contador-format-txt'>" + seconds + "<div class='contador-data-txt'>segundos</div></div>";

    /* ==== minutes : seconds ==== */
    // day = "<div class='contador-format-txt'> 00 <div class='contador-data-txt'>Horas</div></div><span class='contador-dois-ponto'>:</span>" + "<div class='contador-format-txt'>" + minutes + "<div class='contador-data-txt'>minutos</div></div><span class='contador-dois-ponto'>:</span>" + "<div class='contador-format-txt'>" + seconds + "<div class='contador-data-txt'>segundos</div></div>";

    $("#contador-data").html(day);
    /* ==== day : minutes : seconds ==== */
    $("#contador-data").attr({"title": "Faltam apenas: "  + hours + ":" + minutes + ":" + seconds + " para o fim da promoção."});
    /* ==== minutes : seconds ==== */
    // $("#contador-data").attr({"title": "Faltam apenas: "  + minutes + ":" + seconds + " para o fim da promoção."});
    
    }, 1000);
});