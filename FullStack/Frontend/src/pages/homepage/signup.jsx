import { useState } from "react";
import useOTP from "../../hooks/useOTP";
import useSignup from "../../hooks/useSignup";
import Navbar from "../../components/navbar/navbar";
import PropTypes from "prop-types";

const Signup = ({ userInfo }) => {
    const [isOTPSent, setIsOTPSent] = useState(false);
    const [isResendAllowed, setIsResendAllowed] = useState(false);
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const { sendOtp } = useOTP({ setIsOTPSent, setIsResendAllowed });
    const { registerUser } = useSignup({ setIsResendAllowed });

    const handleSendOtp = (isResend) => {
        // validation : REGEX
        if (email.length <= 5) {
            alert("Invalid Email!");
            return;
        }

        sendOtp(email, isResend);
    };

    const handleCreateUser = (e) => {
        e.preventDefault();
        const otp = e.target[0].value;
        const password = e.target[1].value;
        const rePassword = e.target[2].value;

        if (password !== rePassword) {
            alert("Passwords does not match!");
            return;
        }

        registerUser({
            otp,
            password,
            name: fullName,
            email,
        });
    };

    return (
        <div>
            <Navbar userInfo={userInfo} />
            <div>
                <label>Full Name:</label>
                <input type="text" name="full-name" value={fullName} onChange={(e) => setFullName(e.target.value)} />
            </div>
            <div>
                <label>Email:</label>
                <input
                    disabled={isOTPSent}
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            {isOTPSent ? (
                <form onSubmit={handleCreateUser}>
                    <div>
                        <label>OTP:</label>
                        <input type="string" name="otp" />
                    </div>
                    <div>
                        <label>Password:</label>
                        <input type="password" name="password" />
                    </div>
                    <div>
                        <label>Re-enter Password:</label>
                        <input type="password" name="re-enter-password" />
                    </div>
                    <button>Register</button>
                </form>
            ) : (
                <button onClick={() => handleSendOtp(false)}>Send OTP</button>
            )}
            <button hidden={!isResendAllowed} onClick={() => handleSendOtp(true)}>
                Resend OTP
            </button>
        </div>
    );
};

Signup.propTypes = {
    userInfo: PropTypes.object.isRequired,
};

export default Signup;
