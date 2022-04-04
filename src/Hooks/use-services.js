import { useState } from "react";

export default function UseServices(){

    const [servicesArr, setServicesArr] = useState([])
    const [serviceObj, setServiceObj]=useState([])
    const [show, setShow] = useState(false);

return {servicesArr, setServicesArr, show, setShow, serviceObj, setServiceObj};

}