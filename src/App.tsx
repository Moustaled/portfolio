import React, { useState, useEffect } from 'react';
import { Project, PROJECTS } from './data/portfolioData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectsSection } from './components/ProjectsSection';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { ExperienceSection } from './components/ExperienceSection';
import { SkillsSection } from './components/SkillsSection';
import { EducationSection } from './components/EducationSection';
import { CvSection } from './components/CvSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Check if hash matches a project slug on load
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash.startsWith('projet-')) {
        const slug = hash.replace('projet-', '');
        const found = PROJECTS.find((p) => p.slug.toLowerCase() === slug.toLowerCase());
        if (found) setSelectedProject(found);
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleOpenProject = (project: Project) => {
    setSelectedProject(project);
    window.history.pushState(null, '', `#projet-${project.slug}`);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    if (window.location.hash.startsWith('#projet-')) {
      window.history.pushState(null, '', '#projets');
    }
  };

  const scrollToCv = () => {
    const cvElem = document.getElementById('cv');
    if (cvElem) {
      cvElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FBFBF8] text-[#19231E] flex flex-col font-sans selection:bg-[#E2EDE5] selection:text-[#143823]">
      {/* Top Navigation */}
      <Navbar onOpenCvModal={scrollToCv} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenCvModal={scrollToCv} />

        {/* 4 Flagship Engineering Projects */}
        <ProjectsSection onOpenDetails={handleOpenProject} />

        {/* Experience Section (EDD) */}
        <ExperienceSection />

        {/* 3 Skill Groups + Tools */}
        <SkillsSection />

        {/* Academic Journey (ECAM-EPMI & CPGE) */}
        <EducationSection />

        {/* Integrated Clean CV */}
        <CvSection />

        {/* Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Dedicated Project Deep Dive Modal */}
      {selectedProject && (
        <ProjectDetailModal
          project={selectedProject}
          allProjects={PROJECTS}
          onClose={handleCloseModal}
          onSelectProject={handleOpenProject}
        />
      )}
    </div>
  );
}
