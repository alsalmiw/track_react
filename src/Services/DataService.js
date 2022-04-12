
async function GetAllServices(){
    let res = await fetch('https://ontherighttrack.azurewebsites.net/services/getallservices');
    let data = await res.json();
    return data;
}

async function GetSearchResult(term){
    let res = await fetch(`https://ontherighttrack.azurewebsites.net/services/GetSearchResult/${term}`);
    let data = await res.json();
    return data;
}

export {GetAllServices, GetSearchResult}