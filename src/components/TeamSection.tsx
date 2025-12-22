import { motion } from "framer-motion";
import { Linkedin, Twitter, Mail } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import TiltCard from "@/components/animations/TiltCard";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  linkedin?: string;
  twitter?: string;
  email?: string;
}

const faculty: TeamMember[] = [
  {
    name: "Dr. Rajesh Kumar",
    role: "Head of Department",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    linkedin: "#",
    email: "rajesh.kumar@university.edu",
  },
  {
    name: "Dr. Priya Sharma",
    role: "Associate Professor",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=face",
    linkedin: "#",
    email: "priya.sharma@university.edu",
  },
  {
    name: "Dr. Amit Patel",
    role: "Assistant Professor",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
    linkedin: "#",
    twitter: "#",
  },
];

const coordinators: TeamMember[] = [
  {
    name: "Arjun Reddy",
    role: "Event Coordinator",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=300&h=300&fit=crop&crop=face",
    linkedin: "#",
  },
  {
    name: "Sneha Iyer",
    role: "Technical Lead",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&crop=face",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Rahul Menon",
    role: "Design Lead",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop&crop=face",
    linkedin: "#",
  },
  {
    name: "Divya Nair",
    role: "Marketing Lead",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
    linkedin: "#",
    email: "divya.nair@student.edu",
  },
];

const TeamMemberCard = ({ member, index }: { member: TeamMember; index: number }) => {
  return (
    <TiltCard className="h-full" tiltAmount={10}>
      <motion.div
        className="glass-card rounded-2xl overflow-hidden h-full bg-card/80"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
      >
        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          <motion.img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
          
          {/* Social Links Overlay */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center gap-3 bg-primary/80 opacity-0"
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {member.linkedin && (
              <motion.a
                href={member.linkedin}
                className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/30 transition-colors hoverable"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
            )}
            {member.twitter && (
              <motion.a
                href={member.twitter}
                className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/30 transition-colors hoverable"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Twitter className="w-5 h-5" />
              </motion.a>
            )}
            {member.email && (
              <motion.a
                href={`mailto:${member.email}`}
                className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/30 transition-colors hoverable"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-5 h-5" />
              </motion.a>
            )}
          </motion.div>
        </div>

        {/* Info */}
        <div className="p-5 text-center">
          <h3 className="font-display font-bold text-lg text-foreground mb-1">
            {member.name}
          </h3>
          <p className="text-sm text-muted-foreground">{member.role}</p>
        </div>
      </motion.div>
    </TiltCard>
  );
};

const TeamSection = () => {
  return (
    <section id="team" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl"
          animate={{ x: [0, 50, 0], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"
          animate={{ x: [0, -50, 0], opacity: [0.3, 0.5, 0.3] }}
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
              Our People
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              <span className="gradient-text">Meet the Team</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The brilliant minds behind our department's success and the upcoming AI Verse 4.0.
            </p>
          </div>
        </ScrollReveal>

        {/* Faculty */}
        <div className="mb-16">
          <ScrollReveal>
            <h3 className="text-2xl font-display font-bold text-center mb-8 gradient-text">
              Faculty Mentors
            </h3>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {faculty.map((member, index) => (
              <TeamMemberCard key={member.name} member={member} index={index} />
            ))}
          </div>
        </div>

        {/* Student Coordinators */}
        <div>
          <ScrollReveal>
            <h3 className="text-2xl font-display font-bold text-center mb-8 gradient-text">
              Student Coordinators
            </h3>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coordinators.map((member, index) => (
              <TeamMemberCard key={member.name} member={member} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
