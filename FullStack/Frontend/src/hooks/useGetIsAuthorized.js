import { useEffect } from "react";
import { useNavigate } from "react-router";

const useGetIsAuthorized = ({ setUserInfo }) => {
    const navigate = useNavigate();
    const getIsAuthorized = async () => {
        const res = await fetch("http://localhost:1902/api/v1/isAuthenticated", {
            credentials: "include",
        });
        const resObj = await res.json();
        if (res.status === 200 && resObj.isAuthenticated === true) {
            setUserInfo({
                isAuthenticated: true,
                user: {
                    email: resObj.user.email,
                    name: resObj.user.name,
                },
            });
        } else {
            //no
            navigate("/login");
        }
    };

    useEffect(() => {
        getIsAuthorized();
    }, []);
};

export default useGetIsAuthorized;
