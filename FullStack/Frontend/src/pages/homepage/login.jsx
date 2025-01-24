import Navbar from "../../components/navbar/navbar";
import useLogin from "../../hooks/useLogin";
import PropTypes from "prop-types";

const Login = ({ userInfo, manageLogin }) => {
    const { login, loading } = useLogin({ manageLogin });

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;
        login({ email, password });
    };

    return (
        <div>
            <Navbar userInfo={userInfo} />
            <form onSubmit={handleLogin}>
                <div>
                    <label>Email</label>
                    <input type="email" required />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" required />
                </div>
                <button disabled={loading}>Login</button>
            </form>
        </div>
    );
};

Login.propTypes = {
    userInfo: PropTypes.object.isRequired,
    manageLogin: PropTypes.func.isRequired,
};

export default Login;
