"use server";

type State = {
  error?: string;
  success?: boolean;
  message?: string;
};

export async function submitForm(
  prevState: State | null,
  formData: FormData
): Promise<State> {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;

  if (!email || !email.includes("@")) {
    return { error: "Invalid email address" };
  }

  if (!password || password.length < 6) {
    return { error: "Password must be at least 6 characters" };
  }

  return {
    success: true,
    message: `Hello, ${firstName} ${lastName}! Thanks for registering.`,
  };
}
