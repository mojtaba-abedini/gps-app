"use client"

const Button=({title,onClick = () => null})=>{
    return(
        <button onClick={() => onClick()} type="button" className="text-gray-900 flex justify-center bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center  items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2">
        {title}
       </button>
    )
}


export default Button;