const useSignup = () => {
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
            console.log(res);
        } catch (err) {
            alert(err.message);
        }
    };

    return { registerUser };
};

export default useSignup;
