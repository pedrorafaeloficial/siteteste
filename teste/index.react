import React, { useState, useEffect, Suspense, lazy, useRef } from 'react';
import { 
  Phone, 
  Calendar, 
  MapPin, 
  Menu, 
  X, 
  CheckCircle, 
  Clock, 
  Smile, 
  ShieldCheck, 
  Activity,
  Star,
  Facebook,
  Instagram,
  Linkedin
} from 'lucide-react';

// --- LIB/UTILS (Simulação do arquivo @/lib/utils.ts) ---
// Em um projeto real, instale clsx e tailwind-merge
function cn(...inputs: (string | undefined | null | false)[]) {
  return inputs.filter(Boolean).join(" ");
}

// --- COMPONENTS/UI/CARD (Simulação do arquivo @/components/ui/card.tsx) ---
const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className
    )}
    {...props}
  />
))
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

// --- COMPONENTS/UI/SPOTLIGHT (aceternity/spotlight) ---
type SpotlightProps = {
  className?: string;
  fill?: string;
};

const Spotlight = ({ className, fill }: SpotlightProps) => {
  return (
    <svg
      className={cn(
        "animate-spotlight pointer-events-none absolute z-[1]  h-[169%] w-[138%] lg:w-[84%] opacity-0",
        className
      )}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 3787 2842"
      fill="none"
    >
      <g filter="url(#filter)">
        <ellipse
          cx="1924.71"
          cy="273.501"
          rx="1924.71"
          ry="273.501"
          transform="matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)"
          fill={fill || "white"}
          fillOpacity="0.21"
        ></ellipse>
      </g>
      <defs>
        <filter
          id="filter"
          x="0.860352"
          y="0.838989"
          width="3785.16"
          height="2840.26"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          ></feBlend>
          <feGaussianBlur
            stdDeviation="151"
            result="effect1_foregroundBlur_1065_8"
          ></feGaussianBlur>
        </filter>
      </defs>
    </svg>
  );
};

// --- COMPONENTS/UI/SPLITE (splite.tsx) ---
// MOCK SPLINE FOR PREVIEW: The real @splinetool/react-spline package is not available in this environment.
// In your local project, uncomment the real import and remove the MockSpline.

// const Spline = lazy(() => import('@splinetool/react-spline')) <-- REAL IMPORT

// MOCK IMPLEMENTATION START
const MockSpline = ({ scene, className }: { scene: string, className?: string }) => (
  <div className={cn("flex items-center justify-center bg-gradient-to-br from-neutral-800 to-neutral-900 overflow-hidden relative", className)}>
    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1629909615184-74f495363b63?q=80&w=2069&auto=format&fit=crop')] opacity-20 bg-cover bg-center mix-blend-overlay"></div>
    <div className="text-center p-8 z-10">
       <div className="w-24 h-24 mx-auto mb-4 relative animate-pulse">
         <div className="absolute inset-0 bg-blue-500 rounded-full blur-xl opacity-50"></div>
         <ShieldCheck className="w-full h-full text-blue-400 relative z-10" />
       </div>
       <p className="text-blue-300 font-bold text-lg mb-2">Visualização 3D Interativa</p>
       <p className="text-xs text-neutral-500 font-mono bg-black/50 p-2 rounded border border-neutral-800 break-all">
         {scene}
       </p>
       <p className="text-xs text-neutral-400 mt-4 max-w-xs mx-auto">
         (Visualização simulada. Instale @splinetool/react-spline para ver o modelo 3D real)
       </p>
    </div>
  </div>
);
const Spline = MockSpline; 
// MOCK IMPLEMENTATION END

interface SplineSceneProps {
  scene: string
  className?: string
}

function SplineScene({ scene, className }: SplineSceneProps) {
  return (
    <Suspense 
      fallback={
        <div className="w-full h-full flex items-center justify-center">
          <span className="loader">Loading 3D...</span>
        </div>
      }
    >
      <Spline
        scene={scene}
        className={className}
      />
    </Suspense>
  )
}

// --- DEMO COMPONENT (demo.tsx) ---
function SplineSceneBasic() {
  return (
    <Card className="w-full h-[500px] bg-black/[0.96] relative overflow-hidden border-neutral-800">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      
      <div className="flex flex-col md:flex-row h-full">
        {/* Left content */}
        <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            Odontologia Digital
          </h1>
          <p className="mt-4 text-neutral-300 max-w-lg">
            Utilizamos escaneamento intraoral 3D e planejamento digital para mostrar seu novo sorriso antes mesmo de iniciar o tratamento.
          </p>
          <div className="mt-8 flex gap-4">
             <div className="flex items-center gap-2 text-neutral-400 text-sm">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                Precisão Milimétrica
             </div>
             <div className="flex items-center gap-2 text-neutral-400 text-sm">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                Sem Moldagens
             </div>
          </div>
        </div>

        {/* Right content */}
        <div className="flex-1 relative min-h-[300px] md:min-h-auto">
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>
    </Card>
  )
}

