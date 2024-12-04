const Button = ({ text, type, theme = "primary" }) => {
    return (
        <button type={type} className={`ui-button theme-${theme}`}>
            {text}
        </button>
    );
};

export default Button;

// ONLINE COMPILER
// const Button = ({name, city , time=Date()}) => {
//     console.log(`Hi ${name}, you are from ${city}! @(${time})`);
// }

// // <Button name="Likhilesh" city="Delhi" />

// Button({
//     name: 'Likhilesh',
//     city: 'Delhi'
// });
