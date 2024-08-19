document.getElementById("btnajax").addEventListener('click', makerequest);

// function makerequest() {
//     console.log("Button Clicked");
//     const xhr = new XMLHttpRequest();
//     console.log("Ready state before open", xhr.readyState);
//     xhr.open("GET", "data.txt", true);
//     console.log("Ready state after open", xhr.readyState);
//     xhr.onreadystatechange =  () => {
//         console.log("Ready state ", xhr.readyState);
//         if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
//             console.log(xhr)
//             console.log(xhr.responseText);
//         }
//         else{
//             console.log("Problem Occured");
//         }
//     }
//     xhr.send()

// }


function makerequest() {
    console.log("Button Clicked");
    const xhr = new XMLHttpRequest();
    if(xhr.readyState === 0){
        console.log("Method not oppend yet 0");
    }
    xhr.open("GET", "data.txt", true);
    if(xhr.readyState === 1){
        console.log("Method oppend 1");
    }
    xhr.onreadystatechange =  () => {
        if (xhr.readyState === 2){
            console.log("Response header received 2");
        }
        if (xhr.readyState === 3){
            console.log("Loading... 3");
        }
        if (xhr.readyState === 4){
            console.log("Done 4");
        }
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200){
                console.log(xhr)
                console.log(xhr.responseText);
            }
            else{
                console.log("Problem Occured");
            }
        }
    }
    xhr.send()
}