// --- MAIN APP COMPONENT ---

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setIsMenuOpen(false);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('success');
      setTimeout(() => setFormStatus('idle'), 5000);
    }, 1500);
  };

  const services = [
    {
      title: "Clareamento Dental",
      desc: "Tecnologia avançada para devolver o brilho natural do seu sorriso com segurança e rapidez.",
      icon: <Smile className="w-8 h-8 text-blue-500" />
    },
    {
      title: "Implantes Dentários",
      desc: "Soluções definitivas para repor dentes perdidos, recuperando a estética e a função mastigatória.",
      icon: <ShieldCheck className="w-8 h-8 text-blue-500" />
    },
    {
      title: "Ortodontia Estética",
      desc: "Alinhadores invisíveis e aparelhos modernos para corrigir seu sorriso com discrição.",
      icon: <Activity className="w-8 h-8 text-blue-500" />
    },
    {
      title: "Clínica Geral",
      desc: "Prevenção, restaurações e check-ups periódicos para manter sua saúde bucal em dia.",
      icon: <CheckCircle className="w-8 h-8 text-blue-500" />
    }
  ];

  const testimonials = [
    {
      name: "Mariana Silva",
      text: "O atendimento foi impecável do início ao fim. Fiz meu clareamento e o resultado superou minhas expectativas!",
      stars: 5
    },
    {
      name: "Carlos Eduardo",
      text: "Profissionais extremamente qualificados. Fiz um implante e me senti muito seguro durante todo o processo.",
      stars: 5
    },
    {
      name: "Fernanda Lima",
      text: "Ambiente acolhedor e tecnologia de ponta. Recomendo para todos da minha família.",
      stars: 5
    }
  ];

  return (
    <div className="font-sans text-gray-800 bg-gray-50">
      
      {/* Navbar */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('home')}>
            <div className="bg-blue-600 text-white p-2 rounded-lg">
              <Smile size={24} />
            </div>
            <span className={`text-2xl font-bold ${scrolled ? 'text-blue-900' : 'text-blue-900 md:text-white'}`}>
              Odonto<span className="text-blue-500">Prime</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8 items-center">
            {['Início', 'Tecnologia', 'Serviços', 'Sobre', 'Depoimentos'].map((item, idx) => {
              const id = item.toLowerCase().replace('í', 'i').replace('ç', 'c');
              return (
                <button 
                  key={idx}
                  onClick={() => scrollToSection(id === 'inicio' ? 'home' : id)}
                  className={`font-medium hover:text-blue-500 transition-colors ${scrolled ? 'text-gray-600' : 'text-white/90 hover:text-white'}`}
                >
                  {item}
                </button>
              );
            })}
            <button 
              onClick={() => scrollToSection('contato')}
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full font-medium transition-all transform hover:scale-105 shadow-lg"
            >
              Agendar Consulta
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className="md:hidden text-blue-600 p-2">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t animate-fade-in-down">
            <div className="flex flex-col p-4 gap-4">
              {['Início', 'Tecnologia', 'Serviços', 'Sobre', 'Depoimentos', 'Contato'].map((item, idx) => {
                 const id = item.toLowerCase().replace('í', 'i').replace('ç', 'c');
                 return (
                  <button 
                    key={idx}
                    onClick={() => scrollToSection(id === 'inicio' ? 'home' : id)}
                    className="text-left py-2 border-b border-gray-100 text-gray-600 hover:text-blue-600"
                  >
                    {item}
                  </button>
                 );
              })}
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center pt-16">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            alt="Consultório Odontológico Moderno" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/40"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center md:text-left">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 text-blue-50 px-4 py-2 rounded-full mb-6">
              <Star className="w-4 h-4 fill-current" />
              <span className="text-sm font-medium">Clínica Odontológica de Excelência</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Seu melhor sorriso <br/> começa aqui.
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed">
              Cuidamos da sua saúde bucal com tecnologia avançada, conforto e uma equipe de especialistas dedicados ao seu bem-estar.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
              <button 
                onClick={() => scrollToSection('contato')}
                className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-lg hover:shadow-blue-500/30 flex items-center justify-center gap-2"
              >
                <Calendar className="w-5 h-5" />
                Agendar Agora
              </button>
              <button 
                onClick={() => scrollToSection('sobre')}
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-lg font-bold text-lg transition-all flex items-center justify-center gap-2"
              >
                Conheça a Clínica
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full bg-white/95 backdrop-blur shadow-lg py-6 hidden md:block">
          <div className="container mx-auto px-4 flex justify-around">
            <div className="flex items-center gap-3">
              <div className="bg-blue-100 p-3 rounded-full text-blue-600"><CheckCircle /></div>
              <div>
                <p className="text-2xl font-bold text-gray-900">+5.000</p>
                <p className="text-sm text-gray-600">Pacientes Atendidos</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-blue-100 p-3 rounded-full text-blue-600"><Star /></div>
              <div>
                <p className="text-2xl font-bold text-gray-900">15 Anos</p>
                <p className="text-sm text-gray-600">De Experiência</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-blue-100 p-3 rounded-full text-blue-600"><Activity /></div>
              <div>
                <p className="text-2xl font-bold text-gray-900">24h</p>
                <p className="text-sm text-gray-600">Suporte Emergencial</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3D TECHNOLOGY SECTION (NEW INTEGRATION) */}
      <section id="tecnologia" className="py-12 bg-gray-900">
        <div className="container mx-auto px-4">
           <SplineSceneBasic />
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-blue-600 font-bold tracking-wide uppercase text-sm mb-2">Tratamentos Especializados</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">Cuidamos de tudo para você</h3>
            <div className="w-20 h-1 bg-blue-500 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="group bg-gray-50 rounded-2xl p-8 hover:bg-white border border-transparent hover:border-blue-100 hover:shadow-xl transition-all duration-300">
                <div className="mb-6 bg-white w-16 h-16 rounded-xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h4>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {service.desc}
                </p>
                <a href="#" className="text-blue-600 font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                  Saiba mais <span className="text-lg">→</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20 bg-blue-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1559839734-2b71ea86b3f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80" 
                  alt="Dentista atendendo paciente" 
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-200 rounded-full blur-xl opacity-60"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-400 rounded-full blur-xl opacity-40"></div>
            </div>

            <div className="lg:w-1/2">
              <h2 className="text-blue-600 font-bold tracking-wide uppercase text-sm mb-2">Sobre Nós</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Combinamos experiência humana com tecnologia de ponta
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Na OdontoPrime, acreditamos que um sorriso saudável é a chave para a autoconfiança. Fundada há mais de 15 anos pela Dra. Ana Clara Mendes, nossa clínica se tornou referência em reabilitação oral e estética.
              </p>
              
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {[
                  "Equipe Multidisciplinar",
                  "Atendimento Humanizado",
                  "Equipamentos Modernos",
                  "Ambiente Climatizado",
                  "Estacionamento Próprio",
                  "Acessibilidade Total"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-gray-700">
                    <CheckCircle className="text-blue-500 w-5 h-5" />
                    {item}
                  </li>
                ))}
              </ul>

              <button onClick={() => scrollToSection('contato')} className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-lg font-medium transition-colors">
                Agende uma Avaliação
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="depoimentos" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">O que dizem nossos pacientes</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A satisfação dos nossos pacientes é o nosso maior cartão de visita.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div key={idx} className="bg-white border border-gray-100 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
                </div>
                <p className="text-gray-600 italic mb-6">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">{t.name}</p>
                    <p className="text-sm text-gray-500">Paciente</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            
            <div className="lg:w-1/3">
              <h2 className="text-3xl font-bold mb-6">Entre em Contato</h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Estamos prontos para atender você. Agende sua consulta pelo formulário, telefone ou visite nossa clínica.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-600 p-3 rounded-lg mt-1">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold">Localização</h4>
                    <p className="text-gray-400">Av. Paulista, 1000 - Sala 402<br/>São Paulo, SP - Brasil</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-600 p-3 rounded-lg mt-1">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold">Telefones</h4>
                    <p className="text-gray-400">(11) 99999-8888</p>
                    <p className="text-gray-400">(11) 3333-2222</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-2/3 bg-white rounded-2xl p-8 lg:p-12 text-gray-800">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Agende sua Consulta Online</h3>
              
              {formStatus === 'success' ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center animate-fade-in">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle size={32} />
                  </div>
                  <h4 className="text-2xl font-bold text-green-800 mb-2">Solicitação Enviada!</h4>
                  <p className="text-green-700">Recebemos seu pedido. Nossa equipe entrará em contato em breve.</p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Nome Completo</label>
                      <input required type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="Seu nome" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Telefone</label>
                      <input required type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="(00) 00000-0000" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">E-mail</label>
                      <input required type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="seu@email.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Serviço de Interesse</label>
                      <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white">
                        <option>Avaliação Geral</option>
                        <option>Clareamento</option>
                        <option>Implantes</option>
                        <option>Ortodontia</option>
                      </select>
                    </div>
                  </div>

                  <button 
                    disabled={formStatus === 'submitting'}
                    type="submit" 
                    className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-lg transition-all shadow-lg flex justify-center items-center ${formStatus === 'submitting' ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {formStatus === 'submitting' ? 'Enviando...' : 'Confirmar Agendamento'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-400 py-12 border-t border-gray-800">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <Smile className="text-blue-500" size={24} />
            <span className="text-white text-lg font-bold">Odonto<span className="text-blue-500">Prime</span></span>
          </div>
          <div>
            &copy; {new Date().getFullYear()} OdontoPrime.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
