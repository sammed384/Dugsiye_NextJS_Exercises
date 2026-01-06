export default async function SlowComponent() {
    await new Promise((resolve) => setTimeout(resolve, 3000));

    return <p>Slow content loaded!</p>;
}
