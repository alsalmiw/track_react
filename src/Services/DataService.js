
async function GetAllServices(){
    let res = await fetch('http://localhost:5098/services/getallservices');
    let data = await res.json();
    console.log(data)
    return data;
}

export {GetAllServices}