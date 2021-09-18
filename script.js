function initFun(){
    fetch("https://yashkolambekar.me/status.txt")
    .then(function(response){
        return (response.text());
    })
    .then(function(data){
        document.getElementById("status-p").innerHTML = data;
    })

    fetch("https://api.countapi.xyz/update/default/ff742b99-d427-449a-b96a-e5f73c49c157?amount=1")
    .then(function(response){
        return (response.json());
    })
    .then(function(json){
        document.getElementById("pageviews").innerHTML = json.value;
    })
       
}