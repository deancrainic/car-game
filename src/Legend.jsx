export function Legend() {
    return (
        <>
            <h2 className="title">Legend</h2>
            <hr/>
            <ul className="list">
                <li className="list-item">W, A, S, D - drive around</li>
                <li className="list-item">
                    Arrow keys - control car in air
                </li>
                <li className="list-item">R - reset car</li>
                <li className="list-item">K - change camera</li>
                <li className="list-item">Mouse + Left click - rotate camera</li>
                <li className="list-item">Mouse + Right click - move camera</li>
                <li className="list-item">Mouse + Left click - zoom camera</li>
            </ul>
        </>)
}