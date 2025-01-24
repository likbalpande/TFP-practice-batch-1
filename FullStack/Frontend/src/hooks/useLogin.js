import { useState } from "react";
import { useNavigate } from "react-router";

const useLogin = ({ manageLogin }) => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const login = async ({ email, password }) => {
        setLoading(true);
        try {
            const userInfo = { email, password };
            const res = await fetch("http://localhost:1902/api/v1/auth/login", {
                method: "POST",
                credentials: "include",
                body: JSON.stringify(userInfo),
                headers: {
                    "content-type": "application/json",
                },
            });
            const data = await res.json();
            if (res.status == 200) {
                alert("Login success!");
                manageLogin(data.data.user);
                navigate("/");
            } else if (res.status == 400) {
                alert(data.message);
                navigate("/signup");
            } else {
                alert(data.message);
            }
        } catch (err) {
            alert(err.message);
        } finally {
            setLoading(false);
        }
    };

    return { login, loading };
};

export default useLogin;
