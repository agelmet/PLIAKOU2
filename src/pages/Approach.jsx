export default function Approach() {
  const truths = [
    {
      num: "1",
      title: "Η 'Βαριά' Κλινική Εμπειρία είναι το Δίχτυ Ασφαλείας σας",
      desc: "Η πορεία μου δεν περιορίστηκε στα βιβλία. Έχω περάσει χιλιάδες ώρες αξιολογώντας δύσκολα περιστατικά στα μεγαλύτερα νοσοκομεία της Θεσσαλονίκης. Δεν τρομάζω με το σκοτάδι. Έχω την ψυχραιμία και την κατάρτιση για να σταθώ δίπλα σας με απόλυτη σιγουριά."
    },
    {
      num: "2",
      title: "Το Κύρος της Ολλανδικής και Γερμανικής Σχολής",
      desc: "Η μακρά ακαδημαϊκή μου διαμονή στη Γερμανία και στην Ολλανδία διαμόρφωσε τον τρόπο που δουλεύω. Δεν βασίζομαι σε 'διαισθήσεις', αλλά σε αυστηρά, επιστημονικά τεκμηριωμένα ευρωπαϊκά κλινικά πρωτόκολλα που εγγυώνται εγκυρότητα και ασφάλεια."
    },
    {
      num: "3",
      title: "Εδώ Δεν Συζητάμε Απλώς. Δουλεύουμε (CBT)",
      desc: "Η εξειδίκευσή μου σημαίνει πως η θεραπεία μας δεν είναι μια ατέρμονη, παθητική συζήτηση. Είμαστε ομάδα. Βάζουμε στόχους, εντοπίζουμε τα δυσλειτουργικά σας μοτίβα και σας δίνω 'ασκήσεις'. Σκοπός μου είναι να γίνετε μια μέρα ο θεραπευτής του εαυτού σας."
    },
    {
      num: "4",
      title: "Απουσία 'Κηρύγματος'",
      desc: "Στο γραφείο μου έρχονται ενήλικες εξουθενωμένοι, γονείς στα όρια, και άτομα που έχουν κουραστεί να αποδεικνύουν την ύπαρξή τους. Εδώ δεν υπάρχει σωστό και λάθος. Υπάρχει μόνο η δική σας αλήθεια, την οποία ακούω προσφέροντας έναν 100% ασφαλή χώρο."
    }
  ];

  return (
    <section className="py-20 px-6 max-w-5xl mx-auto">
      <div className="text-center mb-20 reveal-fade">
        <h1 className="text-4xl md:text-5xl font-serif text-earth-900 mb-6">Από το Νοσοκομείο στο Ιδιωτικό Γραφείο</h1>
        <p className="text-earth-500 text-lg font-light">4 Αλήθειες για τη Θεραπευτική μας Συνεργασία.</p>
      </div>

      <div className="space-y-12">
        {truths.map((item, i) => (
          <div key={i} className="bg-white p-8 md:p-10 rounded-2xl border border-earth-100 flex flex-col md:flex-row gap-8 items-start hover:shadow-lg transition-shadow duration-500 reveal-fade" style={{animationDelay: `${i * 0.1}s`}}>
            <span className="text-6xl font-serif text-brand-accent/20 font-black leading-none">{item.num}</span>
            <div>
              <h3 className="text-2xl font-serif text-earth-900 mb-4">{item.title}</h3>
              <p className="text-earth-800/80 font-light leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}