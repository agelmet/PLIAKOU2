import { MapPin, Phone, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16">
        
        {/* Contact Info & Map */}
        <div className="reveal-fade">
          <h1 className="text-4xl md:text-5xl font-serif text-earth-900 mb-8">Επικοινωνία</h1>
          <p className="text-earth-800/80 font-light mb-12">
            Κλείστε το πρώτο σας ραντεβού, δια ζώσης ή διαδικτυακά.
          </p>

          <div className="space-y-6 mb-12">
            <div className="flex items-center gap-4 bg-white p-4 rounded-xl border border-earth-100">
              <div className="w-12 h-12 bg-earth-50 rounded-full flex items-center justify-center shrink-0"><MapPin className="text-brand-accent" /></div>
              <div>
                <p className="text-sm text-earth-500 uppercase tracking-widest font-medium">Διευθυνση</p>
                <p className="text-earth-900">Μίσθου 2, Τ.Κ. 16121, Καισαριανή</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-white p-4 rounded-xl border border-earth-100">
              <div className="w-12 h-12 bg-earth-50 rounded-full flex items-center justify-center shrink-0"><Phone className="text-brand-accent" /></div>
              <div>
                <p className="text-sm text-earth-500 uppercase tracking-widest font-medium">Τηλεφωνο</p>
                <a href="tel:+306979665223" className="text-earth-900 hover:text-brand-accent transition-colors">+30 697 9665 223</a>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-white p-4 rounded-xl border border-earth-100">
              <div className="w-12 h-12 bg-earth-50 rounded-full flex items-center justify-center shrink-0"><Mail className="text-brand-accent" /></div>
              <div>
                <p className="text-sm text-earth-500 uppercase tracking-widest font-medium">Email</p>
                <a href="mailto:info@mariapliakou.com" className="text-earth-900 hover:text-brand-accent transition-colors">info@mariapliakou.com</a>
              </div>
            </div>
          </div>

          {/* Earthy Map iframe (uses the CSS class from index.css) */}
          <div className="w-full h-64 rounded-2xl overflow-hidden bg-earth-100">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3145.056637854673!2d23.75051911532439!3d37.97583397972379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1bd516f4fc44d%3A0x6e297fc0e7a27521!2sMisthou%202%2C%20Kaisariani%20161%2021%2C%20Greece!5e0!3m2!1sen!2sus!4v1680000000000!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{border:0}} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="earthy-map"
            ></iframe>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white p-8 md:p-12 rounded-3xl border border-earth-100 shadow-xl shadow-earth-900/5 reveal-fade" style={{animationDelay: '0.2s'}}>
          <h2 className="text-2xl font-serif text-earth-900 mb-8">Φόρμα Επικοινωνίας</h2>
          <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-medium text-earth-500">Ονοματεπώνυμο</label>
              <input type="text" id="name" className="w-full bg-earth-50 border border-earth-100 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-accent transition-colors" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-medium text-earth-500">Email</label>
              <input type="email" id="email" className="w-full bg-earth-50 border border-earth-100 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-accent transition-colors" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="phone" className="text-sm font-medium text-earth-500">Τηλέφωνο (Προαιρετικό)</label>
              <input type="tel" id="phone" className="w-full bg-earth-50 border border-earth-100 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-accent transition-colors" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-medium text-earth-500">Μήνυμα</label>
              <textarea id="message" rows="5" className="w-full bg-earth-50 border border-earth-100 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-accent transition-colors resize-none"></textarea>
            </div>
            <button type="submit" className="w-full mt-4 px-8 py-4 bg-earth-900 text-earth-50 rounded-lg font-medium hover:bg-brand-accent transition-colors duration-300">
              ΑΠΟΣΤΟΛΗ
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}