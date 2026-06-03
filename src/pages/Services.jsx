import { BrainCircuit, HeartCrack, Users, MonitorSmartphone } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <BrainCircuit className="w-8 h-8 text-brand-accent" />,
      title: 'Άγχος, Κρίσεις Πανικού & OCD',
      tags: ['Άγχος & Στρες', 'Φοβίες', 'Τραύμα (PTSD)'],
      desc: 'Το γενικευμένο άγχος και οι ιδεοψυχαναγκασμοί (OCD) αντιμετωπίζονται με την πιο επιστημονικά τεκμηριωμένη μέθοδο (CBT). Σε συνεδρίες 50 λεπτών, μαθαίνετε να ηρεμείτε το νευρικό σας σύστημα και να αποδυναμώνετε τις κρίσεις πανικού την ώρα που συμβαίνουν.'
    },
    {
      icon: <HeartCrack className="w-8 h-8 text-brand-accent" />,
      title: 'Κατάθλιψη, Burnout & Σχέσεις',
      tags: ['Κατάθλιψη', 'Burnout', 'Διαχείριση Θυμού'],
      desc: 'Όταν η καθημερινότητα μοιάζει αβάσταχτη ή οι σχέσεις σας πνίγουν σε συγκρούσεις, η παρέμβαση πρέπει να είναι στοχευμένη. Δουλεύουμε στην ενίσχυση της αυτοεκτίμησης, στη θέσπιση υγιών ορίων και στη διεκδικητική επικοινωνία.'
    },
    {
      icon: <Users className="w-8 h-8 text-brand-accent" />,
      title: 'Παιδιά, Έφηβοι & Γονείς',
      tags: ['Συνεδρίες Εφήβων', 'ΔΕΠΥ', 'Συμβουλευτική Γονέων'],
      desc: 'Εξειδικευμένη υποστήριξη σε αναπτυξιακές προκλήσεις, άγχος αποχωρισμού και σχολικό εκφοβισμό. Παράλληλα, προσφέρεται Συμβουλευτική Γονέων για τη βελτίωση της επικοινωνίας και τη δημιουργία ενός σταθερού οικογενειακού πλαισίου.'
    },
    {
      icon: <MonitorSmartphone className="w-8 h-8 text-brand-accent" />,
      title: 'Διαδικτυακή (Online) Θεραπεία',
      tags: ['Online Συνεδρίες', 'Ψυχοθεραπεία ΛΟΑΤΚΙ+'],
      desc: 'Όλες οι υπηρεσίες παρέχονται με την ίδια εχεμύθεια και ασφάλεια online. Ο χώρος αποτελεί ένα ασφαλές καταφύγιο απαλλαγμένο από στερεότυπα, προσφέροντας επιβεβαιωτική (affirmative) θεραπεία σε ΛΟΑΤΚΙ+ άτομα.'
    }
  ];

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-20 reveal-fade">
        <span className="text-brand-accent font-semibold tracking-widest text-sm uppercase">Υπηρεσιες</span>
        <h1 className="text-4xl md:text-5xl font-serif text-earth-900 mt-4 mb-6">Ομαδοποιημένες & Βελτιστοποιημένες</h1>
        <p className="text-earth-500 text-lg font-light">Εξειδικευμένες παρεμβάσεις βασισμένες στο γνωσιακό - συμπεριφορικό μοντέλο (CBT).</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 reveal-fade" style={{animationDelay: '0.2s'}}>
        {services.map((svc, i) => (
          <div key={i} className="bg-white p-10 rounded-2xl border border-earth-100 hover:border-brand-accent/50 hover:shadow-xl hover:shadow-earth-900/5 transition-all duration-500 group">
            <div className="w-16 h-16 bg-earth-50 rounded-xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
              {svc.icon}
            </div>
            <h3 className="text-2xl font-serif text-earth-900 mb-4">{svc.title}</h3>
            <p className="text-earth-800/70 font-light leading-relaxed mb-8">{svc.desc}</p>
            <div className="flex flex-wrap gap-2">
              {svc.tags.map((tag, j) => (
                <span key={j} className="bg-earth-50 px-3 py-1.5 rounded-full text-xs font-medium text-earth-500 border border-earth-100">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}