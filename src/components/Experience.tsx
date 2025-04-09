
import { Briefcase, Calendar, CheckCircle } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="bg-white">
      <div className="container">
        <h2 className="section-title">Experience & Activities</h2>
        
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Internship Section */}
          <div className="bg-portfolio-secondary/30 rounded-lg p-6 shadow-sm">
            <div className="flex items-center space-x-2 mb-6">
              <Briefcase className="text-portfolio-accent" />
              <h3 className="text-2xl font-semibold">Internship</h3>
            </div>
            
            <div className="border-l-2 border-portfolio-accent/50 pl-5 ml-1 pb-2">
              <div className="relative">
                <span className="absolute -left-[1.57rem] top-1 h-3 w-3 rounded-full bg-portfolio-accent"></span>
                <div className="mb-2 flex items-center justify-between">
                  <h4 className="text-lg font-semibold text-portfolio-primary">ML Intern, Savidha Foundation</h4>
                  <span className="flex items-center text-sm text-gray-600">
                    <Calendar size={14} className="mr-1" />
                    Aug'23 - Sep'23
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-3">Pune</p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle size={16} className="mr-2 text-portfolio-accent mt-0.5 flex-shrink-0" />
                    <span>Used Python For Development For the ML models Libraries</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={16} className="mr-2 text-portfolio-accent mt-0.5 flex-shrink-0" />
                    <span>Used were SciKitLearn, Matplotlb, Pandas, NLTK</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={16} className="mr-2 text-portfolio-accent mt-0.5 flex-shrink-0" />
                    <span>Applied concepts of Data cleaning, Feature Engineering and NLP</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={16} className="mr-2 text-portfolio-accent mt-0.5 flex-shrink-0" />
                    <span>Developed a text summariser, which summarised huge news articles</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Extra Curricular Activities */}
          <div className="bg-portfolio-secondary/30 rounded-lg p-6 shadow-sm">
            <div className="flex items-center space-x-2 mb-6">
              <Calendar className="text-portfolio-accent" />
              <h3 className="text-2xl font-semibold">Extracurricular Activities</h3>
            </div>
            
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <CheckCircle size={16} className="mr-3 text-portfolio-accent mt-1 flex-shrink-0" />
                <span>
                  <span className="font-medium">Senior Event Manager at ACES</span> (2023-2024) - 
                  Organized numerous events including Hackoberfest, Student orientation and Farewell.
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle size={16} className="mr-3 text-portfolio-accent mt-1 flex-shrink-0" />
                <span>
                  <span className="font-medium">Event Head for "Avanetha"</span> - 
                  Managed the largest technical fest with various events including coding competitions and treasure hunts.
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle size={16} className="mr-3 text-portfolio-accent mt-1 flex-shrink-0" />
                <span>
                  <span className="font-medium">Volunteer at Yuva Maharashtra</span> - 
                  Contributed to community service and cultural heritage preservation including cleanliness drives and blood donation camps.
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle size={16} className="mr-3 text-portfolio-accent mt-1 flex-shrink-0" />
                <span>
                  <span className="font-medium">Led the Hackoberfest</span> -
                  Fostered collaboration among over 40 contributors in the department through this online virtual event.
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Presentations Section */}
        <div className="mt-10 bg-white rounded-lg p-6 shadow-sm border border-portfolio-secondary">
          <h3 className="text-xl font-semibold mb-4 text-portfolio-primary">Presentations</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <div className="h-2 w-2 rounded-full bg-portfolio-accent mt-2 mr-3"></div>
              <p className="text-gray-700">
                Presented seminar on <span className="font-medium">Introduction to Quantum Computing</span>, 
                as part of Seminar towards fulfillment of degree in December 2023 at Dr. D. Y. Patil Institute of Technology.
              </p>
            </li>
            <li className="flex items-start">
              <div className="h-2 w-2 rounded-full bg-portfolio-accent mt-2 mr-3"></div>
              <p className="text-gray-700">
                Presented a poster on <span className="font-medium">"Solaris: Deep Learning Based Model for prediction of 
                solar power yield On rooftop using aerial imagery"</span> as part of the Internal Avishkar 2024 Research Project Competition.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
