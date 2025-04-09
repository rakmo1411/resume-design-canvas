
import { useState } from 'react';
import { Code, Users, ExternalLink, Calendar } from 'lucide-react';

type Project = {
  title: string;
  period: string;
  teamSize: number;
  objective: string;
  summary: string;
  role: string;
  technologies: string[];
};

const Projects = () => {
  const [projects] = useState<Project[]>([
    {
      title: "Farmify",
      period: "Feb 2024",
      teamSize: 4,
      objective: "Developed a Smart AI-based solution for farmers to predict plant leaf diseases using deep learning and large language models.",
      summary: "Leveraged image processing techniques to analyze leaf images and detect diseases with high accuracy. Integrated a large language model to provide farmers with actionable insights and detailed disease descriptions in a user-friendly manner. This solution empowers farmers to take timely preventive measures, improving crop health and yield.",
      role: "Responsible for training the model and conducted rigorous model evaluation and validation, ensuring the model met target performance metrics.",
      technologies: ["Python", "Deep Learning", "NLP", "Image Processing"]
    },
    {
      title: "Fake News Detection",
      period: "Oct 2023",
      teamSize: 1,
      objective: "Developed a robust Fake News Detection system using Logistic Regression to classify news articles as real or fake based on linguistic features and content patterns.",
      summary: "Applied data preprocessing techniques like tokenization and vectorization to prepare the dataset for accurate classification. Optimized the model to achieve high precision and recall.",
      role: "Solely responsible for the end-to-end ML model, including data collection, preprocessing, model selection, training and evaluation.",
      technologies: ["Python", "ML", "NLP", "Data Preprocessing"]
    },
    {
      title: "Diabetes Predictor",
      period: "Jul 2023 - Aug 2023",
      teamSize: 1,
      objective: "Developed a comprehensive Diabetes Predictor for women using Support Vector Machine (SVM) to classify and predict the likelihood of diabetes based on key health metrics.",
      summary: "The model was fine-tuned to achieve high accuracy, enhancing early detection and intervention for better health outcomes. Integrated effective data preprocessing techniques to ensure reliable predictions and improve the overall model performance.",
      role: "Solely responsible for the end-to-end ML model, including data collection, preprocessing, model selection, training and evaluation.",
      technologies: ["Python", "SVM", "Data Analysis", "Healthcare"]
    },
    {
      title: "Students Complaint System",
      period: "Feb 2023 - May 2023",
      teamSize: 4,
      objective: "This project was developed to speed up the process of complaint resolution in an online mode.",
      summary: "The website is built using HTML, CSS and EJS for frontend, NodeJs, ExpressJs as Backend and MongoDB for database. It has 2 user roles as Student and Admin, where the student can register the complaint and admin can resolve it.",
      role: "Responsible for the development of Backend server and integration of database with the server.",
      technologies: ["HTML", "CSS", "EJS", "Node.js", "Express.js", "MongoDB"]
    }
  ]);

  return (
    <section id="projects" className="bg-portfolio-secondary/50">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-sm card-hover flex flex-col"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-portfolio-primary">{project.title}</h3>
                <span className="text-sm bg-portfolio-accent/10 text-portfolio-accent px-3 py-1 rounded-full flex items-center gap-1">
                  <Calendar size={14} />
                  {project.period}
                </span>
              </div>
              
              <p className="text-sm font-medium flex items-center text-gray-600 mb-2">
                <Users size={16} className="mr-2" />
                Team size: {project.teamSize}
              </p>
              
              <div className="mb-4">
                <p className="font-medium text-portfolio-primary">Objective:</p>
                <p className="text-sm text-gray-700">{project.objective}</p>
              </div>
              
              <div className="mb-4">
                <p className="font-medium text-portfolio-primary">Summary:</p>
                <p className="text-sm text-gray-700">{project.summary}</p>
              </div>
              
              <div className="mb-5">
                <p className="font-medium text-portfolio-primary">My Role:</p>
                <p className="text-sm text-gray-700">{project.role}</p>
              </div>
              
              <div className="mt-auto">
                <p className="font-medium text-portfolio-primary mb-2 flex items-center">
                  <Code size={16} className="mr-2" />
                  Technologies:
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span 
                      key={idx} 
                      className="bg-portfolio-secondary px-2 py-1 rounded text-xs text-portfolio-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
