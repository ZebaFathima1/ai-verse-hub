import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { cn } from "@/lib/utils";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    id: 1,
    question: "What is AI Verse 4.0?",
    answer: "AI Verse 4.0 is the fourth edition of our flagship annual event organized by the CSE (AIML) department. It's a two-day tech fest featuring workshops, hackathons, expert talks, and networking sessions focused on Artificial Intelligence and Machine Learning.",
  },
  {
    id: 2,
    question: "Who can participate in AI Verse 4.0?",
    answer: "The event is open to all students from any college or university, regardless of their branch or year of study. Whether you're a beginner curious about AI or an experienced developer, there's something for everyone!",
  },
  {
    id: 3,
    question: "What is the registration fee?",
    answer: "The registration fee is ₹499 per participant. This includes access to all sessions, workshop materials, certificate of participation, lunch, and refreshments for both days.",
  },
  {
    id: 4,
    question: "What should I bring to the event?",
    answer: "Please bring your college ID, registration confirmation (digital or printed), a laptop with necessary software for workshops, and a notebook. We'll provide Wi-Fi access and all workshop materials.",
  },
  {
    id: 5,
    question: "Are there any prerequisites for the workshops?",
    answer: "Basic programming knowledge is helpful but not mandatory. We have sessions for all skill levels. Beginner workshops will cover fundamentals, while advanced sessions assume familiarity with Python and basic ML concepts.",
  },
  {
    id: 6,
    question: "Will I receive a certificate?",
    answer: "Yes! All participants will receive a digital certificate of participation. Hackathon winners and top performers will receive special recognition certificates along with prizes.",
  },
  {
    id: 7,
    question: "Is accommodation provided?",
    answer: "Accommodation is not included in the registration fee. However, we can provide a list of nearby hotels and hostels at discounted rates. Please contact us for assistance with accommodation.",
  },
  {
    id: 8,
    question: "Can I get a refund if I can't attend?",
    answer: "Refund requests must be made at least 7 days before the event. A 50% refund will be processed. No refunds will be issued for cancellations within 7 days of the event.",
  },
];

const FAQSection = () => {
  const [openItems, setOpenItems] = useState<number[]>([1]);

  const toggleItem = (id: number) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section id="faq" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-1/3 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
          animate={{ y: [0, 30, 0], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 right-1/3 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"
          animate={{ y: [0, -30, 0], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <motion.span
              className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <HelpCircle className="w-4 h-4 inline mr-2" />
              Got Questions?
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              <span className="gradient-text">Frequently Asked Questions</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to know about AI Verse 4.0. Can't find your answer? Feel free to contact us.
            </p>
          </div>
        </ScrollReveal>

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqItems.map((item, index) => (
            <ScrollReveal key={item.id} delay={index * 0.05}>
              <motion.div
                className={cn(
                  "bg-card rounded-xl border overflow-hidden transition-all duration-300",
                  openItems.includes(item.id)
                    ? "border-primary/30 shadow-lg"
                    : "border-border hover:border-primary/20"
                )}
                layout
              >
                <motion.button
                  className="w-full flex items-center justify-between p-6 text-left hoverable"
                  onClick={() => toggleItem(item.id)}
                  whileHover={{ backgroundColor: "hsl(var(--muted) / 0.5)" }}
                >
                  <span className="font-semibold text-foreground pr-4">
                    {item.question}
                  </span>
                  <motion.div
                    className={cn(
                      "w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors",
                      openItems.includes(item.id)
                        ? "gradient-bg text-primary-foreground"
                        : "bg-muted text-muted-foreground"
                    )}
                    animate={{ rotate: openItems.includes(item.id) ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {openItems.includes(item.id) ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </motion.div>
                </motion.button>

                <AnimatePresence initial={false}>
                  {openItems.includes(item.id) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6">
                        <motion.div
                          className="h-px bg-border mb-4"
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                        <motion.p
                          className="text-muted-foreground leading-relaxed"
                          initial={{ y: -10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.1 }}
                        >
                          {item.answer}
                        </motion.p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Contact CTA */}
        <ScrollReveal delay={0.5}>
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-muted-foreground mb-4">
              Still have questions? We're here to help!
            </p>
            <motion.a
              href="mailto:cse.aiml@university.edu"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl gradient-bg text-primary-foreground font-semibold hoverable"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Contact Us
            </motion.a>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FAQSection;
