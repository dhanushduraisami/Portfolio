import {ExternalLink, Github, ArrowRight} from 'lucide-react'

const projects = [
    {
        id: 1,
        title: "Intelligent Sound System",
        description: `Built a speech-recognition-based system using CMU Sphinx to interpret voice commands in real-time. Configured acoustic, dictionary, and language models for accurate recognition. Automated actions such as opening web applications (Google, YouTube, LinkedIn).`,
        image: "/projects/20250822_1434_Speech Recognition Technology_simple_compose_01k38g8gxye72bb586nf0p3dwz.png",
        tags: ["Python", "CMU Sphinx", "Speech Recognition", "Automation"],
        liveUrl: "#",
        githubUrl: "https://github.com/dhanushduraisami"
    },
    {
        id: 2,
        title: "FarmSmart: Precision Agriculture App",
        description: `Developed an app integrating Soil Health Card data, real-time weather, and Leaf Color Chart method. Generated location-specific, crop-wise recommendations to optimize fertilizer and pesticide use. Helped farmers improve yield efficiency, soil health, and sustainability.`,
        image: "/projects/WhatsApp Image 2025-08-20 at 22.03.37_23e33fa2.jpg",
        tags: ["React", "API Integration", "Agriculture Tech"],
        liveUrl: "#",
        githubUrl: "https://github.com/dhanushduraisami"
    },
    {
        id: 3,
        title: "Pregnancy and Baby Care Platform",
        description: `Designed a platform providing week-by-week pregnancy guidance including nutrition and fitness tips. Platform designed to centralize prenatal care information, potentially reducing missed appointments and improving health tracking and vaccination schedules for infants.`,
        image: "/projects/5b0355b2-af1f-43bd-9f61-865725c84e55.webp",
        tags: ["React", "Healthcare", "UX Design"],
        liveUrl: "#",
        githubUrl: "https://github.com/dhanushduraisami"
    },
];

export const ProjectsSection = () => {
    return(
        <section id="projects" className="px-4 md:px-24 py-24 relative">
            <div className="container mx-auto max-w-6xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Featured <span className="text-primary">Projects</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my recent projects. Each project was carefully
                    crafted with attention to detail, performance, and user experience.
                </p>


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) =>(
                        <article 
                            key={project.id}
                            className="group bg-card rounded-lg overflow-hidden shadow-lg card-hover flex flex-col"
                        >
                            <div className="h-48 overflow-hidden bg-secondary/20">
                                <img 
                                    src={project.image} 
                                    alt={`Screenshot of ${project.title}`}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    loading="lazy"
                                />
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, index) => ( 
                                        <span 
                                            key={index}
                                            className="px-3 py-1 text-xs font-medium rounded-full bg-primary/20 text-foreground"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                                <p className="text-muted-foreground text-sm mb-6 flex-grow line-clamp-4">
                                    {project.description}
                                </p>
                                
                                <div className="flex justify-between items-center mt-auto pt-4 border-t border-border">
                                    <div className="flex space-x-3">
                                        {project.liveUrl !== "#" && (
                                            <a 
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                                aria-label={`View live demo of ${project.title}`}
                                            >
                                                <ExternalLink size={20} />
                                            </a>
                                        )}
                                        <a 
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                            aria-label={`View source code of ${project.title} on GitHub`}
                                        >
                                            <Github size={20} />
                                        </a>
                                    </div>
                                    <span className="text-xs text-muted-foreground">
                                        View Details →
                                    </span>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
                <div className='text-center mt-12'>
                    <a 
                        href="https://github.com/dhanushduraisami" 
                        className='cosmic-button w-fit flex items-center mx-auto gap-2' 
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="View all projects on GitHub"
                    >
                        View More Projects <ArrowRight size={16} aria-hidden="true" />
                    </a>

                </div>
            </div>
        </section>
    )
}