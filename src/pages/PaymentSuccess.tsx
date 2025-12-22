import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate, Link } from "react-router-dom";
import { CheckCircle, Calendar, MapPin, Download, Mail, Home, Copy, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const PaymentSuccess = () => {
  const navigate = useNavigate();
  const [paymentData, setPaymentData] = useState<any>(null);
  const [registrationData, setRegistrationData] = useState<any>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const payment = sessionStorage.getItem("paymentSuccess");
    const registration = sessionStorage.getItem("registrationData");
    
    if (!payment || !registration) {
      navigate("/");
      return;
    }
    
    setPaymentData(JSON.parse(payment));
    setRegistrationData(JSON.parse(registration));
  }, [navigate]);

  const copyRegistrationId = () => {
    if (paymentData?.registrationId) {
      navigator.clipboard.writeText(paymentData.registrationId);
      setCopied(true);
      toast.success("Registration ID copied!");
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (!paymentData || !registrationData) return null;

  return (
    <>
      <Helmet>
        <title>Registration Successful | AI Verse 4.0 | CSE (AML)</title>
        <meta name="description" content="Your registration for AI Verse 4.0 has been confirmed." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              {/* Success Animation */}
              <div className="mb-8">
                <div className="w-24 h-24 rounded-full gradient-bg mx-auto flex items-center justify-center shadow-glow animate-scale-in">
                  <CheckCircle className="w-12 h-12 text-primary-foreground" />
                </div>
              </div>

              {/* Success Message */}
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 animate-fade-in">
                <span className="gradient-text">Registration Successful!</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
                Thank you for registering for AI Verse 4.0. We're excited to have you!
              </p>

              {/* Registration Card */}
              <div className="bg-card rounded-2xl shadow-elevated p-8 mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                {/* Registration ID */}
                <div className="bg-muted/50 rounded-xl p-6 mb-6">
                  <p className="text-sm text-muted-foreground mb-2">Your Registration ID</p>
                  <div className="flex items-center justify-center gap-3">
                    <span className="text-2xl md:text-3xl font-display font-bold gradient-text tracking-wider">
                      {paymentData.registrationId}
                    </span>
                    <button
                      onClick={copyRegistrationId}
                      className="p-2 rounded-lg hover:bg-muted transition-colors"
                    >
                      {copied ? (
                        <Check className="w-5 h-5 text-secondary" />
                      ) : (
                        <Copy className="w-5 h-5 text-muted-foreground" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Attendee Details */}
                <div className="grid md:grid-cols-2 gap-4 text-left mb-6">
                  <div>
                    <p className="text-sm text-muted-foreground">Name</p>
                    <p className="font-semibold">{registrationData.fullName}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-semibold">{registrationData.email}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">College</p>
                    <p className="font-semibold">{registrationData.collegeName}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Amount Paid</p>
                    <p className="font-semibold text-secondary">₹{paymentData.amount}</p>
                  </div>
                </div>

                {/* Event Details */}
                <div className="border-t border-border pt-6">
                  <h3 className="font-display font-bold text-lg mb-4 gradient-text">Event Details</h3>
                  <div className="flex flex-col md:flex-row justify-center gap-6">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="w-5 h-5 text-primary" />
                      <span>March 15-16, 2025</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="w-5 h-5 text-primary" />
                      <span>CSE Department Auditorium</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Info Note */}
              <div className="flex items-start gap-3 p-4 rounded-xl bg-secondary/10 border border-secondary/20 mb-8 text-left animate-fade-in" style={{ animationDelay: "0.3s" }}>
                <Mail className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground">
                  A confirmation email has been sent to <span className="font-semibold text-foreground">{registrationData.email}</span> with your ticket and event details.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
                <Button variant="gradient" size="lg" className="gap-2">
                  <Download className="w-5 h-5" />
                  Download Ticket
                </Button>
                <Link to="/">
                  <Button variant="outline" size="lg" className="gap-2 w-full sm:w-auto">
                    <Home className="w-5 h-5" />
                    Back to Home
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default PaymentSuccess;
