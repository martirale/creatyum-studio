"use client";

import React, { useState } from "react";
import Link from "next/link";
import { handleForm } from "../../../utils/ContactAction";

export default function ContactForm() {
  const [message, setMessage] = useState({ text: "", type: "" });
  const [acceptPrivacyPolicy, setAcceptPrivacyPolicy] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const company = formData.get("company");
    const content = formData.get("content");

    const data = {
      name,
      email,
      company,
      content,
    };

    if (!acceptPrivacyPolicy) {
      setMessage({
        text: "Debes aceptar la política de privacidad.",
        type: "error",
      });
      setTimeout(() => setMessage({ text: "", type: "" }), 3000);
      return;
    }

    const result = await handleForm(data);

    if (result) {
      setMessage({ text: "¡Correo enviado!", type: "success" });
      event.target.reset();
      setAcceptPrivacyPolicy(false);
    } else {
      setMessage({ text: "Hubo un error al enviar el correo.", type: "error" });
    }

    setTimeout(() => setMessage({ text: "", type: "" }), 3000);
  };

  return (
    <div className="flex flex-col items-center">
      {message.text && (
        <div
          className={`mb-4 p-3 w-full rounded-full font-bold text-center ${
            message.type === "success"
              ? "text-[#2F855A] bg-[#B2F5EA]"
              : "text-[#F56565] bg-[#FED7D7]"
          }`}
        >
          {message.text}
        </div>
      )}
      <form onSubmit={handleSubmit} className="flex flex-col w-full gap-4">
        <input
          type="text"
          placeholder="Nombre y apellido"
          name="name"
          maxLength="50"
          required
          className="px-5 py-3 rounded-full block bg-yellow text-black border border-black dark:bg-black dark:text-yellow dark:border-yellow"
        />
        <input
          type="email"
          placeholder="Correo electrónico"
          name="email"
          maxLength="100"
          required
          className="px-5 py-3 rounded-full block bg-yellow text-black border border-black dark:bg-black dark:text-yellow dark:border-yellow"
        />
        <input
          type="text"
          placeholder="Empresa (opcional)"
          name="company"
          maxLength="50"
          className="px-5 py-3 rounded-full block bg-yellow text-black border border-black dark:bg-black dark:text-yellow dark:border-yellow"
        />
        <textarea
          placeholder="¿En qué podemos ayudarte?"
          name="content"
          maxLength="500"
          required
          className="px-5 py-3 rounded-3xl h-32 block bg-yellow text-black border border-black dark:bg-black dark:text-yellow dark:border-yellow"
        />

        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            id="privacyPolicy"
            name="privacyPolicy"
            checked={acceptPrivacyPolicy}
            onChange={() => setAcceptPrivacyPolicy(!acceptPrivacyPolicy)}
            className="mr-2"
            required
          />
          <label htmlFor="privacyPolicy" className="text-sm">
            Acepto la{" "}
            <Link
              href="/privacidad"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              política de privacidad
            </Link>
            .
          </label>
        </div>

        <button className="px-5 py-3 rounded-full font-BricolageGrotesque font-bold text-2xl uppercase bg-black text-yellow border border-black hover:bg-yellow hover:text-black dark:bg-yellow dark:text-black dark:border-yellow dark:hover:bg-black dark:hover:text-yellow">
          Enviar
        </button>
      </form>
    </div>
  );
}
