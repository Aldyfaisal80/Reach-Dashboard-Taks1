import Content from "../components/fragments/Content";

export default function Dashboard () {
    return (
        <div className="w-full h-full overflow-hidden flex items-center justify-center" style={{ background: '#edf2f7' }}>
            <div className="flex w-full h-full bg-gray-200">
                <div className="flex flex-col flex-1 overflow-hidden">
                    <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
                        <Content />
                    </main>
                </div >
            </div >
        </div >
    )
}