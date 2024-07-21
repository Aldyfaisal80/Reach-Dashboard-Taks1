/* eslint-disable react/prop-types */
const Badge = ({ children }) => {
    return (
        <div className="flex flex-wrap -mx-6">
            {children}
        </div>
    )
}

const Card = ({ icon, className, title, number, bgcolor }) => {
    return (
        <div className="w-full px-6 mt-6 sm:w-1/2 xl:w-1/3 sm:mt-0">
            <div className="flex items-center w-[350px] px-5 py-6 bg-white rounded-md shadow-sm">
                <div className={`p-3 ${bgcolor} bg-opacity-75 rounded-full${className}`}>
                    {icon}
                </div>
                <div className="mx-5">
                    <h4 className="text-2xl font-semibold text-gray-700">{number}</h4>
                    <div className="text-gray-500">{title}</div>
                </div>
            </div>
        </div>
    )
}

Badge.Card = Card


export default Badge