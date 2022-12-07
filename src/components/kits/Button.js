const Button = ({ title, icon, cb }) => {
    const handleClick = () => {
        cb();
    }
    return (
        <button onClick={handleClick} class="hidden sm:inline-flex ml-5 text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center items-center mr-3">
            {icon && icon}
            {title ? title : "Button"}
        </button>
    )
}

export default Button