
async function GetAllServices(){
    let res = await fetch('https://api.otrtcalaveras.com/services/getallservices');
    let data = await res.json();
    return data;
}

async function GetSearchResult(term){
    let res = await fetch(`https://api.otrtcalaveras.com/services/GetSearchResult/${term}`);
    let data = await res.json();
    return data;
}

export {GetAllServices, GetSearchResult}