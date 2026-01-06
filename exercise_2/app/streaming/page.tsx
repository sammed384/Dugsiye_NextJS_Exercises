import { Suspense } from "react";
import SlowComponent from "../components/SlowComponent";

export default function StreamingPage() {
    return (
        <div>
            <h1>Streaming Page</h1>

            <Suspense fallback={<p>Loading...</p>}>
                <SlowComponent />
            </Suspense>
        </div>
    );
}
