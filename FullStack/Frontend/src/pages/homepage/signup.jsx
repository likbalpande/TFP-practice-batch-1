import { useState } from "react";
import useOTP from "../../hooks/useOTP";
import useSignup from "../../hooks/useSignup";

const Signup = () => {
    const [isOTPSent, setIsOTPSent] = useState(false);
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const { sendOtp } = useOTP({ setIsOTPSent });
    const { registerUser } = useSignup();

    const handleSendOtp = () => {
        // validation : REGEX
        if (email.length <= 5) {
            alert("Invalid Email!");
            return;
        }

        sendOtp(email);
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
                <button onClick={handleSendOtp}>Send OTP</button>
            )}
        </div>
    );
};

export default Signup;
