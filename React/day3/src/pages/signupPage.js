// export const HomePage = () => {
//     return (
//         <div>
//             <h1>Home Page</h1>
//         </div>
//     );
// };

import Button from "../components/ui/button";

const SignupPage = () => {
    let name = "User";
    console.log("🟡 : name:", name);

    const changeName = (e) => {
        name = e.target.value;
        console.log("🟡 : name:", name);
    };
    return (
        <form className="sign-up-form">
            <h2>Hello, {name}</h2>
            <div className="input-container">
                <label>Email</label>
                <input type="email" onChange={changeName} />
            </div>
            <div className="input-container">
                <label>Password</label>
                <input type="password" />
            </div>
            <div>
                <Button text="Submit" theme="secondary" />
                <Button text="Reset" type="reset" />
                {Button({
                    text: "Nothing",
                    theme: "danger",
                })}
            </div>
        </form>
    );
};

export default SignupPage;
