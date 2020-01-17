fetch('https://jsonplaceholder.typicode.com/users').then(
            function(result) {
                return result.json()
        }
        ).then(
            function(j){
                var $ul = document.getElementById("Utenti")
                    console.log(j)
                for (i=0;i<j.length; i++){
                    var el = document.createElement("li")
                    el.innerHTML = j[i].id + " | " + j[i].name+ " | " + j[i].username+ " | " + j[i].email+ " | " + j[i].address.street+ " | " + j[i].address.suite+ " | " + j[i].address.city+ " | " + j[i].address.zipcode+ " | " + j[i].address.geo.lat+ " | " + j[i].address.geo.lng
                    $ul.appendChild(el)
                }
            }
        );  