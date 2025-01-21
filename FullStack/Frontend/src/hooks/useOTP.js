const useOTP = ({ setIsOTPSent }) => {
    const sendOtp = async (email) => {
        try {
            const values = { email };
            const res = await fetch("http://localhost:1902/api/v1/otp", {
                method: "POST",
                body: JSON.stringify(values),
                headers: {
                    "content-type": "application/json",
                },
            });
            console.log(res);
            const data = await res.json();
            if (res.status !== 201) {
                alert(data.message);
            } else {
                alert("OTP sent");
                setIsOTPSent(true);
            }
        } catch (err) {
            alert(err.message);
        }
    };

    return { sendOtp };
};

export default useOTP;
