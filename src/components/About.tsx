
import { Book, Code, Award, Cpu } from 'lucide-react';

const About = () => {
  const skills = [
    { category: "Languages", items: ["Python", "C++", "JavaScript"] },
    { category: "Web Technologies", items: ["HTML5", "CSS3", "React.js", "Node.js", "Express.js", "Tailwind CSS"] },
    { category: "Databases", items: ["MySQL", "MongoDB"] },
    { category: "ML/AI", items: ["Machine Learning", "NLP", "Feature Engineering", "Data Analysis"] },
  ];

  return (
    <section id="about" className="bg-white dark:bg-portfolio-dark">
      <div className="container">
        <h2 className="section-title dark:text-white dark:after:bg-portfolio-accent">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="col-span-2 space-y-6">
            <div className="flex items-start space-x-4">
              <Book className="text-portfolio-accent mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold dark:text-white">Education</h3>
                <p className="mt-2 dark:text-white/90">
                  <span className="font-medium">Bachelor of Engineering in Computer Engineering</span>
                  <br />
                  Dr. D. Y. Patil Institute of Technology, Pimpri, Pune
                  <br />
                  <span className="text-sm text-gray-600 dark:text-gray-300">Nov'21 - Present • CGPA: 9.45/10</span>
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 mt-8">
              <Award className="text-portfolio-accent mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold dark:text-white">Achievements</h3>
                <ul className="mt-2 list-disc list-inside space-y-2 dark:text-white/90">
                  <li>Secured Department Rank 2 in Second Year with Academic Excellence Award (2023)</li>
                  <li>Secured Department rank 3 in Third Year in Computer Engineering</li>
                  <li>College level Smart India Hackathon Qualifier (November 2023)</li>
                  <li>Runner up at CodeCraft Coding Competition (among 100 students)</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-portfolio-secondary dark:bg-portfolio-primary/10 p-6 rounded-lg shadow-sm">
            <div className="flex items-center space-x-3 mb-4">
              <Code className="text-portfolio-accent" />
              <h3 className="text-xl font-semibold dark:text-white">Technical Skills</h3>
            </div>
            
            <div className="space-y-4">
              {skills.map((skillGroup, index) => (
                <div key={index}>
                  <h4 className="font-medium text-portfolio-primary dark:text-white">{skillGroup.category}</h4>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {skillGroup.items.map((skill, idx) => (
                      <span 
                        key={idx} 
                        className="bg-white dark:bg-portfolio-dark/40 px-3 py-1 rounded text-sm text-portfolio-primary dark:text-white border border-portfolio-primary/20 dark:border-white/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
