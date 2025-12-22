import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { ArrowLeft, CreditCard, Smartphone, Building2, Shield, Lock, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

type PaymentMethod = "upi" | "card" | "netbanking";

const Payment = () => {
  const navigate = useNavigate();
  const [selectedMethod, setSelectedMethod] = useState<PaymentMethod>("upi");
  const [isProcessing, setIsProcessing] = useState(false);
  const [registrationData, setRegistrationData] = useState<any>(null);

  useEffect(() => {
    const data = sessionStorage.getItem("registrationData");
    if (!data) {
      toast.error("Please complete registration first");
      navigate("/register");
      return;
    }
    setRegistrationData(JSON.parse(data));
  }, [navigate]);

  const paymentMethods = [
    { id: "upi" as PaymentMethod, name: "UPI", icon: Smartphone, description: "Pay using any UPI app" },
    { id: "card" as PaymentMethod, name: "Card", icon: CreditCard, description: "Credit or Debit card" },
    { id: "netbanking" as PaymentMethod, name: "Net Banking", icon: Building2, description: "All major banks" },
  ];

  const handlePayment = async () => {
    setIsProcessing(true);
    
    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    // Generate registration ID
    const registrationId = `AIVERSE4-${Date.now().toString(36).toUpperCase()}`;
    
    // Store success data
    sessionStorage.setItem("paymentSuccess", JSON.stringify({
      registrationId,
      amount: 499,
      method: selectedMethod,
      timestamp: new Date().toISOString(),
    }));
    
    toast.success("Payment successful!");
    navigate("/payment-success");
    setIsProcessing(false);
  };

  if (!registrationData) return null;

  return (
    <>
      <Helmet>
        <title>Payment | AI Verse 4.0 | CSE (AML)</title>
        <meta name="description" content="Complete your payment for AI Verse 4.0 registration." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            {/* Back Link */}
            <Link to="/register" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" />
              Back to Registration
            </Link>

            <div className="max-w-4xl mx-auto">
              <div className="grid lg:grid-cols-5 gap-8">
                {/* Payment Options */}
                <div className="lg:col-span-3">
                  <div className="bg-card rounded-2xl shadow-elevated p-8">
                    <h1 className="text-2xl font-display font-bold mb-6">
                      <span className="gradient-text">Select Payment Method</span>
                    </h1>

                    {/* Payment Methods */}
                    <div className="space-y-4 mb-8">
                      {paymentMethods.map((method) => (
                        <button
                          key={method.id}
                          onClick={() => setSelectedMethod(method.id)}
                          className={cn(
                            "w-full flex items-center gap-4 p-4 rounded-xl border-2 transition-all duration-300",
                            selectedMethod === method.id
                              ? "border-primary bg-primary/5"
                              : "border-border hover:border-primary/50"
                          )}
                        >
                          <div className={cn(
                            "w-12 h-12 rounded-xl flex items-center justify-center transition-colors",
                            selectedMethod === method.id
                              ? "gradient-bg text-primary-foreground"
                              : "bg-muted text-muted-foreground"
                          )}>
                            <method.icon className="w-6 h-6" />
                          </div>
                          <div className="text-left flex-1">
                            <h3 className="font-semibold text-foreground">{method.name}</h3>
                            <p className="text-sm text-muted-foreground">{method.description}</p>
                          </div>
                          <div className={cn(
                            "w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all",
                            selectedMethod === method.id
                              ? "border-primary bg-primary"
                              : "border-border"
                          )}>
                            {selectedMethod === method.id && (
                              <div className="w-2 h-2 rounded-full bg-primary-foreground" />
                            )}
                          </div>
                        </button>
                      ))}
                    </div>

                    {/* Security Notice */}
                    <div className="flex items-center gap-3 p-4 rounded-xl bg-secondary/10 border border-secondary/20">
                      <Shield className="w-5 h-5 text-secondary" />
                      <p className="text-sm text-muted-foreground">
                        Your payment is secured with 256-bit SSL encryption
                      </p>
                    </div>

                    {/* Pay Button */}
                    <Button
                      variant="gradient"
                      size="xl"
                      className="w-full mt-8 group"
                      onClick={handlePayment}
                      disabled={isProcessing}
                    >
                      {isProcessing ? (
                        <>
                          <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                          Processing Payment...
                        </>
                      ) : (
                        <>
                          <Lock className="w-5 h-5" />
                          Pay ₹499 Securely
                        </>
                      )}
                    </Button>
                  </div>
                </div>

                {/* Order Summary */}
                <div className="lg:col-span-2">
                  <div className="bg-card rounded-2xl shadow-elevated p-6 sticky top-24">
                    <h2 className="font-display font-bold text-lg mb-4">Order Summary</h2>
                    
                    {/* Event Details */}
                    <div className="pb-4 border-b border-border">
                      <h3 className="font-semibold gradient-text">AI Verse 4.0</h3>
                      <p className="text-sm text-muted-foreground">March 15-16, 2025</p>
                    </div>

                    {/* Registrant Info */}
                    <div className="py-4 border-b border-border space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Name</span>
                        <span className="font-medium">{registrationData.fullName}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Email</span>
                        <span className="font-medium truncate max-w-[150px]">{registrationData.email}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">College</span>
                        <span className="font-medium truncate max-w-[150px]">{registrationData.collegeName}</span>
                      </div>
                    </div>

                    {/* Pricing */}
                    <div className="py-4 border-b border-border space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Registration Fee</span>
                        <span>₹499</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Processing Fee</span>
                        <span>₹0</span>
                      </div>
                    </div>

                    {/* Total */}
                    <div className="pt-4 flex justify-between items-center">
                      <span className="font-semibold">Total Amount</span>
                      <span className="text-2xl font-display font-bold gradient-text">₹499</span>
                    </div>

                    {/* Features */}
                    <div className="mt-6 space-y-2">
                      {[
                        "2-day full access pass",
                        "Workshop materials included",
                        "Certificate of participation",
                        "Lunch & refreshments",
                      ].map((feature, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-secondary" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Payment;
