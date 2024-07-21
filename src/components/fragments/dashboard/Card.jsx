import Badge from "../../elements/dashboard/Badge";

import { FaUsers } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { FaShoppingBag } from "react-icons/fa";



export default function Card() {
    return (
        <div className="mt-4">
            <div className="flex flex-wrap gap-10 ">
                <Badge>
                    <Badge.Card bgcolor="bg-purple-700 rounded-full" icon={<FaUsers size={40} className="text-white"/>} title="Total Users" number="2,453" />
                </Badge>
                <Badge>
                    <Badge.Card bgcolor="bg-orange-500 rounded-full" icon={<IoMdCart size={40} className="text-white"/>} title="Total Users" number="2,453" />
                </Badge>
                <Badge>
                    <Badge.Card bgcolor="bg-pink-700 rounded-full" icon={<FaShoppingBag size={40} className="text-white"/>} title="Total Users" number="2,453" />
                </Badge>
            </div>
        </div>
    )
}