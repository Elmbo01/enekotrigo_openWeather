$(function () {
  const Api5days = "https://api.openweathermap.org/data/2.5/forecast?q=";
  const ApiNOW = "https://api.openweathermap.org/data/2.5/weather?q=";
  const ApiCordenadas1 = "https://api.openweathermap.org/data/2.5/find?lat=";
  const wetherKEY = "02e6f1531d1ec0ab611db15ce1dd3163";
  $("#btnSaverMas").hide();
  $("#formularioLugar").hide();

  $("#buscarMenu").click(function (e) {
    $("#formularioLugar").show();
    $("#form").show();
    $("#resultado").hide();
    $("#saverMas").hide();
  });

  $("#homeMenu").click(function (e) {
    $("#formularioLugar").hide();
  });
  $("#imgMenu").click(function (e) {
    $("#menu").toggleClass("collapse");
  });
  $("#btnBuscar").click(function (e) {
    var lugar = $("#txtLugar").val();
    $("#resultado").show();
    $("#btnSaverMas").show();
    $("#form").hide();
    $.ajax({
      url: ApiNOW + lugar + "&appid=" + wetherKEY,
      type: "GET",
    }).done(function (response2) {
      var result = "";
      var saverMas = "";
      var jqSaverMas = $(saverMas);
      $("#saverMas").html(jqSaverMas);
      switch (response2.weather[0].main) {
        case "Clear":
          result +=
            '<div class="card" style="width: 18rem;"><img src="img/sun_sunny.png" class="card-img-top w-50" alt="..."><div class="card-body"><h5 class="card-title">' +
            response2.weather[0].description +
            '</h5><p class="card-text">' +
            Math.round(response2.main.temp - 271.0) +
            "º</p></div></div>";
          break;
        case "Clouds":
          result +=
            '<div class="card" style="width: 18rem;"><img src="img/clouds.png" class="card-img-top  w-50" alt="..."><div class="card-body"><h5 class="card-title">' +
            response2.weather[0].description +
            '</h5><p class="card-text">' +
            Math.round(response2.main.temp - 271.0) +
            "º</p></div></div>";
          break;

        case "Drizzle":
        case "Rain":
          result +=
            '<div class="card" style="width: 18rem;"><img src="img/cloud_rain.png" class="card-img-top  w-50" alt="..."><div class="card-body"><h5 class="card-title">' +
            response2.weather[0].description +
            '</h5><p class="card-text">' +
            Math.round(response2.main.temp - 271.0) +
            "º</p></div></div>";
          break;

        case "Thunderstorm":
          result +=
            '<div class="card" style="width: 18rem;"><img src="img/cloud_flash.png" class="card-img-top  w-50" alt="..."><div class="card-body"><h5 class="card-title">' +
            response2.weather[0].description +
            '</h5><p class="card-text">' +
            Math.round(response2.main.temp - 271.0) +
            "º</p></div></div>";
          break;

        case "Snow":
          result +=
            '<div class="card" style="width: 18rem;"><img src="img/cloud_snow.png" class="card-img-top  w-50" alt="..."><div class="card-body"><h5 class="card-title">' +
            response2.weather[0].description +
            '</h5><p class="card-text">' +
            Math.round(response2.main.temp - 271.0) +
            "º</p></div></div>";
          break;

        case "Atmosphere":
          result +=
            '<div class="card" style="width: 18rem;"><img src="img/mist.png" class="card-img-top  w-50" alt="..."><div class="card-body"><h5 class="' +
            response2.weather[0].description +
            '</h5><p class="card-text">' +
            Math.round(response2.main.temp - 271.0) +
            "º</p></div></div>";
          break;
      }
      var jqresult = $(result);
      $("#resultado").html(jqresult);
    });
  });

  $("#btnSaverMas").click(function (e) {
    $("#btnSaverMas").hide();
    $("#saverMas").show();
    var lugar = $("#txtLugar").val();
    $.ajax({
      url: Api5days + lugar + "&appid=" + wetherKEY,
      type: "GET",
    }).done(function (response) {
      var result =
        "<table class='table'><thead><tr><th scope='col'>Dia</th><th scope='col'>Clima</th><th scope='col'>Icono</th></tr></thead><tbody>";

      var fechaHora = response.list[0].dt_txt.split(" ");
      var ultimoDia = fechaHora[0].split("-");
      response.list.forEach(function (day) {
        var fechaHora = day.dt_txt.split(" ");
        var dia = fechaHora[0].split("-");
        var hora = fechaHora[1].split(":");
        var imagen;
        switch (day.weather[0].main) {
          case "Clear":
            imagen = "<img src='img/64sun.png'>";
            break;

          case "Clouds":
            if (day.clouds.all >= 40) {
              imagen = "<img src='img/64cloudy.png'>";
            } else {
              imagen = "<img src='img/64cloudy_summer.png'>";
            }
            break;
          case "Drizzle":
          case "Rain":
            imagen = "<img src='img/64rain.png'>";
            break;
          case "Thunderstorm":
            imagen = "<img src='img/64storm.png'>";
            break;

          case "Snow":
            imagen = "<img src='img/64snow.png'>";
            break;

          case "Atmosphere":
            imagen = "<img src='img/64mist.png'>";
            break;
        }
        if (dia[0] == ultimoDia[0]) {
          if (dia[1] == ultimoDia[1]) {
            if (dia[2] > ultimoDia[2]) {
              if ((hora[0] = "12")) {
                ultimoDia = dia;
                result +=
                  "<tr><td>" +
                  fechaHora[0] +
                  "</td><td>" +
                  day.weather[0].description +
                  "</td><td>" +
                  imagen +
                  "</td></tr>";
              }
            }
          } else {
            if ((hora[0] = "12")) {
              ultimoDia = dia;
              result +=
                "<tr><td>" +
                day.dt_txt +
                "</td><td>" +
                day.weather[0].description +
                "</td><td>" +
                imagen +
                "</td></tr>";
            }
          }
        } else {
          if ((hora[0] = "12")) {
            ultimoDia = dia;
            result +=
              "<tr><td>" +
              day.dt_txt +
              "</td><td>" +
              day.weather[0].description +
              "</td><td>" +
              imagen +
              "</td></tr>";
          }
        }
      });
      result += "</tbody></table>";
      var jqresult = $(result);
      $("#saverMas").append(result);
    });
  });

  $("#btnGPS").click(function (e) {
    $("#btnSaverMas").hide();
    $("#form").hide();
    $("#formularioLugar").show();
    $("#resultado").show();
    var onSuccess = function (position) {
      $.ajax({
        url:
          ApiCordenadas1 +
          position.coords.latitude +
          "&lon=" +
          position.coords.longitude +
          "&cnt=1&appid=" +
          wetherKEY,
        type: "GET",
      }).done(function (response2) {
        var result = "";
        var saverMas = "";
        var jqSaverMas = $(saverMas);
        $("#saverMas").html(jqSaverMas);
        switch (response2.list[0].weather[0].main) {
          case "Clear":
            result +=
              '<div class="card" style="width: 18rem;"><img src="img/sun_sunny.png" class="card-img-top w-50" alt="..."><div class="card-body"><h5 class="card-title">' +
              response2.list[0].weather[0].description +
              '</h5><p class="card-text">' +
              Math.round(response2.list[0].main.temp - 271.0) +
              "º</p></div></div>";
            break;
          case "Clouds":
            result +=
              '<div class="card" style="width: 18rem;"><img src="img/clouds.png" class="card-img-top  w-50" alt="..."><div class="card-body"><h5 class="card-title">' +
              response2.list[0].weather[0].description +
              '</h5><p class="card-text">' +
              Math.round(response2.list[0].main.temp - 271.0) +
              "º</p></div></div>";
            break;

          case "Drizzle":
          case "Rain":
            result +=
              '<div class="card" style="width: 18rem;"><img src="img/cloud_rain.png" class="card-img-top  w-50" alt="..."><div class="card-body"><h5 class="card-title">' +
              response2.list[0].weather[0].description +
              '</h5><p class="card-text">' +
              Math.round(response2.list[0].main.temp - 271.0) +
              "º</p></div></div>";
            break;

          case "Thunderstorm":
            result +=
              '<div class="card" style="width: 18rem;"><img src="img/cloud_flash.png" class="card-img-top  w-50" alt="..."><div class="card-body"><h5 class="card-title">' +
              response2.list[0].weather[0].description +
              '</h5><p class="card-text">' +
              Math.round(response2.list[0].main.temp - 271.0) +
              "º</p></div></div>";
            break;

          case "Snow":
            result +=
              '<div class="card" style="width: 18rem;"><img src="img/cloud_snow.png" class="card-img-top  w-50" alt="..."><div class="card-body"><h5 class="card-title">' +
              response2.list[0].weather[0].description +
              '</h5><p class="card-text">' +
              Math.round(response2.list[0].main.temp - 271.0) +
              "º</p></div></div>";
            break;

          case "Atmosphere":
            result +=
              '<div class="card" style="width: 18rem;"><img src="img/mist.png" class="card-img-top  w-50" alt="..."><div class="card-body"><h5 class="' +
              response2.list[0].weather[0].description +
              '</h5><p class="card-text">' +
              Math.round(response2.list[0].main.temp - 271.0) +
              "º</p></div></div>";
            break;
        }
        var jqresult = $(result);
        $("#resultado").html(jqresult);
      });
    };

    function onError(error) {
      alert("code: " + error.code + "\n" + "message: " + error.message + "\n");
    }
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  });
});
