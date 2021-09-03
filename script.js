function initFun(){
    fetch("https://yashkolambekar.me/status.txt")
    .then(function(response){
        return (response.text());
    })
    .then(function(data){
        document.getElementById("status-p").innerHTML = data;
    })

    
}