'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

export function About() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
        observer.unobserve(entry.target)
      }
    })

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="about"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground dark:text-white mb-8">
            À propos
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
            <div className="space-y-6 text-lg text-foreground/70 dark:text-white/70 leading-relaxed">
            <p>
              Je suis un développeur web passionné avec plus de 3 ans d'expérience
              dans la création d'applications web modernes et performantes. Mon expertise
              couvre le full-stack développement, avec une spécialisation en technologies
              JavaScript/TypeScript et écosystème React.
            </p>

            <p>
              Ma philosophie de développement repose sur la création de solutions
              utilisateur-centrées, accessibles et maintenables. Je suis convaincu que
              le code de qualité nécessite une attention particulière à la performance,
              la sécurité et l'expérience utilisateur.
            </p>

            <p>
              Quand je ne suis pas en train de coder, j'aime contribuer à des projets
              open-source, apprendre de nouvelles technologies et partager mes
              connaissances avec la communauté développeur.
            </p>

            <div className="pt-4">
              <h3 className="text-xl font-bold text-foreground dark:text-white mb-4">
                Valeurs principales
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  'Code propre et lisible',
                  'Attention aux détails',
                  'Apprentissage continu',
                  'Collaboration en équipe',
                  'Performance optimisée',
                  'Accessibilité inclusive',
                ].map((value) => (
                  <li
                    key={value}
                    className="flex items-center gap-3 text-foreground/70 dark:text-white/70 text-base"
                  >
                    <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 shadow-[0_0_8px_rgba(var(--primary),0.6)]" />
                    {value}
                  </li>
                ))}
              </ul>
            </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="/angela2.jfif"
                alt="Photo de profil"
                width={350}
                height={400}
                className="rounded-lg shadow-lg border-2 border-foreground/10 object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
