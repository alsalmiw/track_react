
async function GetAllServices(){
    let res = await fetch('http://localhost:5098/services/getallservices');
    let data = await res.json();
    return data;
}

async function GetSearchResult(term){
    let res = await fetch(`http://localhost:5098/services/GetSearchResult/${term}`);
    let data = await res.json();
    return data;
}

export {GetAllServices, GetSearchResult}