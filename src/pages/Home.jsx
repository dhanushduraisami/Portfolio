import React from 'react'; // Implicitly used for JSX, though not explicitly mentioned for 'React' import on its own
import { HeroSection } from '@/components/HeroSection'; // Imports the HeroSection component [4]
import { StarBackground } from '@/components/StarBackground'; // Imports the StarBackground component [5]
import { ThemeToggle } from '@/components/ThemeToggle'; // Imports the ThemeToggle component [6]
import { Navbar } from '@/components/Navbar'; 
import { AboutSection } from '@/components/AboutSection'; // Imports the AboutSection component [8]
import { SkillsSection } from '@/components/SkillsSection'; // Imports the SkillsSection component [9]
import { ProjectsSection } from '@/components/ProjectsSection'; // Imports the ProjectsSection component [10]
// import { ContactSection } from '@/components/ContactSection'; // Imports the ContactSection component [11]
// import { Footer } from '@/components/Footer'; // Imports the Footer component [12]

// Define the Home component
export const Home = () => { // [1]
    return (
        <div
            className="min-h-screen bg-background text-foreground overflow-x-hidden" 
        >

            <ThemeToggle /> {/* [13] */}

            <StarBackground /> 

           <Navbar /> 


            <main>

                <HeroSection /> 

                <AboutSection /> 


                <SkillsSection />


                <ProjectsSection />

                {/* <ContactSection /> [11] */} 
           </main>


            {/* //<Footer /> [12] */}
        </div>
    );
};