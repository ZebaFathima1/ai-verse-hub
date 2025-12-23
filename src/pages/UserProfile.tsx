import { useState } from "react";
import { motion } from "framer-motion";
import { User, Mail, Phone, Calendar, MapPin, Edit2, Camera, Award, Ticket, Settings, Cpu, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EditProfileDialog from "@/components/EditProfileDialog";

const UserProfile = () => {
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  
  // Demo user data
  const [user, setUser] = useState({
    name: sessionStorage.getItem("userName") || "John Doe",
    email: sessionStorage.getItem("userEmail") || "john.doe@example.com",
    phone: "+91 98765 43210",
    college: "Vaagdevi College of Engineering and Technology",
    department: "CSE (AI & ML)",
    year: "3rd Year",
    location: "Mumbai, India",
    joinedDate: "December 2024",
    bio: "Passionate about technology and innovation. Love participating in hackathons and tech events.",
    avatar: sessionStorage.getItem("userAvatar") || "",
  });

  const handleProfileUpdate = (updatedUser: typeof user) => {
    setUser(updatedUser);
    // Persist to sessionStorage
    sessionStorage.setItem("userName", updatedUser.name);
    sessionStorage.setItem("userEmail", updatedUser.email);
    sessionStorage.setItem("userAvatar", updatedUser.avatar);
    // Trigger auth change for navbar update
    window.dispatchEvent(new Event("authChange"));
  };

  const registeredEvents = [
    {
      id: 1,
      name: "AI Verse 4.0",
      date: "March 15, 2025",
      status: "Upcoming",
      ticketId: "AIV4-2025-001",
    },
    {
      id: 2,
      name: "Tech Summit 2024",
      date: "November 20, 2024",
      status: "Completed",
      ticketId: "TS-2024-156",
    },
    {
      id: 3,
      name: "Hackathon Pro",
      date: "October 5, 2024",
      status: "Completed",
      ticketId: "HP-2024-089",
    },
  ];

  const achievements = [
    { id: 1, title: "First Event", description: "Attended your first event", icon: "🎉" },
    { id: 2, title: "Tech Enthusiast", description: "Registered for 3+ events", icon: "🚀" },
    { id: 3, title: "Early Bird", description: "Registered within first 24 hours", icon: "🐦" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Profile Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative mb-8"
          >
            {/* Cover Image with College Branding */}
            <div className="h-48 md:h-64 rounded-2xl bg-gradient-to-r from-primary/40 via-accent/30 to-primary/40 relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-10 bg-cover bg-center" />
              <div className="absolute inset-0 backdrop-blur-sm" />
              
              {/* College Branding Overlay */}
              <div className="absolute top-4 left-4 md:top-6 md:left-6 flex items-center gap-3">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-primary/90 backdrop-blur-sm flex items-center justify-center shadow-lg border border-primary-foreground/20">
                  <Cpu className="w-6 h-6 md:w-7 md:h-7 text-primary-foreground" />
                </div>
                <div className="hidden sm:block">
                  <h2 className="text-sm md:text-base font-bold text-foreground drop-shadow-lg">
                    CSE (AI & ML)
                  </h2>
                  <p className="text-xs md:text-sm text-foreground/80 drop-shadow-md">
                    Vaagdevi College of Engineering & Technology
                  </p>
                </div>
              </div>

            </div>

            {/* Profile Info */}
            <div className="flex flex-col md:flex-row items-center md:items-end gap-4 -mt-16 md:-mt-20 px-4 md:px-8">
              <div className="relative">
                <Avatar className="h-32 w-32 md:h-40 md:w-40 border-4 border-background shadow-xl">
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback className="text-4xl bg-primary text-primary-foreground">
                    {user.name.split(" ").map(n => n[0]).join("")}
                  </AvatarFallback>
                </Avatar>
                <Button
                  size="icon"
                  variant="secondary"
                  className="absolute bottom-2 right-2 h-8 w-8 rounded-full"
                >
                  <Camera className="h-4 w-4" />
                </Button>
              </div>

              <div className="flex-1 text-center md:text-left mb-4">
                <h1 className="text-2xl md:text-3xl font-bold text-foreground">{user.name}</h1>
                <div className="flex items-center justify-center md:justify-start gap-2 mt-1">
                  <GraduationCap className="w-4 h-4 text-primary" />
                  <p className="text-muted-foreground font-medium">{user.college}</p>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-2 mt-0.5">
                  <Cpu className="w-3.5 h-3.5 text-primary" />
                  <p className="text-sm text-primary font-semibold">{user.department}</p>
                  <span className="text-muted-foreground">•</span>
                  <p className="text-sm text-muted-foreground">{user.year}</p>
                </div>
              </div>

              <Button 
                variant="outline" 
                className="gap-2"
                onClick={() => setIsEditDialogOpen(true)}
              >
                <Edit2 className="h-4 w-4" />
                Edit Profile
              </Button>
            </div>
          </motion.div>

          {/* Tabs Section */}
          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="events">My Events</TabsTrigger>
              <TabsTrigger value="achievements">Achievements</TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Personal Info Card */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-lg">
                        <User className="h-5 w-5 text-primary" />
                        Personal Information
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Mail className="h-4 w-4 text-muted-foreground" />
                        <span className="text-foreground">{user.email}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="h-4 w-4 text-muted-foreground" />
                        <span className="text-foreground">{user.phone}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span className="text-foreground">{user.location}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span className="text-foreground">Joined {user.joinedDate}</span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Bio Card */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-lg">
                        <Settings className="h-5 w-5 text-primary" />
                        About Me
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">{user.bio}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        <Badge variant="secondary">Tech Enthusiast</Badge>
                        <Badge variant="secondary">AI/ML</Badge>
                        <Badge variant="secondary">Web Development</Badge>
                        <Badge variant="secondary">Hackathons</Badge>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>

              {/* Quick Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-4"
              >
                {[
                  { label: "Events Attended", value: "3", icon: Ticket },
                  { label: "Upcoming Events", value: "1", icon: Calendar },
                  { label: "Achievements", value: "3", icon: Award },
                  { label: "Member Since", value: "2024", icon: User },
                ].map((stat, index) => (
                  <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/50">
                    <CardContent className="pt-6 text-center">
                      <stat.icon className="h-8 w-8 mx-auto mb-2 text-primary" />
                      <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                    </CardContent>
                  </Card>
                ))}
              </motion.div>
            </TabsContent>

            {/* Events Tab */}
            <TabsContent value="events" className="space-y-4">
              {registeredEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                    <CardContent className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-6">
                      <div className="flex items-center gap-4">
                        <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center">
                          <Ticket className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground">{event.name}</h3>
                          <p className="text-sm text-muted-foreground">{event.date}</p>
                          <p className="text-xs text-muted-foreground">Ticket: {event.ticketId}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge
                          variant={event.status === "Upcoming" ? "default" : "secondary"}
                        >
                          {event.status}
                        </Badge>
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </TabsContent>

            {/* Achievements Tab */}
            <TabsContent value="achievements" className="grid md:grid-cols-3 gap-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="bg-card/50 backdrop-blur-sm border-border/50 text-center">
                    <CardContent className="pt-6">
                      <span className="text-4xl mb-4 block">{achievement.icon}</span>
                      <h3 className="font-semibold text-foreground mb-1">{achievement.title}</h3>
                      <p className="text-sm text-muted-foreground">{achievement.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
      
      <EditProfileDialog
        open={isEditDialogOpen}
        onOpenChange={setIsEditDialogOpen}
        user={user}
        onSave={handleProfileUpdate}
      />
    </div>
  );
};

export default UserProfile;
