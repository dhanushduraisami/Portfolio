import { Linkedin, Mail, MapPin,Phone,Send } from "lucide-react";
import { cn } from "../lib/utils";
import { useState } from "react";
import { useToast } from "../hooks/use-toast";
import { Description } from "@radix-ui/react-toast";
import emailjs from 'emailjs-com';

export const ContactSection = () => {
    const {toast} = useToast();
    const [isSubmitting,setIsSubmittig] = useState(false);

        const handlePhoneCopy = () => {
            navigator.clipboard.writeText("+918056426649").then(() => {
                toast({
                    title: "Phone number copied!!!",
                    description: "+91 8056426649"
                });
            });
        };

        const handleSubmit = (e) => {
            e.preventDefault();
            setIsSubmittig(true);

            // Replace these with your actual EmailJS credentials from https://www.emailjs.com/
            emailjs.sendForm(
                'YOUR_SERVICE_ID',      // Get from EmailJS: Email Services (e.g., 'service_abc123')
                'YOUR_TEMPLATE_ID',     // Get from EmailJS: Email Templates (e.g., 'template_xyz789')
                e.target,
                'YOUR_PUBLIC_KEY'       // Get from EmailJS: Account → General (Public Key)
            ).then(() => {
                toast({
                    title: "Message sent!",
                    description: "Thank you for your message. I'll get back soon."
                });
                setIsSubmittig(false);
            }, () => {
                toast({
                    title: "Error!",
                    description: "Failed to send message. Please try again."
                });
                setIsSubmittig(false);
            });
        }

    return (
         <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-x-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get In <span> Touch</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Have a project in mind or want to collaborate? Feel free to reach out.
                    I'm always open to discussing new opportunities.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8 ">
                        <h3 className="text-2xl font-semibold mb-6">
                            Contact Information
                        </h3>

                        <div className="space-y-6 justify-center">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary"/>
                                </div>
                                <div>
                                    <h4 className="font-medium">Email</h4>
                                    <a href="https://mail.google.com/mail/?view=cm&to=dhanus6851@gmail.com" target="_blank"
                                    className="text-muted-foreground hover:text-primary transition-colors">
                                        dhanus6851@gmail.com
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone className="h-6 w-6 text-primary"/>
                                </div>
                                <div>
                                    <h4 className="font-medium"> Phone</h4>
                                    <button onClick={handlePhoneCopy}
                                    className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                                        +91 8056426649
                                    </button>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="h-6 w-6 text-primary"/>
                                </div>
                                <div>
                                    <h4 className="font-medium">Location</h4>
                                    <a href="dhanus6851@gmail.com"
                                    className="text-muted-foreground hover:text-primary transition-colors">
                                        Kamalapuram,Omalur,salem-636309
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8">
                            <h4 className="font-medium mb-4">Connect With Me</h4>
                            <div className="flex space-x-4 justify-center">
                                <a href="https://www.linkedin.com/in/dhanush-d-6b921329a/" target="_blank">
                                    <Linkedin className=""/>
                                </a>
                                {/* <a href="" target="_blank">
                                    <Leetcode className=""/>
                                </a> */}
                            </div>
                        </div>
                    </div>
                    <div className="bg-card p-8 rounded-lg shadow-xs">
                        <h3 className="text-2xl font-semibold mb-6">
                        send a Message
                        </h3>

                        <form action="" className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2"> Your Name</label>
                                <input type="text"
                                id="name"
                                name="name"
                                required
                                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden" 
                                placeholder="Dhanush..."/>
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2"> Email</label>
                                <input type="email"
                                id="email"
                                name="email"
                                required
                                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden"
                                placeholder="dhanus6851@gmail.com" />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2"> Your Message</label>
                                <textarea
                                id="message"
                                name="message"
                                required
                                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden resize-none"
                                placeholder="Can I join with u.." />
                            </div>

                            <button type="submit" 
                            disabled = {isSubmitting}
                            className={cn("cosmic-button w-full flex items-center justify-center gap-2",)}>
                               {isSubmitting?"Sending...":"Send Message"}
                                <Send size={16} />
                            </button>
                        </form>
                    </div>

                </div>
            </div>
         </section>
    );
}