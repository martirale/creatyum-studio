"use server";

import { sendEmail } from "../lib/brevo";
import { redirect } from "next/navigation";

export async function handleForm(formData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const company = formData.get("company");
  const content = formData.get("content");

  if (!name || !email || !content) {
    return console.log("Por favor, llena todos los campos necesarios");
  }

  const emailContent = `
    <p><strong>Nombre:</strong> ${name}<br>
    <strong>Email:</strong> ${email}<br>
    <strong>Compañía:</strong> ${company || "No especificado"}</p>
    <p><strong>Mensaje:</strong><br>${content}</p>
  `;

  await sendEmail({
    to: [
      {
        email: "studio@creatyum.com",
        name: "Creatyum Studio",
      },
    ],
    htmlContent: emailContent,
    sender: {
      name: name,
      email: email,
    },
  });

  redirect("/");
}
