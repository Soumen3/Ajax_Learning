document.getElementById("btnajax").addEventListener('click', makerequest);
let dt= document.getElementById("data")
function makerequest() {

    const xhr = new XMLHttpRequest();
    xhr.open("GET", "data.txt", true);

    xhr.onload = function (){
        if (xhr.status === 200) {
            console.log(xhr.responseText)
            dt.innerText = xhr.responseText;
        }
        else{
            console.error("error")
        }
    }
    xhr.send()
}
