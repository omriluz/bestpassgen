import type { ComponentPropsWithoutRef } from "react"



const Button = ({ children, className, ...props }: ComponentPropsWithoutRef<'button'>) => {
    return (
        <button
            className={["border text-gray-50 duration-300 relative group cursor-pointer overflow-hidden w-48 rounded-md bg-neutral-800 p-2 font-extrabold hover:bg-purple-500 focus:bg-purple-500", className].filter(Boolean).join(' ')}
            {...props}
        >
            <div
                className="absolute group-hover:-top-1 group-focus:-top-1 group-focus:-right-2 group-hover:-right-2 z-10 w-16 h-16 rounded-full group-hover:scale-150 group-focus:scale-150 duration-700 right-12 top-12 bg-yellow-500"
            >
            </div>
            <div
                className="absolute group-hover:-top-1 group-focus:-top-1 group-focus:-right-2 group-hover:-right-2 z-10 w-12 h-12 rounded-full group-hover:scale-150 group-focus:scale-150 duration-700 right-20 -top-6 bg-orange-500"
            >
            </div>
            <div
                className="absolute group-hover:-top-1 group-focus:-top-1 group-focus:-right-2 group-hover:-right-2 z-10 w-8 h-8 rounded-full group-hover:scale-150 group-focus:scale-150 duration-700 right-32 top-6 bg-pink-500"
            >
            </div>
            <div
                className="absolute group-hover:-top-1 group-focus:-top-1 group-focus:-right-2 group-hover:-right-2 z-10 w-4 h-4 rounded-full group-hover:scale-150 group-focus:scale-150 duration-700 right-2 top-12 bg-red-600"
            >
            </div>
            <p className="z-10 absolute left-2 bottom-2 text-lg md:text-2xl text-left">{children}</p>
        </button>
    )
}
export default Button