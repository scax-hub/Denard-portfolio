'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, Globe } from 'lucide-react';

const projects = [
  {
    title: 'Demo-Business Website',
    description: 'A full-featured Business Website platform built with React and Tailwind.',
    image: '/assets/dimetech.png',
    tags: ['Next.js', 'TypeScript', 'Stripe', 'Tailwind CSS'],
    liveUrl: 'https://dimetech.netlify.app',
    githubUrl: 'https://github.com/dime-hub/dimetech-website',
    category: 'Frontend',
  },
  {
    title: 'Sheddr-App',
    description: 'A collaborative task management application with real-time updates.',
    image: '/assets/user-sheddr.png',
    tags: ['React', 'Tailwind', 'Firebase Firestore'],
    liveUrl: 'https:/user-sheddr.netlify.app',
    githubUrl: 'https://github.com/scax-hub/sheddr-user',
    category: 'fullstack',
  },
  {
    title: ' My Portfolio Website',
    description: 'A modern Profesional Portfolio website built with Next.js and Framer Motion.',
    image: '/assets/portifolio.png',
    tags: ['Next.js', 'Framer Motion', 'Tailwind CSS'],
    liveUrl: 'https://Denard-Portifolio.netlify.app',
    githubUrl: 'https://github.com',
    category: 'frontend',
  },
  {
    title: 'Dopiro-Products Website',
    description: 'A modern Proffesional  Fruit Product Website fot .',
    image: '/assets/dopiro.png',
    tags: ['React.js', 'Tailwind CSS', 'Typescript'],
    liveUrl: 'https://dopiro.netlify.app',
    githubUrl: 'https://github.com/dime-hub/dopiro',
    category: 'frontend',
  },
 
];

const categories = [
  { label: 'All', value: 'all' },
  { label: 'Frontend', value: 'frontend' },
  { label: 'Full Stack', value: 'fullstack' },
  { label: 'Backend', value: 'backend' },
];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProjects = projects.filter(
    (project) => selectedCategory === 'all' || project.category === selectedCategory
  );

  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="container mx-auto max-w-6xl space-y-12">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">Projects</h1>
          <p className="text-muted-foreground">
            A selection of my recent work and personal projects.
          </p>
        </div>

        <div className="flex gap-2 flex-wrap">
          {categories.map((category) => (
            <Button
              key={category.value}
              variant={selectedCategory === category.value ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(category.value)}
              className="capitalize"
            >
              {category.label}
            </Button>
          ))}
        </div>

        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col">
                <div className="relative h-48">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="gap-2">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <Globe className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}