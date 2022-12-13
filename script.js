var namelist = document.querySelectorAll(".humster-name");
        var namelist2 = [];
        for (var i = 0; i < namelist.length; i++) {
            namelist2[i] = namelist[i].innerHTML;
        }
        console.log(namelist2);
        let addhumster = () => {
            let humster = '<div class="col s12 m6 l4"><div class="humster"><img src = "';
            humster+=prompt("Дай ссылку на картинку хомяка", 'https://a.d-cd.net/380652as-960.jpg')+'">';
            humster+='<div class="humster-info"><div class="container"><div class="row humster-name">';
            humster+= "Кличка: " + prompt("Кличка хомяка", "Вася");
            humster+= '</div><div class="row humster-year">';
            let year = prompt("Год рождения хомяка", "1999");
            humster += 'Год рождения: ' + year;
            humster += '</div><div class="row humster-age">Возраст: '+ (2022-year) + ' года';
            humster += '</div><div class="button">Выбрать</div></div></div></div></div>';
            document.getElementById('humsterlist').querySelector(".row").innerHTML += humster;
        }