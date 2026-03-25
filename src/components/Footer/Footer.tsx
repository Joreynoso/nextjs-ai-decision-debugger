import Link from "next/link";

const GithubIcon = ({ className }: { className?: string }) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className={className}
    >
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
    </svg>
);


const Footer = () => {
    return (
        <footer className="w-full px-10 py-20 border-t border-border/10">
            <div className="max-w-7xl mx-auto w-full">
                
                <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-12">
                    
                    {/* Brand & Developer Info */}
                    <div className="flex flex-col gap-4">
                        <Link href="/" className="text-2xl font-medium tracking-tighter text-foreground hover:opacity-80 transition-opacity">
                            Ai-Debugger
                        </Link>
                        <p className="max-w-xs text-sm font-medium text-muted-foreground/50 leading-relaxed">
                            Una herramienta especializada para la depuración visual y observabilidad de decisiones de agentes IA.
                        </p>
                    </div>

                    {/* Links & Socials */}
                    <div className="flex flex-col items-start md:items-end gap-6">
                        <div className="flex items-center gap-8">
                            <Link 
                                href="/stack" 
                                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                            >
                                Stack
                            </Link>
                            <Link 
                                href="/debugger" 
                                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                            >
                                Depurador
                            </Link>
                            <Link 
                                href="https://github.com/Joreynoso" 
                                target="_blank"
                                className="text-muted-foreground hover:text-primary transition-colors"
                            >
                                <GithubIcon className="h-5 w-5" />
                            </Link>
                        </div>

                        {/* Copyright */}
                        <span className="text-xs font-medium text-muted-foreground/30 uppercase tracking-widest">
                            &copy; {new Date().getFullYear()} José Reynoso. Todos los derechos reservados.
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;