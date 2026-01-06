"use client";

import { useActionState } from "react";
import { submitForm } from "./actions";

export default function Page() {
  const [state, formAction] = useActionState(submitForm, null);

  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-900">
      <form
        action={formAction}
        className="w-full max-w-sm bg-slate-950 p-6 rounded-2xl shadow-xl space-y-4"
      >
        <h2 className="text-center text-xl font-semibold text-white">
          Register
        </h2>

        <input
          name="email"
          type="email"
          placeholder="Email"
          className="w-full px-4 py-2 rounded-lg bg-slate-900 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-sky-400"
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          className="w-full px-4 py-2 rounded-lg bg-slate-900 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-sky-400"
        />

        <input
          name="firstName"
          placeholder="First Name"
          className="w-full px-4 py-2 rounded-lg bg-slate-900 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-sky-400"
        />

        <input
          name="lastName"
          placeholder="Last Name"
          className="w-full px-4 py-2 rounded-lg bg-slate-900 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-sky-400"
        />

        <button
          type="submit"
          className="w-full bg-sky-400 hover:bg-sky-500 text-slate-900 font-semibold py-2 rounded-lg transition"
        >
          Submit
        </button>

        {state?.error && (
          <p className="text-center text-red-400 text-sm">
            {state.error}
          </p>
        )}

        {state?.success && (
          <p className="text-center text-green-400 text-sm">
            {state.message}
          </p>
        )}
      </form>
    </main>
  );
}
