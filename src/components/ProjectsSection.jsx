
const projects = [
    {
        id:1,
        title:"kakasi hatake",
        desription : "The copy Ninja and the 7th Hokage of leef village",
        image :"/project/project1.png",
        tags : ["React","Tailwindcss","Supabase"],
        url : "#",
        guthub : "#"
    },
    {
        id:2,
        title:"kakasi hatake",
        desription : "The copy Ninja and the 7th Hokage of leef village",
        image :"/project/project2.jpeg",
        tags : ["React","Tailwindcss","Supabase"],
         url : "#",
        guthub : "#"
    },
    {
        id:3,
        title:"kakasi hatake",
        desription : "The copy Ninja and the 7th Hokage of leef village",
        image :"/project/project3.webg",
        tags : ["React","Tailwindcss","Supabase"],
        url : "#",
        guthub : "#"
    },
]

export const ProjectsSection = () =>{


    return(
        <section id="projects" className="px-24 py-24 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Featured <span className="text-primary">Projects</span>
                </h2>
                {/* <div>
                    {projects.map((project,key) =>(
                        <div key={key}>
                            {project}
                        </div>
                    ))}
                </div> */}
            </div>
        </section>
    )
}