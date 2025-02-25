import { useEffect, useState } from "react";
import axios from "axios";

const Product = () => {
    const [message, setMessage] = useState("");

    useEffect(() => {
        axios.get("http://localhost:7857/user/product", { withCredentials: true })
            .then(res => setMessage(res.data.message))
            .catch(err => setMessage("Access denied"));
    }, []);

    return <h2>{message}</h2>;
};

export default Product;
