import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  MapPin,
} from "lucide-react";
import { toast } from "sonner";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      !form.name.trim() ||
      !form.email.trim() ||
      !form.message.trim()
    ) {
      toast.error(
        "Please fill in all the fields."
      );
      return;
    }

    toast.success(
      "Thanks! Your message is ready to be sent."
    );

    setForm({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section
      id="contact"
      className="section-padding"
    >
      <div className="container-custom">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something together."
          description="Have an opportunity, project or idea? I'd love to hear from you."
        />

        <div className="grid gap-6 lg:grid-cols-[0.7fr_1.3fr]">
          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-3xl p-7 sm:p-9"
          >
            <h3 className="text-xl font-bold text-white">
              Get in touch
            </h3>

            <p className="mt-4 leading-7 text-zinc-400">
              I'm open to software development
              opportunities, collaborations and
              interesting projects.
            </p>

            <div className="mt-8 space-y-5">
              <a
                href="mailto:your-email@example.com"
                className="flex items-center gap-4 text-zinc-400 transition-colors hover:text-white"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5">
                  <Mail size={18} />
                </div>

                <span>
                  your-email@example.com
                </span>
              </a>

              <div className="flex items-center gap-4 text-zinc-400">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5">
                  <MapPin size={18} />
                </div>

                <span>Bhilai, Chhattisgarh, India</span>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{
              opacity: 0,
              x: 30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="glass rounded-3xl p-7 sm:p-9"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-zinc-300"
                >
                  Name
                </label>

                <Input
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="h-12 border-white/10 bg-white/5 text-white placeholder:text-zinc-600"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-zinc-300"
                >
                  Email
                </label>

                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="h-12 border-white/10 bg-white/5 text-white placeholder:text-zinc-600"
                />
              </div>
            </div>

            <div className="mt-5">
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-zinc-300"
              >
                Message
              </label>

              <Textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                rows={7}
                className="resize-none border-white/10 bg-white/5 text-white placeholder:text-zinc-600"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="mt-5 rounded-full bg-white px-7 text-black hover:bg-zinc-200"
            >
              Send Message
              <ArrowUpRight size={18} />
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default Contact;