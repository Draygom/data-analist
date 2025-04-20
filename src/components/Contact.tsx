import { FormEvent, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";

import { FaSpinner } from "react-icons/fa";
import { HiCheckCircle } from "react-icons/hi2";

export function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const { t } = useTranslation();

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!form.current) return;

    setLoading(true);

    emailjs
      .sendForm(
        "service_wyoc981",
        "template_b8a8cst",
        form.current,
        "t_cEoKvCkuUjJ8Eyc"
      )
      .then(
        () => {
          setSuccess(true);
          setLoading(false);
        },
        (e) => {
          setError(true);
          setLoading(false);
          console.error(e);
        }
      );
  };

  // const contacts = [
  //   {
  //     name: "WhatsApp",
  //     description: "+55 73 9.930-7280",
  //     link: "https://wa.me/5512982041640?text=Olá...",
  //     icon: <FaWhatsapp className="h-10 w-10" />,
  //   },
  //   {
  //     name: "Email",
  //     description: "joao-test@testemail.com",
  //     link: "mailto:joao-test@testemail.com?subject=Olá...",
  //     icon: <HiOutlineEnvelope className="h-10 w-10" />,
  //   },
  //   {
  //     name: "São José dos Campos",
  //     description: "Centro, 123",
  //     link: "https://goo.gl/maps/4yacADQtLB8jz8zn9?coh=178573&entry=tt",
  //     icon: <HiOutlineMapPin className="h-10 w-10" />,
  //   },
  // ];

  return (
    <section id="contact" className="dashboard-bg bg-gradient-to-r text-white">
      <div className="container mx-auto max-w-4xl p-4 py-8">
        <div className="mb-6">
          <h2 className="z-50 mb-2 text-gradient">
            <span className="mr-2 font-headline text-3xl font-semibold">
              {t("contact.title-1")}
            </span>
            <span className="font-handwriting text-5xl">
              {t("contact.title-2")}
            </span>
          </h2>
          <p className="text-sm text-gray-800">{t("contact.copy")}</p>
        </div>

        <div className="flex flex-col gap-6 md:flex-row">
          <div className="basis-2/3">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="section-card bg-white/80 text-gray-900"
            >
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="mb-2 block ps-4 font-headline font-semibold"
                >
                  {t("contact.message")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="h-36 w-full rounded-lg border-2 border-blue-200 bg-white p-2 outline-none shadow focus:border-blue-500 focus:shadow-lg transition"
                  required
                />
              </div>

              <div className="mb-6 flex flex-col gap-4 md:flex-row">
                <div className="flex-grow">
                  <label
                    htmlFor="fullName"
                    className="mb-2 block ps-4 font-headline font-semibold"
                  >
                    {t("contact.name")}
                  </label>
                  <input
                    className="w-full rounded-lg border-2 border-blue-200 bg-white p-2 outline-none shadow focus:border-blue-500 focus:shadow-lg transition"
                    type="text"
                    name="fullName"
                    id="fullName"
                    required
                  />
                </div>
                <div className="flex-grow">
                  <label
                    htmlFor="email"
                    className="mb-2 block ps-4 font-headline font-semibold"
                  >
                    {t("contact.email")}
                  </label>
                  <input
                    className="w-full rounded-lg border-2 border-blue-200 bg-white p-2 outline-none shadow focus:border-blue-500 focus:shadow-lg transition"
                    type="email"
                    name="email"
                    id="email"
                    required
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="button flex items-center gap-2 text-blue-500"
                  disabled={loading}
                >
                  {loading && <FaSpinner className="h-4 w-4 animate-spin" />}
                  {success && <HiCheckCircle className="h-4 w-4" />}
                  {t("contact.button")}
                </button>

                {error && <p className="mt-2>">{t("contact.error")}</p>}
              </div>
            </form>
          </div>

          {/* <div className="basis-1/3">
            {contacts.map((contact, index) => (
              <div
                key={`contact-${index}`}
                className="mb-4 flex items-center gap-4 rounded-lg border border-dashed border-gray-400 p-4"
              >
                {contact.icon}
                <div>
                  <p className="font-headline font-semibold">{contact.name}</p>
                  <a
                    href={contact.link}
                    target="_blank"
                    className="text-gray-300 underline underline-offset-2"
                  >
                    {contact.description}
                  </a>
                </div>
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
}
