import { MapPin, Globe } from 'lucide-react';

export default function About() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-12 gap-16 items-start">
        
        {/* Left Column: Image & Location */}
        <div className="md:col-span-5 reveal-fade relative">
          <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl relative z-10 border-8 border-white">
            <img 
              src="https://cdn.doctoranytime.gr/profileimages/1e996f8a-0413-4e48-b398-f61643e23e92.webp" 
              alt="Μαρία Πλιάκου" 
              className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700 ease-out"
            />
          </div>
          {/* Decorative Accent Background */}
          <div className="absolute -bottom-6 -left-6 w-full h-full border-2 border-brand-accent rounded-2xl z-0 hidden md:block"></div>
          
          {/* Location Badges under image */}
          <div className="mt-12 bg-white p-6 rounded-2xl shadow-sm border border-earth-100 flex flex-col gap-4 relative z-20">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-earth-50 flex items-center justify-center shrink-0"><MapPin className="text-brand-accent w-5 h-5" /></div>
              <span className="text-earth-900 font-medium text-sm">Καισαριανή (Μετρό Ευαγγελισμός)</span>
            </div>
            <div className="w-full h-px bg-earth-100"></div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-earth-50 flex items-center justify-center shrink-0"><Globe className="text-brand-accent w-5 h-5" /></div>
              <span className="text-earth-900 font-medium text-sm">Διαδικτυακές Συνεδρίες (Online)</span>
            </div>
          </div>
        </div>

        {/* Right Column: Copy */}
        <div className="md:col-span-7 reveal-fade" style={{animationDelay: '0.2s'}}>
          <h1 className="text-3xl md:text-5xl font-serif text-earth-900 mb-6">Σχετικά με εμένα</h1>
          <div className="w-16 h-1 bg-brand-accent mb-8"></div>
          
          <div className="space-y-6 text-earth-800/80 font-light leading-relaxed">
            <p>
              Η <strong>Μαρία Πλιάκου</strong> είναι αδειούχος Κλινική Ψυχολόγος - Ψυχοθεραπεύτρια (Αρ. Αδείας: 12918/2-6-2017) και διατηρεί το ιδιωτικό της γραφείο στην Καισαριανή.
            </p>
            <p>
              Διαθέτει ένα εξαιρετικά απαιτητικό και διεθνές ακαδημαϊκό υπόβαθρο: σπούδασε Ψυχολογία στο Αριστοτέλειο Πανεπιστήμιο Θεσσαλονίκης, ολοκληρώνοντας το πρόγραμμα στο Universität Konstanz (Γερμανία) μέσω υποτροφίας, και στη συνέχεια απέκτησε Μεταπτυχιακό Τίτλο (MSc) στην Κλινική Ψυχολογία στο φημισμένο Leiden University (Ολλανδία).
            </p>
            <p>
              Η επαγγελματική της ταυτότητα είναι απολύτως συνυφασμένη με τη "βαριά" κλινική εμπειρία. Έχει αξιολογήσει και υποστηρίξει ασθενείς με σοβαρές ψυχικές διαταραχές στο <strong>Ψυχιατρικό Νοσοκομείο Θεσσαλονίκης (ΨΝΘ)</strong> και στην Ψυχιατρική Κλινική του <strong>Νοσοκομείου Παπαγεωργίου</strong>, καθώς και φοιτητές στο LUTC της Ολλανδίας.
            </p>
            <p>
              Ακολούθησε 4ετή, εντατική εξειδίκευση στη Γνωσιακή Συμπεριφορική Θεραπεία (CBT) από την ΕΓΣΣ, και εργάστηκε επί σειρά ετών στο ιστορικό Ινστιτούτο Έρευνας και Θεραπείας της Συμπεριφοράς (ΙΕΘΣ). Σήμερα, με περισσότερα από 8 χρόνια εξειδικευμένης εμπειρίας, αναλαμβάνει ενήλικες, εφήβους και παιδιά. Αντιμετωπίζει δομημένα και αποτελεσματικά αγχώδεις διαταραχές, ιδεοψυχαναγκασμούς, κατάθλιψη και κρίσεις πανικού.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}