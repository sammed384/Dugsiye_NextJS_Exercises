"use client";

import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p className="text-lg font-semibold">
                Count: <span className="text-blue-600">{count}</span>
            </p>

            <button
                onClick={() => setCount((prev) => prev + 1)}
                className="rounded-lg bg-blue-600 px-5 py-2 text-white transition hover:bg-blue-700 active:scale-95"
            >
                Increment
            </button>
        </div>
    );
}
