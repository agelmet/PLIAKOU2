import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 overflow-hidden pt-20">
        {/* Soft Animated Background Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-accent/10 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-earth-300/20 rounded-full blur-[100px] animate-pulse" style={{animationDelay: '2s'}}></div>

        <div className="max-w-5xl mx-auto text-center relative z-10 reveal-fade w-full flex flex-col items-center">
          
          {/* Business Card Beautifully Displayed */}
          <div className="w-full max-w-lg mx-auto mb-12 shadow-2xl rounded-lg overflow-hidden border-8 border-white transform hover:scale-105 transition-transform duration-700">
            <img 
              src="https://github.com/agelmet/PLIAKOU/blob/main/logooo.jpg?raw=true" 
              alt="Μαρία Πλιάκου - Κλινική Ψυχολόγος" 
              className="w-full h-auto object-cover"
            />
          </div>

          <h1 className="text-earth-900 mb-8 font-serif text-4xl md:text-5xl lg:text-6xl">
            Χώρος ακρόασης, σύνδεσης &<br/>
            <span className="text-brand-accent italic">προσωπικής εξέλιξης.</span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-earth-800/80 text-lg md:text-xl font-light mb-12 leading-relaxed">
            Η Μαρία Πλιάκου είναι αδειούχος Κλινική Ψυχολόγος, προσφέροντας επιστημονικά τεκμηριωμένη Γνωσιακή Συμπεριφορική Θεραπεία (CBT) στην Καισαριανή.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link to="/contact" className="px-8 py-4 bg-earth-900 text-earth-50 rounded-full font-medium hover:bg-brand-accent transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center gap-2 group">
              ΞΕΚΙΝΗΣΤΕ ΤΟ ΤΑΞΙΔΙ ΣΑΣ
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/about" className="px-8 py-4 bg-transparent border border-earth-300 text-earth-900 rounded-full font-medium hover:border-brand-accent hover:text-brand-accent transition-all">
              ΓΝΩΡΙΣΤΕ ΤΗΝ ΠΡΟΣΕΓΓΙΣΗ
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}