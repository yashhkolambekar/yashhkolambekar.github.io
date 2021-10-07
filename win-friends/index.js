function downloadCount(){
fetch("https://api.countapi.xyz/update/default/a465a1b1-2266-4145-8e19-bf8a6ae78388?amount=1")
.then(function(response){
    return (response.json());
})
}