export default function Navbar() {
    return (
        <nav style={{ display: "flex", justifyContent: "space-between", padding: "1em", backgroundColor: "midnightblue" }}>
            <div>
                Judul
            </div>
            <div style={{display: "flex", gap: "10px"}}>
                <div>Home</div>
                <div>Project</div>
                <div>Playground</div>
            </div>
        </nav>
    )
}