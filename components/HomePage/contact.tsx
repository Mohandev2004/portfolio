"use client";
import React, { useState } from "react";
import { toast } from "sonner";
import { Info, Loader2 } from "lucide-react";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiPeerlist } from "react-icons/si";
import { Container } from "../container";

export default function ConatctPage() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState({
    fullName: false,
    email: false,
    message: false,
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = {
      fullName: form.fullName.trim() === "",
      email: form.email.trim() === "",
      message: form.message.trim() === "",
    };

    setError(newErrors);

    if (Object.values(newErrors).some(Boolean)) return;

    try {
      setIsLoading(true);
      const json = JSON.stringify({
        name: form.fullName,
        email: form.email,
        message: form.message,
        access_key: process.env.NEXT_PUBLIC_WEB3_ACCESS_KEY,
      });
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });
      const result = await response.json();
      if (result.success) {
        toast.success("Sent successfully. Thanks for your message", { position: "top-center" });
      } else {
        console.log(result);
        toast.error(`${result.message}`, {
          position: "top-center",
        });
      }
    } catch (error) {
      console.log(error, "in catch");
      toast.error(
        "Something went wrong while sending the message, please try again.",
        { position: "top-center" }
      );
    } finally {
      setIsLoading(false);
      setForm({ fullName: "", email: "", message: "" });
    }
  };
  return (


      <div className=" overflow-x-hidden overflow-y-auto scroll-smooth hide-scrollbar py-10">
        <div className="w-full pt-6"></div>

        <div className="w-full h-fit">
          <div className="w-4xl px-4 mx-auto ">
            {/* Heading */}
            <h1 className="text-4xl leading-0 tracking-tight font-semibold">
              Contact Me
            </h1>
          </div>
        </div>
        <div className="w-full h-fit">
          <div className="md:w-3xl h-full mx-auto">
            <form
              onSubmit={handleSubmit}
              className="md:w-3xl mx-auto">
              <div className=" flex justify-center items-center py-6">
                <div className="h-full w-6" />

                <div className="md:w-1/2 w-full px-4 py-4 space-y-3">
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={form.fullName}
                      disabled={isLoading}
                      onChange={handleChange}
                      className="w-full rounded-md border-zinc-500 px-3 py-2 bg-neutral-50 bg-neutral-900 "
                      placeholder="John"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      disabled={isLoading}
                      onChange={handleChange}
                      className="w-full rounded-md border-zinc-500 px-3 py-2 bg-neutral-50 bg-neutral-900 "
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
              </div>

              <div className="px-4 md:w-1/2 w-full mx-auto md:mr-45">
                <label className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  disabled={isLoading}
                  onChange={handleChange}
                  rows={5}
                  className="w-full rounded-md border-zinc-500 px-3 py-2 bg-neutral-50 bg-neutral-900 "
                  placeholder="What do you want to ask..?"
                />
              </div>
              {!!(error.email || error.message || error.fullName) && (
                <div className="w-1/2 my-2 flex items-center mx-auto ">
                  <p className="text-sm font-light flex justify-center items-center gap-1 text-red-400 capitalize ml-1 ">
                    <Info size={16} /> Please fill all the above fields
                  </p>
                </div>
              )}

              <div className="flex justify-center py-6">
                <button
                  type="submit"
                  className="px-6 py-2 cursor-pointer rounded-md outline bg-transparent hover:bg-neutral-100/50 transition-colors ease-linear hover:bg-neutral-900 text-black text-white shadow-neutral-800 hover:shadow-inner font-medium"
                >
                  {isLoading ? (
                    <Loader2 className=" animate-spin " />
                  ) : (
                    "Send Message"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
  );
}