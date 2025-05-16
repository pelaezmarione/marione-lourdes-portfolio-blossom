
import { useState } from "react";
import HeroSection from "@/components/home/HeroSection";
import PhotoGallery from "@/components/home/PhotoGallery";
import AboutSection from "@/components/home/AboutSection";
import BackgroundHearts from "@/components/home/BackgroundHearts";
import { Instagram, Facebook, Twitter } from "lucide-react";

const Home = () => {
  // Social media links
  const socialLinks = [
    { name: "Instagram", icon: Instagram, url: "https://instagram.com", color: "bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500" },
    { name: "Facebook", icon: Facebook, url: "https://facebook.com", color: "bg-blue-600" },
    { name: "Twitter", icon: Twitter, url: "https://twitter.com", color: "bg-sky-500" }
  ];

  // Sample me pics gallery
  const mePicsGallery = [
    { id: 1, title: "Photo 1", image: "https://images.unsplash.com/photo-1517778022307-4800c34ab5a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJldHR5JTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" },
    { id: 2, title: "Photo 2", image: "https://images.unsplash.com/photo-1600600423621-70c9f4416ae9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2VsZmllfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" },
    { id: 3, title: "Photo 3", image: "https://images.unsplash.com/photo-1504257365157-1496a50d48f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNlbGZpZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" },
    { id: 4, title: "Photo 4", image: "https://images.unsplash.com/photo-1581467655410-0c2bf55d9d6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNlbGZpZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" },
  ];

  return (
    <div className="container mx-auto px-4 py-20 min-h-screen relative">
      {/* Background with hearts */}
      <BackgroundHearts />

      <div className="pt-16">
        {/* Hero Section */}
        <HeroSection socialLinks={socialLinks} />

        {/* Me Pics Gallery Section */}
        <PhotoGallery title="Me Pics" gallery={mePicsGallery} />

        {/* About Section */}
        <AboutSection />
      </div>
    </div>
  );
};

export default Home;
