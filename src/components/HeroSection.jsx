import { ArrowDown } from "lucide-react"

export const HeroSection = () =>{
    return (
        <section id="hero"
        className="relative min-h-screen flex flex-col items-center justify-center px-4"
        >
            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        <span style={{ animation: 'fade-in 0.7s ease-out forwards' }} className="opacity-">Hi, I'm </span>
                        <span style={{ animation: 'fade-in 0.7s ease-out 0.4s forwards' }} className="opacity- text-primary"> Dhanush </span>
                        <span style={{ animation: 'fade-in 0.7s ease-out 0.6s forwards' }} className="opacity- text-gradient ml-2">Durai Samy</span>
                    </h1>
                <p style={{ animation: 'fade-in 0.7s ease-out 0.7s forwards' }} className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-">
                    I create stellar web experiences with modern technologies.
                    Specializing in front-end development,I build interface that are both beautiful and functional 
                </p>

                <div style={{ animation: 'fade-in 0.7s ease-out 0.8s forwards' }} className="opacity-">
                    <a href="#projects" className="cosmic-button">
                        View My Work
                    </a>
                </div>
                </div>
            </div>
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                    <span className="text-sm text-muted-foreground mb-2">Scroll</span>
                    <ArrowDown className="h-5 w-5 text-primary" />

            </div>
        </section>
    )
}