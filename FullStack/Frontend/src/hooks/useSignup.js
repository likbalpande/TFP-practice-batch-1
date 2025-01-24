const useSignup = ({ setIsResendAllowed }) => {
    const registerUser = async ({ name, email, password, otp }) => {
        try {
            const userInfo = { name, email, password, otp };
            const res = await fetch("http://localhost:1902/api/v1/auth/signup", {
                method: "POST",
                body: JSON.stringify(userInfo),
                headers: {
                    "content-type": "application/json",
                },
            });
            const data = await res.json();
            if (res.status == 201) {
                //....
            } else if (res.status === 403 || res.status == 401) {
                alert(data.message);
                setIsResendAllowed(true);
            } else if (res.status == 409) {
                alert(data.message);
                // redirect
            }
        } catch (err) {
            alert(err.message);
        }
    };

    return { registerUser };
};

export default useSignup;
