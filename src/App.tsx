import React from 'react';
import { Menu, X, Facebook, Instagram, Mail, Phone, MapPin, Clock } from 'lucide-react';
import { useState } from 'react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
      <div className="min-h-screen bg-gradient-to-b from-white to-brand-blue/10">
        {/* Navigation */}
        <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <span className="text-2xl font-display text-gray-900">Cabinet d'Ostéopathie</span>
              </div>
              <div className="hidden md:flex items-center space-x-8">
                {['accueil', 'Notre Équipe', 'pour-qui', 'infos', 'pourquoi', 'faq'].map((item) => (
                    <button
                        key={item}
                        onClick={() => scrollToSection(item)}
                        className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                    >
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </button>
                ))}
              </div>
              <div className="md:hidden flex items-center">
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="text-gray-600 hover:text-gray-900"
                >
                  {isMenuOpen ? <X size={24}/> : <Menu size={24}/>}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
              <div className="md:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                  {['accueil', 'Notre Équipe', 'pour-qui', 'infos', 'pourquoi', 'faq'].map((item) => (
                      <button
                          key={item}
                          onClick={() => scrollToSection(item)}
                          className="block w-full text-left text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-base font-medium"
                      >
                        {item.charAt(0).toUpperCase() + item.slice(1)}
                      </button>
                  ))}
                </div>
              </div>
          )}
        </nav>

        {/* Header */}
        <section id="accueil" className="pt-32 pb-20 relative overflow-hidden">
          <div
              className="section-shape section-shape-blue absolute top-0 right-0 -translate-y-1/2 translate-x-1/2"></div>
          <div
              className="section-shape section-shape-green absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <h1 className="text-5xl md:text-6xl font-display font-bold text-gray-900 mb-6">
              Bienvenue au Cabinet d'Ostéopathie
            </h1>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl">
              Votre bien-être est notre priorité. Nos ostéopathes expérimentés vous accompagnent vers une meilleure
              santé.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://user.clicrdv.com/morann-durand" className="btn btn-primary">
                RDV avec Dr. Morann Durand
              </a>
              <a href="https://www.doctolib.fr/osteopathe/roanne/phedre-petelet-roanne" className="btn btn-secondary">
                RDV avec Dr. Phèdre Petelet
              </a>
            </div>
          </div>
        </section>

        {/* À propos */}
        <section id="about" className="py-20 bg-brand-blue/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-12 text-center">Notre Équipe</h2>
            <div className="grid md:grid-cols-2 gap-12">
              {[
                {
                  name: "Dr. Morann Durand",
                  image: "./durand.jpg",
                  description: "Spécialisée dans l'ostéopathie pédiatrique et périnatale, Dr. Durand accompagne ses patients avec une approche douce et personnalisée."
                },
                {
                  name: "Dr. Phèdre Petelet",
                  image: "./phedre.jpeg",
                  description: "Experte en ostéopathie du sport et posturale, Dr. Petelet propose des solutions adaptées pour optimiser les performances et le bien-être."
                }
              ].map((osteo, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-lg text-center p-6">
                    <img
                        src={osteo.image}
                        alt={osteo.name}
                        className="w-40 h-40 object-cover rounded-full mx-auto mt-4 shadow-md"
                    />
                    <h3 className="text-xl font-display font-semibold text-gray-900 mt-4">{osteo.name}</h3>
                    <p className="text-gray-600 mt-2">{osteo.description}</p>
                  </div>

              ))}
            </div>
          </div>
        </section>

        {/* À qui s'adresse l'ostéopathie */}
        <section id="pour-qui" className="py-20 bg-brand-green/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-12 text-center">
              À qui s'adresse l'ostéopathie ?
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                {
                  title: "Nourrissons",
                  image: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&q=80&w=300"
                },
                {
                  title: "Enfants",
                  image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&q=80&w=300"
                },
                {
                  title: "Adolescents",
                  image: "https://media.istockphoto.com/id/1278978403/fr/photo/amis-dadolescent-sasseyant-ensemble-et-riant.jpg?s=612x612&w=0&k=20&c=Xp2EaQH8-1JrnBSus33pOnxbfx-Bz4jjShil95LtxR4="
                },
                {
                  title: "Femmes enceintes",
                  image: "https://www.massotherapierepentigny.com/wp-content/uploads/2016/11/massage-femme-enceinte-qc.jpg"
                },
                {
                  title: "Sportifs",
                  image: "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?auto=format&fit=crop&q=80&w=300"
                },
                {
                  title: "Adultes",
                  image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=300"
                },
                {
                  title: "Séniors",
                  image: "https://img.freepik.com/photos-gratuite/femme-senior-africaine-souriante-portrait-visage_53876-143107.jpg"
                },
                {
                  title: "Professionnels",
                  image: "https://img.freepik.com/photos-gratuite/homme-affaires-angle-eleve_23-2148479585.jpg"
                }
              ].map((profile, index) => (
                  <div key={index} className="relative group">
                    <div className="aspect-square rounded-2xl overflow-hidden">
                      <img
                          src={profile.image}
                          alt={profile.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <h3 className="absolute bottom-4 left-4 text-white font-display font-medium">{profile.title}</h3>
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* Informations pratiques */}
        <section id="infos" className="py-20 bg-brand-blue/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-12 text-center">
              Informations Pratiques
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Horaires */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <Clock className="w-8 h-8 text-[#C1DCEF] mb-4"/>
                <h3 className="text-xl font-display font-semibold mb-4">Horaires</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Lundi - Vendredi : 9h - 18h30</li>
                  <li>Samedi : 9h - 12h30</li>
                  <li>Dimanche : Fermé</li>
                </ul>
              </div>

              {/* Adresse */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <MapPin className="w-8 h-8 text-[#C7DFD1] mb-4"/>
                <h3 className="text-xl font-display font-semibold mb-4">Adresse</h3>
                <p className="text-gray-600">
                  Bâtiment L'Ultra<br/>
                  164 Rue de Charlieu,<br/>
                  42300 Roanne<br/>
                  France
                </p>
              </div>

              {/* Contact */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <Phone className="w-8 h-8 text-[#C1DCEF] mb-4"/>
                <h3 className="text-xl font-display font-semibold mb-4">Contact</h3>
                <p className="text-gray-600 space-y-1">
                  <a href="tel:+33769772380" className="text-blue-600 hover:underline block">
                    Tél : 07 69 77 23 80
                  </a>
                  <a href="mailto:contact@osteo-roanne.fr" className="text-blue-600 hover:underline block">
                    Email : contact@osteo-roanne.fr
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>


        {/* Pourquoi consulter */}
        <section id="pourquoi" className="py-20 bg-brand-green/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-12 text-center">
              Pourquoi Consulter ?
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                "Douleurs musculo-squelettiques",
                "Stress et fatigue",
                "Migraines et maux de tête",
                "Problèmes digestifs",
                "Troubles du sommeil",
                "Suivi post-traumatique"
              ].map((reason, index) => (
                  <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <h3 className="text-xl font-display font-semibold mb-4">{reason}</h3>
                    <p className="text-gray-600">
                      L'ostéopathie peut vous aider à soulager ces symptômes de manière naturelle et durable.
                    </p>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-20 bg-brand-blue/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-12 text-center">
              Questions Fréquentes
            </h2>
            <div className="space-y-6 max-w-3xl mx-auto">
              {[
                {
                  question: "L'ostéopathie est-elle remboursée ?",
                  answer:
                      "Les séances d'ostéopathie ne sont pas remboursées par la sécurité sociale. Cependant, de nombreuses mutuelles prennent en charge tout ou partie des frais. Une facture vous sera remise pour votre remboursement."
                },
                {
                  question: "Quels sont les tarifs des consultations ?",
                  answer:
                      "Le tarif standard est de 60€. Les consultations à domicile sont à 70€, et les tarifs pour les partenariats (entreprises, clubs sportifs) sont à 50€."
                },
                {
                  question: "Quels moyens de paiement acceptez-vous ?",
                  answer:
                      "Nous acceptons les paiements par carte bancaire, chèque et espèces."
                },
                {
                  question: "Combien de séances sont nécessaires ?",
                  answer:
                      "Le nombre de séances varie selon chaque patient et sa problématique. Une évaluation sera faite lors de la première consultation."
                },
                {
                  question: "Est-ce que les manipulations sont douloureuses ?",
                  answer:
                      "L'ostéopathie est une thérapie douce. Si certaines manipulations peuvent être sensibles, elles ne doivent pas être douloureuses."
                },
                {
                  question: "Puis-je venir consulter sans ordonnance ?",
                  answer:
                      "Oui, l'ostéopathie est une profession de première intention. Vous pouvez consulter directement, sans avoir besoin d'une prescription médicale."
                }
              ].map((item, index) => (
                  <details key={index} className="bg-white rounded-2xl p-6 shadow-lg group">
                    <summary className="text-lg font-display font-semibold cursor-pointer list-none">
                      {item.question}
                    </summary>
                    <p className="mt-4 text-gray-600">{item.answer}</p>
                  </details>
              ))}
            </div>
          </div>
        </section>


        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-display font-semibold mb-4">Cabinet d'Ostéopathie</h3>
                <p className="text-gray-400">
                  Votre santé entre de bonnes mains
                </p>
              </div>
              <div>
                <h3 className="text-xl font-display font-semibold mb-4">Contact</h3>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-center gap-2">
                    <MapPin size={16}/> Bâtiment L'Ultra 164 Rue de Charlieu, 42300 Roanne
                  </li>
                  <li className="flex items-center gap-2">
                    <Phone size={16}/> 07 69 77 23 80
                  </li>
                  <li className="flex items-center gap-2">
                    <Mail size={16}/> contact@osteo-roanne.fr
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-display font-semibold mb-4">Suivez-nous</h3>
                <div className="flex space-x-4">
                  <a href="#" className="hover:text-[#C1DCEF]">
                    <Facebook size={24}/>
                  </a>
                  <a href="#" className="hover:text-[#C7DFD1]">
                    <Instagram size={24}/>
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
              <p>© 2025 Cabinet d'Ostéopathie. Tous droits réservés.</p>
            </div>
          </div>
        </footer>
      </div>
  );
}

export default App;