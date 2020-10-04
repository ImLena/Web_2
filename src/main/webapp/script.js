let y, x, r;

jQuery('document').ready(function () {

    jQuery('#inY').on('keyup', function () {
        let img_y = document.createElement("img");
        img_y.src = "https://dropi.ru/img/uploads/2018-08-27/5_original.jpeg";
        img_y.width = 200;
        y = jQuery('#inY').val();
        if (isFinite(y)) {
            y = parseFloat(y);
            y *= 1000;
            y = Math.floor(y) / 1000;
            if (!(y > -3 && y < 3)) {
                jQuery('#answer').html("Y должен быть (-3;3)");
                jQuery('#first_line').html(img_y);
                console.log("true y")
                return false;
            }
            $('#answer').html("");
            $('#first_line').html("");
            return true;
        }
            else {
                jQuery('#answer').html("Y должен быть числом");
                img_y.src="resources/what.jpg"
                jQuery('#first_line').html(img_y);
                return false;
            }
    })
    // проверка правильности ввода значения Y
 /*   jQuery('#inY').on('change', function () {

        let img_y = document.createElement("img");
        img_y.src = "https://dropi.ru/img/uploads/2018-08-27/5_original.jpeg";
        img_y.width = 200;/!*
        y = jQuery('#inY').val();
        y = parseFloat(y);*!/

            }
    })
*/
    // работа с checkbox (R)
    document.querySelectorAll('.r').forEach(element => {
        element.onclick = function () {

            let v1 = document.querySelector(".r[value = 'v1']");
            let v2 = document.querySelector(".r[value = 'v15']");
            let v3 = document.querySelector(".r[value = 'v2']");
            let v4 = document.querySelector(".r[value='v25']");
            let v5 = document.querySelector(".r[value='v3']");

            let limit = 1;
            jQuery(".r").on("change", function () {
                if (jQuery(this).siblings(":checked").length >= limit) {
                    $('.r').not(this).prop('checked',false);
                }
            });

            if (v1.checked) {
                r = 1;
            } else if (v2.checked) {
                r = 1.5;
            } else if (v3.checked) {
                r = 2;
            } else if (v4.checked) {
                r = 2.5;
            } else if (v5.checked) {
                r = 3;
            } else
                r = null;
        }
    });

    // работа с X
    x=-5;
    jQuery('#inX').on("change", function () {

        x = this.value;

    });


    //отправка
    jQuery('#send').on('click', function () {
        send("button");
    });
    function send(key) {
        const keys = ["button", "canvas"];
        if (keys.includes(key)) {
            if (x == null || r == null || isNaN(y) || y >= 3 || y <= -3) {
                if (r == null) {
                    jQuery('#answer').html("Выберите R");
                    return false;

                }

                console.log("x=" + x + "y=" + y + "r=" + r + "type=" + key);

                $('#answer').html("Неправильные данные");
                let ans = document.createElement("img");
                ans.src = "https://www.syl.ru/misc/i/ai/383845/2504141.jpg";
                ans.width = 200;

                jQuery('#first_line').html(ans);


            } else {
                location.href = "answer.jsp";
                jQuery('#answer').html("");
                jQuery('#first_line').html("");
            }
            let request = new XMLHttpRequest()
            let arr = "x=" + encodeURIComponent(x) + "&y=" + encodeURIComponent(y) + "&r=" + encodeURIComponent(r) + "&key=" + encodeURIComponent(key);
            request.open('POST', "app", false);
            request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            request.send(arr);


        } else {
            alert("Error, wrong type. Button or canvas expected.")
        }
    }

    // работа с графиком

    let
        graph = document.getElementById("graphic"),
        ctx = graph.getContext('2d'),
        res, coords = [];

    graph.width = 400;
    graph.height = 400;

    function drawCanvas() {


        ctx.beginPath();

        // оси
        // y
        ctx.moveTo(200, 10);
        ctx.lineTo(200, 210);

        //x
        ctx.moveTo(100, 110);
        ctx.lineTo(300, 110);

        ctx.stroke();


        // II квадрант
        ctx.beginPath();
        ctx.fillStyle = "magenta";
        ctx.strokeStyle = "black";
        ctx.fillRect(140, 80, 60, 30);
        ctx.rect(140, 80, 60, 30);
        ctx.stroke();


        //III квадрант
        ctx.beginPath();
        ctx.moveTo(200, 110);
        ctx.fillStyle = "#00a5dc";
        ctx.arc(200, 110, 30, (Math.PI) / 2, Math.PI);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        //IV квадрант
        ctx.beginPath();
        ctx.strokeStyle = "black";
        ctx.moveTo(230, 110);
        ctx.lineTo(200, 140);
        ctx.lineTo(200, 110);
        ctx.fillStyle = "yellow";
        ctx.closePath();
        ctx.fill();
        ctx.stroke();


        ctx.beginPath();
        ctx.strokeStyle = "black";
        ctx.fillStyle = "black";

        // линии для +-r/2, +-r
        // по y
        ctx.moveTo(197, 80);
        ctx.lineTo(203, 80);

        ctx.moveTo(197, 50);
        ctx.lineTo(203, 50);

        ctx.moveTo(197, 140);
        ctx.lineTo(203, 140);

        ctx.moveTo(197, 170);
        ctx.lineTo(203, 170);

        // по x
        ctx.moveTo(170, 107);
        ctx.lineTo(170, 113);

        ctx.moveTo(140, 107);
        ctx.lineTo(140, 113);

        ctx.moveTo(230, 107);
        ctx.lineTo(230, 113);

        ctx.moveTo(260, 107);
        ctx.lineTo(260, 113);

        // стрелки
        // y
        ctx.moveTo(197, 15);
        ctx.lineTo(200, 10);
        ctx.lineTo(203, 15);

        //x
        ctx.moveTo(295, 107);
        ctx.lineTo(300, 110);
        ctx.lineTo(295, 113);

        // подписи
        // по y
        ctx.font = "10px Georgia";
        ctx.fillText("R/2", 209, 83);
        ctx.fillText("R", 209, 53);
        ctx.fillText("-R/2", 207, 143);
        ctx.fillText("-R", 207, 173);

        // по x
        ctx.fillText("-R/2", 163, 102);
        ctx.fillText("-R", 133, 102);
        ctx.fillText("R/2", 226, 102);
        ctx.fillText("R", 256, 102);

        ctx.stroke();
    }

    drawCanvas();

    coords = JSON.parse(localStorage.getItem('coords'));
    if (coords !== null) {

        coords.forEach(function (crd){
            let
                e = {
                    clientX: crd["0"],
                    clientY: crd["1"]
                };
            ctx.beginPath();
            ctx.arc(e.clientX, e.clientY, 2, 0, Math.PI * 2);
            ctx.fillStyle = "#0af167";
            ctx.fill();
        });
    } else
        coords = [];

    graph.addEventListener('click', function(e) {
        if (isNaN(r)) {
            ctx.beginPath();
            ctx.arc(e.clientX - 23, e.clientY - 73, 2, 0, Math.PI * 2);
            ctx.fillStyle = "red";
            ctx.fill();
        } else {
            coords.push([e.clientX - 23, e.clientY - 73]);
            localStorage.setItem('coords', JSON.stringify(coords));

            y = ((110 - (e.clientY - 73)) * r) / 60;
            x = (((e.clientX - 23) - 200) * r) / 60;

            if ((x <= 0 && y >= 0 && x >= -r && y <= r / 2) ||
                (x <= 0 && y <= 0 && (x * x) + (y * y) <= ((r * r) / 4)) ||
                (x >= 0 && y <= 0 && x - r / 2 <= y)) {
                res = "yes";
            } else {
                res = "no";
                jQuery('#answer').html("Неверные данные, вы не попали в одз. Попробуйте измениить радиус")
            }
            console.log(res);
        }
        send("canvas");
    });
});