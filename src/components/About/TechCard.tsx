import { motion } from 'framer-motion'
import { cn } from "@/lib/utils"

// TechCard — card de tecnología para la página About

type TechCardProps = {
    name: string
    description: string
    icon: React.ReactNode
}

export default function TechCard({ name, description, icon }: TechCardProps) {

    // render return
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className={cn(
                "group relative flex flex-col items-center text-center p-8 rounded-2xl border border-border/25 transition-all duration-500",
                "bg-card/40 backdrop-blur-md hover:border-primary/30 hover:bg-secondary/20 hover:shadow-2xl"
            )}
        >
            {/* icon — aligned with CardsHome aesthetics */}
            <div className="mb-6 p-4 rounded-xl bg-primary/5 text-primary/60 transition-all duration-500 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110">
                <div className="w-6 h-6 flex items-center justify-center">
                    {icon}
                </div>
            </div>

            {/* name — serif font with medium weight */}
            <h3 className="font-serif text-xl font-medium mb-3 tracking-tight text-foreground">
                {name}
            </h3>

            {/* description — sans font, low contrast for premium feel */}
            <p className="text-base font-medium text-muted-foreground/40 leading-relaxed max-w-sm transition-colors group-hover:text-muted-foreground/60">
                {description}
            </p>
        </motion.div>
    )
}