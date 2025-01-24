const useOTP = ({ setIsOTPSent, setIsResendAllowed }) => {
    const sendOtp = async (email, isResend = false) => {
        try {
            const values = { email, isResend };
            const res = await fetch("http://localhost:1902/api/v1/otp", {
                method: "POST",
                body: JSON.stringify(values),
                headers: {
                    "content-type": "application/json",
                },
            });
            console.log(res);
            const data = await res.json();
            if (res.status === 201) {
                alert("OTP sent");
                setIsOTPSent(true);
            } else if (res.status === 403 || res.status == 401) {
                alert(data.message);
                setIsOTPSent(true);
                setIsResendAllowed(true);
            } else {
                alert(data.message);
            }
        } catch (err) {
            alert(err.message);
        }
    };

    return { sendOtp };
};

export default useOTP;
