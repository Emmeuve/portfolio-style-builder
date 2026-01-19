import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay,
      ease: "easeOut" as const,
    },
  }),
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const fadeInItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent",
      description: "We'll get back to you as soon as possible.",
    });
    
    setFormData({ name: "", email: "", company: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-background/80 backdrop-blur-sm"
      >
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 text-xs uppercase tracking-wider hover:text-muted-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Link>
          <p className="text-xs uppercase tracking-wider font-bold">Contact</p>
          <div className="w-16" />
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="pt-32 pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Hero */}
          <motion.div 
            className="mb-24"
            initial="hidden"
            animate="visible"
          >
            <motion.h1 
              className="font-serif text-6xl md:text-8xl lg:text-9xl italic mb-8"
              variants={fadeInUp}
              custom={0.2}
            >
              Let's work
              <br />
              together
            </motion.h1>
            <motion.p 
              className="text-muted-foreground text-lg max-w-xl"
              variants={fadeInUp}
              custom={0.4}
            >
              Have a project in mind? We'd love to hear about it. Drop us a line
              and let's create something extraordinary.
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-24">
            {/* Contact Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <form onSubmit={handleSubmit} className="space-y-8">
                <motion.div className="space-y-2" variants={fadeInItem}>
                  <label className="text-xs uppercase tracking-wider text-muted-foreground">
                    Name *
                  </label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-transparent border-0 border-b border-border rounded-none px-0 focus-visible:ring-0 focus-visible:border-foreground transition-colors duration-300"
                    placeholder="Your name"
                  />
                </motion.div>

                <motion.div className="space-y-2" variants={fadeInItem}>
                  <label className="text-xs uppercase tracking-wider text-muted-foreground">
                    Email *
                  </label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-transparent border-0 border-b border-border rounded-none px-0 focus-visible:ring-0 focus-visible:border-foreground transition-colors duration-300"
                    placeholder="your@email.com"
                  />
                </motion.div>

                <motion.div className="space-y-2" variants={fadeInItem}>
                  <label className="text-xs uppercase tracking-wider text-muted-foreground">
                    Company
                  </label>
                  <Input
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="bg-transparent border-0 border-b border-border rounded-none px-0 focus-visible:ring-0 focus-visible:border-foreground transition-colors duration-300"
                    placeholder="Your company"
                  />
                </motion.div>

                <motion.div className="space-y-2" variants={fadeInItem}>
                  <label className="text-xs uppercase tracking-wider text-muted-foreground">
                    Message *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="bg-transparent border-0 border-b border-border rounded-none px-0 focus-visible:ring-0 focus-visible:border-foreground resize-none transition-colors duration-300"
                    placeholder="Tell us about your project..."
                  />
                </motion.div>

                <motion.div variants={fadeInItem}>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full md:w-auto px-12 py-6 text-xs uppercase tracking-wider transition-all duration-300 hover:scale-105"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 w-4 h-4" />
                      </>
                    )}
                  </Button>
                </motion.div>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div 
              className="space-y-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInItem}>
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-4">
                  Email
                </p>
                <a
                  href="mailto:hello@studioname.com"
                  className="text-2xl md:text-3xl hover:text-muted-foreground transition-colors duration-300"
                >
                  hello@studioname.com
                </a>
              </motion.div>

              <motion.div variants={fadeInItem}>
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-4">
                  Phone
                </p>
                <a
                  href="tel:+1234567890"
                  className="text-2xl md:text-3xl hover:text-muted-foreground transition-colors duration-300"
                >
                  +1 (234) 567-890
                </a>
              </motion.div>

              <motion.div variants={fadeInItem}>
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-4">
                  Location
                </p>
                <p className="text-2xl md:text-3xl">
                  Buenos Aires, Argentina
                </p>
              </motion.div>

              <motion.div variants={fadeInItem}>
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-4">
                  Social
                </p>
                <div className="flex gap-6 text-lg">
                  <motion.a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-muted-foreground transition-colors duration-300"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    Instagram
                  </motion.a>
                  <motion.a
                    href="https://behance.net"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-muted-foreground transition-colors duration-300"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    Behance
                  </motion.a>
                  <motion.a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-muted-foreground transition-colors duration-300"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    LinkedIn
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
