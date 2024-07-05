"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

import { useState } from "react";

import { useToast } from "@/components/ui/use-toast";

type ContactFormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
  [key: string]: string | string[];
};

export default function Contact() {
  const { toast } = useToast();

  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const googleFormsEndpoint =
      "https://docs.google.com/forms/d/e/1FAIpQLSdd47DRYPNCXeMhCycRqa_svrw0qaN5vgxEvTJHyE06w_by7w/formResponse";

    try {
      const formDataEncoded = new URLSearchParams();
      Object.entries(formData).forEach(([key, value]) => {
        if (Array.isArray(value)) {
          value.forEach((option) => {
            const entryKey = `entry.${getEntryKey(key)}`;
            formDataEncoded.append(entryKey, option);
          });
        } else {
          const entryKey = `entry.${getEntryKey(key)}`;
          formDataEncoded.append(entryKey, value);
        }
      });

      await fetch(googleFormsEndpoint, {
        method: "POST",
        body: formDataEncoded,
      });

      // Reset the form data
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      // Handle success
    } catch (error) {
      // Handle submission error

      console.log("Error in submission"); // Show the pop-up
    }
  };

  const getEntryKey = (key: string) => {
    // Map the form field name to the corresponding Google Forms entry key
    const entryKeys: Record<string, string> = {
      name: "931457875",
      email: "133516482",
      subject: "1458966825",
      message: ".778862622",
      // Add more fields as needed
    };

    return entryKeys[key];
  };

  return (
    <article className="mx-auto max-w-sm space-y-6 p-8 shadow-2xl rounded-2xl">
      <header className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Contact Us</h1>
        <p className="text-gray-500 dark:text-gray-400">
          We&apos;ll get back to you as soon as possible.
        </p>
      </header>

      <form onSubmit={handleSubmit} className="space-y-4">
        <section className="space-y-2 text-left">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            value={formData.name}
            name="name"
            placeholder="Enter your name"
            onChange={handleInputChange}
            required
            type="text"
          />
        </section>
        <section className="space-y-2 text-left">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            value={formData.email}
            name="email"
            placeholder="Enter your email"
            required
            type="email"
            onChange={handleInputChange}
          />
        </section>
        <section className="space-y-2 text-left">
          <Label htmlFor="subject">Subject</Label>
          <Input
            id="subject"
            value={formData.subject}
            name="subject"
            placeholder="Enter the subject"
            onChange={handleInputChange}
            required
          />
        </section>
        <section className="space-y-2 text-left">
          <Label htmlFor="message">Message</Label>
          <Textarea
            className="min-h-[100px]"
            id="message"
            name="message"
            placeholder="Enter your message"
            value={formData.message}
            required
            onChange={handleInputChange}
          />
        </section>
        <Button className="w-full" type="submit">
          Send message
        </Button>
      </form>
    </article>
  );
}
