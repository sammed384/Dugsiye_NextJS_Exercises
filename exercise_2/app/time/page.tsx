export default function TimePage() {
    const time = new Date().toLocaleTimeString();

    return (
        <div>
            <h1>Server Time</h1>
            <p>{time}</p>
        </div>
    );
}
