loadOptions(function (opts) {

    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {
            if (xmlhttp.status == 200) {
                //    document.getElementById("myDiv").innerHTML = xmlhttp.responseText;

                const data = JSON.parse(xmlhttp.responseText);
                console.log(data);

                document.getElementById("city").innerText = data.name;
                document.getElementById("temp").innerText = data.main.temp;
                document.getElementById("press").innerText = data.main.pressure;
                document.getElementById("hum").innerText = data.main.humidity;

            }
            //    else if (xmlhttp.status == 400) {
            //       alert('There was an error 400');
            //    }
            //    else {
            //        alert('something else other than 200 was returned');
            //    }
        }
    };

    xmlhttp.open("GET", `https://api.openweathermap.org/data/2.5/weather?q=${opts.city}&appid=e3affccc241ba7aab1e0a8d3825986ad&units=metric&lang=ru`, true);
    xmlhttp.send();


});