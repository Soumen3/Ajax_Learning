document.getElementById("btnajax").addEventListener('click', makerequest);

function makerequest() {
    console.log("button clicked")

    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log(xhr)
        }
        else{
            console.log("error")
        }
    }
    console.log(xhr)
    xhr.open("GET", "data.txt", true);
    xhr.send()
}