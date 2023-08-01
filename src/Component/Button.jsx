

const Button = ({children}) => {
    return (
        <div>
            <button style={{background:'#fd7e14'}} className="py-2 px-3 fs-6 fw-semibold text-light">{children}</button>
        </div>
    );
};

export default Button;