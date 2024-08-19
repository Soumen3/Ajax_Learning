document.getElementById("btnajax").addEventListener('click', makerequest);
let nm= document.getElementById("name-id")
let em= document.getElementById("email-id")
let pass= document.getElementById("pass-id")
let addr= document.getElementById("addr-id")
function makerequest() {

    const xhr = new XMLHttpRequest();
    xhr.open("GET", "data.json", true);
    xhr.responseType = "json";
    xhr.onload = function (){
        if (xhr.status === 200) {
            console.log(xhr)
            nm.innerText = xhr.response.name;
            em.innerText = xhr.response.email;
            pass.innerText = xhr.response.password;
            addr.innerText = xhr.response.address;
            // dt.innerText = xhr.responseText;
        }
        else{
            console.error("error")
        }
    }
    xhr.send()
}
