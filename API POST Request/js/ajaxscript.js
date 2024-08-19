document.getElementById("btnajax").addEventListener('click', makerequest);

function makerequest() {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', "https://dummy.restapiexample.com/api/v1/create", true)
    xhr.responseType = "json"
    xhr.timeout = 3000
    xhr.onload = () => {
        if (xhr.status === 200) {
            console.log(xhr.response);
        }
    }
    const mydata = {
        "name":"Soumen",
        "Salary":9999999,
        "Age":23
    }
    
    xhr.onerror = () => {
        console.log("network error")
    }
    xhr.onprogress = () => {
        console.log("on progress")
    }
    xhr.onabort = () => {
        console.log("request aborted")
    }
    xhr.ontimeout = () => {
        console.log("request timeout")
    }
    xhr.onloadend = () => {
        console.log("request end")
    }
    xhr.onloadstart = () => {
        console.log("request start")
    }
    
    xhr.send(mydata)
}
