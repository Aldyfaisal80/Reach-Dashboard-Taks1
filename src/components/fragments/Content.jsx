import Card from "../fragments/dashboard/Card";
import Table from "../fragments/dashboard/Table";
export default function Content() {
    return (
        <div className="container px-6 py-8 mx-auto">
            <h3 className="text-3xl font-medium text-gray-700">Dashboard</h3>
            <Card />
            <div className="flex flex-col mt-8">
                <div className="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                    <div
                        className="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
                        <Table />
                    </div>
                </div>
            </div>
        </div>
    )
}