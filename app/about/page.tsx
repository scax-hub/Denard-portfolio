'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Trophy, Users, Briefcase, GraduationCap } from 'lucide-react';

const metrics = [
  { icon: Briefcase, label: 'Years Experience', value: '3+' },
  { icon: Trophy, label: 'Projects Completed', value: '10+' },
  { icon: Users, label: 'Happy Clients', value: '5+' },
];

const timeline = [
  {
    year: '2023',
    role: 'Software Developer',
    company: 'none',
    description: 'Led development of enterprise-scale applications using React and Node.js.',
  },
  {
    year: '2020',
    role: 'Full Stack Developer',
    company: 'None.',
    description: 'Developed and maintained multiple web applications using modern technologies.',
  },
  {
    year: '2019',
    role: 'Frontend Developer',
    company: 'None',
    description: 'Specialized in creating responsive and interactive user interfaces.',
  },
];

export default function About() {
  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="container mx-auto max-w-4xl space-y-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 gap-8 items-center"
        >
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/assets/denard.jpg"
              alt="Denard Marasha"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
          <div className="space-y-4">
            <h1 className="text-3xl font-bold">About Me</h1>
            <p className="text-muted-foreground">
              I&apos;m a passionate software developer with 3+ years of experience in creating
              innovative digital solutions. My expertise spans across frontend and backend
              development, with a focus on creating scalable and user-friendly applications.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge>React</Badge>
              <Badge>TypeScript</Badge>
              <Badge>Node.js</Badge>
              <Badge>Next.js</Badge>
              <Badge>PHP</Badge>
              <Badge>Firebase</Badge>
            </div>
          </div>
        </motion.div>

        {/* Metrics */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-4"
        >
          {metrics.map(({ icon: Icon, label, value }) => (
            <Card key={label}>
              <CardContent className="flex flex-col items-center justify-center p-6">
                <Icon className="h-8 w-8 mb-2 text-primary" />
                <h3 className="text-2xl font-bold">{value}</h3>
                <p className="text-sm text-muted-foreground">{label}</p>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-bold">Experience</h2>
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 * index }}
                className="relative pl-8 border-l-2 border-muted pb-8 last:pb-0"
              >
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary" />
                <div className="space-y-2">
                  <span className="text-sm text-muted-foreground">{item.year}</span>
                  <h3 className="text-lg font-semibold">{item.role}</h3>
                  <p className="text-muted-foreground">{item.company}</p>
                  <p className="text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-bold">Education</h2>
          <Card>
            <CardContent className="flex items-start gap-4 p-6">
              <GraduationCap className="h-6 w-6 text-primary" />
              <div>
                <h3 className="font-semibold">High School Graduate</h3>
                <p className="text-sm text-muted-foreground">JZM High school</p>
                <p className="text-sm text-muted-foreground">2019 - 2020</p>
              </div>
            </CardContent>
            
          </Card>
          <Card>
            <CardContent className="flex items-start gap-4 p-6">
              <GraduationCap className="h-6 w-6 text-primary" />
              <div>
                <h3 className="font-semibold">Natonal Certificate IN Information Technology</h3>
                <p className="text-sm text-muted-foreground">Harare Polytechnic</p>
                <p className="text-sm text-muted-foreground">2023</p>
              </div>
            </CardContent>
            
          </Card>
        </motion.div>
      </div>
    </div>
  );
}