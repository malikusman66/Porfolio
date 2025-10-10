import ScrollReveal from "@/components/ui/scroll-reveal";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <p className="text-muted-foreground text-sm">
                © 2024 <span className="gradient-text font-semibold">John Doe</span>. All rights reserved.
              </p>
            </div>
            <div className="flex items-center gap-6">
              <a 
                href="#" 
                data-testid="link-privacy-policy"
                className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
              >
                Privacy Policy
              </a>
              <a 
                href="#" 
                data-testid="link-terms-of-service"
                className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
}
