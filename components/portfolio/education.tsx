'use client'

import { useEffect, useRef, useState } from 'react'
import { GraduationCap, Calendar } from 'lucide-react'

interface Education {
  id: number
  degree: string
  institution: string
  period: string
  specialization?: string
  mention?: string
}

const educationData: Education[] = [
  {
    id: 1,
    degree: 'Master II Professionnelle en Informatique',
    institution: 'Ecole Nationale d\'Informatique Université de Fianarantsoa',
    period: '2024 - 2025',
    specialization: 'Parcours : Informatique Générale',
  },
  {
    id: 2,
    degree: 'Master I Professionnelle en Informatique',
    institution: 'Ecole Nationale d\'Informatique Université de Fianarantsoa',
    period: '2023 - 2024',
    specialization: 'Parcours : Informatique Générale',
  },
  {
    id: 3,
    degree: 'Licence Professionnelle en Informatique',
    institution: 'Ecole Nationale d\'Informatique Université de Fianarantsoa',
    period: '2022 - 2023',
    specialization: 'Parcours : Informatique Générale',
    mention: 'Mention BIEN',
  },
  {
    id: 4,
    degree: 'Baccalauréat Série D',
    institution: 'Lycée Saint Joseph de Cluny Tambohobe Fianarantsoa',
    period: '2018 - 2019',
    mention: 'Mention ASSEZ-BIEN',
  },
]

function EducationItem({ education, index, isVisible }: { education: Education, index: number, isVisible: boolean }) {
  return (
    <div
      className={`relative pl-8 sm:pl-12 pb-12 last:pb-0 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Connector Line */}
      <div className="absolute left-0 sm:left-[1.35rem] top-0 bottom-0 w-[2px] bg-foreground/10 last:bg-transparent" />
      
      {/* Dot */}
      <div className={`absolute left-[-5px] sm:left-[1rem] top-1.5 w-3 h-3 rounded-full border-2 border-background bg-foreground/20 border-foreground/40`} />

      <div className="group relative bg-card/40 backdrop-blur-sm border border-border p-6 rounded-2xl hover:border-primary/30 hover:bg-card transition-all duration-300">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
          <div>
            <h3 className="text-xl font-bold text-foreground dark:text-white leading-tight group-hover:text-primary transition-colors">
              {education.degree}
            </h3>
            <div className="flex items-center gap-2 mt-1 text-foreground/40">
              <GraduationCap size={14} />
              <span className="text-xs font-bold uppercase tracking-widest">{education.institution}</span>
            </div>
          </div>
          <div className="flex items-center gap-2 px-3 py-1 bg-foreground/5 rounded-full border border-foreground/5 whitespace-nowrap">
            <Calendar size={12} className="text-primary" />
            <span className="text-[10px] font-black uppercase tracking-widest text-foreground/60">{education.period}</span>
          </div>
        </div>

        {(education.specialization || education.mention) && (
          <div className="space-y-2">
            {education.specialization && (
              <p className="text-foreground/50 dark:text-white/60 text-sm leading-relaxed">
                {education.specialization}
              </p>
            )}
            {education.mention && (
              <span className="inline-block px-2 py-0.5 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider rounded">
                {education.mention}
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export function Education() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
        observer.unobserve(entry.target)
      }
    }, { threshold: 0.1 })

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="education" className="py-24 bg-background overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        <div ref={ref} className={`mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-primary/10 rounded-full border border-primary/20">
             <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
             <span className="text-[10px] font-black uppercase tracking-widest text-primary">Formation</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-bold text-foreground dark:text-white mb-6 tracking-tight">
            Formation  <span className="text-foreground/40 dark:text-white/40 font-light">Académique</span>
          </h2>
        </div>

        <div className="space-y-0">
          {educationData.map((edu, index) => (
            <EducationItem
              key={edu.id}
              education={edu}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
