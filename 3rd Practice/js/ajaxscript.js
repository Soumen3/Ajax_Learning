document.getElementById("btnajax").addEventListener('click', makerequest);

function makerequest() {
    console.log("button clicked")

    const xhr = new XMLHttpRequest();
    xhr.open("GET", "data.txt", true);
    xhr.onload = function (){
        if (xhr.status === 200) {
            console.log(xhr)
            console.log(xhr.responseText)
        }
        else{
            console.error("error")
        }
    }
    xhr.send()
}
