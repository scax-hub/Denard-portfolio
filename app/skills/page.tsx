'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Progress } from '@/components/ui/progress';

const skills = {
  frontend: [
    { name: 'React', level: 75, experience: '2 years' },
    { name: 'TypeScript', level: 70, experience: '2 years' },
    { name: 'Next.js', level: 65, experience: '2 years' },
    { name: 'CSS/Sass', level: 90, experience: '5 years' },
    { name: 'Tailwind CSS', level: 95, experience: '2 years' },
  ],
  backend: [
    { name: 'Node.js', level: 55, experience: '3 years' },
    { name: 'PostgreSQL', level: 65, experience: '5 years' },
    { name: 'MongoDB', level: 40, experience: '4 years' },
  ],
  devops: [
    { name: 'Docker', level: 56, experience: '2 years' },
    { name: 'Linux', level: 46, experience: '1 years' },
    { name: 'Git', level: 72, experience: '7 years' },
  ],
};

const SkillCategory = ({ title, skills, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
  >
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {skills.map((skill, index) => (
          <TooltipProvider key={skill.name}>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>{skill.experience} of experience</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </CardContent>
    </Card>
  </motion.div>
);

export default function Skills() {
  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="container mx-auto max-w-4xl space-y-12">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">Skills & Expertise</h1>
          <p className="text-muted-foreground">
            A comprehensive overview of my technical skills and expertise levels in various
            technologies and tools.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SkillCategory title="Frontend Development" skills={skills.frontend} delay={0.2} />
          <SkillCategory title="Backend Development" skills={skills.backend} delay={0.4} />
          <SkillCategory title="DevOps & Infrastructure" skills={skills.devops} delay={0.6} />
        </div>
      </div>
    </div>
  );
}