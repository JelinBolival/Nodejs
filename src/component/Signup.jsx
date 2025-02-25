import { useState } from "react";
import axios from "axios";

const Signup = () => {
    const [formData, setFormData] = useState({ username: "", password: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:7857/user/register", formData, { withCredentials: true });
            alert(res.data.message);
        } catch (error) {
            alert("Signup failed");
        }
    };

    return (
        <div>
            <h2>Signup</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="username" placeholder="Enter username" onChange={handleChange} required />
                <input type="password" name="password" placeholder="Enter password" onChange={handleChange} required />
                <button type="submit">Signup</button>
            </form>
        </div>
    );
};

export default Signup;
