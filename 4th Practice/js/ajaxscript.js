document.getElementById("btnajax").addEventListener('click', makerequest);

function makerequest() {

    const xhr = new XMLHttpRequest();
    xhr.open("GET", "data.txt", true);
    xhr.timeout=200;
    xhr.onload = function (){
        if (xhr.status === 200) {
            console.log(xhr)
            console.log(xhr.responseText)
        }
        else{
            console.error("error")
        }
    }
    xhr.onprogress = (e) =>{
        console.log(e.loaded);
        console.log(e.total);
    }
    xhr.onerror = () =>{
        console.log("network error")
    }
    xhr.onloadstart = () =>{
        console.log("start")
    }
    xhr.onloadend = () =>{
        console.log("end")
    }
    xhr.onabort = () =>{
        console.log("abort")
    }
    xhr.ontimeout = () =>{
        console.log("timeout")
    }
    xhr.send()
}
