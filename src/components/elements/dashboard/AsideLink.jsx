/* eslint-disable react/prop-types */
import { Link, useLocation } from "react-router-dom";

export default function AsideLink(props) {
    const location = useLocation();
    const isActive = location.pathname === props.href;

    return (
        <Link to={props.href} className={`active ${isActive ? 'text-gray-100 bg-gray-700' : ''}`}
        >
            <a className={`flex items-center px-6 py-2 mt-4 text-gray-100 bg-gray-700 bg-opacity-25 ${isActive ? 'active text-gray-100 bg-gray-700' : ''}`}>
                {props.children}
            </a>
        </Link>
    );
}