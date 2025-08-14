import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Github, Linkedin, Mail } from "lucide-react";
import emailjs from "@emailjs/browser";
import { EMAIL_PUBLIC_KEY, EMAIL_SERVICE_ID, EMAIL_TEMPLATE_ID } from "@/config/email";

const Contact = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const from_name = String(data.get("name") || "");
    const reply_to = String(data.get("email") || "");
    const message = String(data.get("message") || "");

    if (!from_name || !reply_to || !message) {
      toast({ title: "Missing fields", description: "Please fill in all fields." });
      return;
    }

    if (!EMAIL_PUBLIC_KEY || !EMAIL_SERVICE_ID || !EMAIL_TEMPLATE_ID || EMAIL_PUBLIC_KEY.includes("YOUR_") ) {
      toast({ title: "Email not configured", description: "Set your EmailJS keys in src/config/email.ts" });
      return;
    }

    try {
      setLoading(true);
      await emailjs.send(EMAIL_SERVICE_ID, EMAIL_TEMPLATE_ID, { from_name, reply_to, message }, {
        publicKey: EMAIL_PUBLIC_KEY,
      });
      toast({ title: "Message sent!", description: "Thanks for reaching out. I'll get back to you soon." });
      form.reset();
    } catch (e) {
      console.error(e);
      toast({ title: "Failed to send", description: "Please try again later." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold mb-4 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">Contact Me</h2>
            <p className="text-muted-foreground mb-6">Have a project in mind or want to collaborate? Drop a message.</p>
            <form onSubmit={onSubmit} className="space-y-4 glass rounded-xl p-6">
              <Input name="name" placeholder="Your name" aria-label="Name" />
              <Input type="email" name="email" placeholder="Your email" aria-label="Email" />
              <Textarea name="message" placeholder="Your message" aria-label="Message" rows={5} />
              <Button type="submit" variant="glow" className="w-full" disabled={loading}>
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
          <div className="relative">
            <div className="absolute inset-0 -z-10" style={{ background: "radial-gradient(600px 300px at 20% 0%, hsl(var(--accent)/0.15), transparent)" }} />
            <div className="glass rounded-xl p-6">
              <h3 className="text-lg font-medium mb-3">Connect</h3>
              <div className="flex items-center gap-4">
                <a href="#" aria-label="Email" className="story-link"><Mail /></a>
                <a href="#" aria-label="GitHub" className="story-link"><Github /></a>
                <a href="#" aria-label="LinkedIn" className="story-link"><Linkedin /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
