import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [currentPage, setCurrentPage] = useState<'welcome' | 'services' | 'contact'>('welcome');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen overflow-hidden">
      {currentPage === 'welcome' && (
        <div className="relative min-h-screen flex flex-col items-center justify-center px-4">
          <div 
            className="absolute inset-0 opacity-60"
            style={{
              background: 'linear-gradient(135deg, #9b87f5, #D946EF, #F97316, #0EA5E9)',
              backgroundSize: '400% 400%',
              animation: 'gradient-shift 8s ease infinite'
            }}
          />
          
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background/80" />
          
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div 
              className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-float"
              style={{
                transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`
              }}
            />
            <div 
              className="absolute top-40 right-20 w-48 h-48 bg-primary/20 rounded-full blur-3xl animate-float-slow"
              style={{
                transform: `translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px)`
              }}
            />
            <div 
              className="absolute bottom-32 left-1/4 w-40 h-40 bg-secondary/15 rounded-full blur-2xl animate-float"
              style={{
                animationDelay: '2s',
                transform: `translate(${mousePosition.x * 0.4}px, ${mousePosition.y * 0.4}px)`
              }}
            />
            <div 
              className="absolute top-1/3 right-1/3 w-24 h-24 bg-accent/20 rounded-full blur-xl animate-float-slow"
              style={{
                animationDelay: '1s',
                transform: `translate(${mousePosition.x * 0.6}px, ${mousePosition.y * 0.6}px)`
              }}
            />
            
            <div 
              className="absolute top-1/4 left-1/2 w-2 h-2 bg-white/60 rounded-full animate-float"
              style={{
                animationDelay: '0.5s',
                transform: `translate(${mousePosition.x * 0.8}px, ${mousePosition.y * 0.8}px)`
              }}
            />
            <div 
              className="absolute top-1/2 left-1/4 w-3 h-3 bg-white/50 rounded-full animate-float-slow"
              style={{
                animationDelay: '1.5s',
                transform: `translate(${mousePosition.x * 0.7}px, ${mousePosition.y * 0.7}px)`
              }}
            />
            <div 
              className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-white/70 rounded-full animate-float"
              style={{
                animationDelay: '3s',
                transform: `translate(${mousePosition.x * 0.9}px, ${mousePosition.y * 0.9}px)`
              }}
            />
            <div 
              className="absolute top-2/3 right-1/3 w-3 h-3 bg-white/40 rounded-full animate-float-slow"
              style={{
                animationDelay: '2.5s',
                transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`
              }}
            />
            
            <svg 
              className="absolute top-1/4 right-1/4 w-24 h-24 text-white/10 animate-float"
              style={{
                animationDelay: '1s',
                transform: `translate(${mousePosition.x * 0.4}px, ${mousePosition.y * 0.4}px)`
              }}
              viewBox="0 0 100 100"
            >
              <polygon points="50,15 90,85 10,85" fill="currentColor" />
            </svg>
            <svg 
              className="absolute bottom-1/4 left-1/3 w-32 h-32 text-primary/10 animate-float-slow"
              style={{
                animationDelay: '2s',
                transform: `translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px)`
              }}
              viewBox="0 0 100 100"
            >
              <rect x="10" y="10" width="80" height="80" fill="currentColor" transform="rotate(45 50 50)" />
            </svg>
            <svg 
              className="absolute top-1/2 left-10 w-20 h-20 text-secondary/15 animate-float"
              style={{
                animationDelay: '3s',
                transform: `translate(${mousePosition.x * 0.6}px, ${mousePosition.y * 0.6}px)`
              }}
              viewBox="0 0 100 100"
            >
              <circle cx="50" cy="50" r="40" fill="currentColor" />
            </svg>
          </div>
          
          <div className="relative z-10 text-center animate-fade-in">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-8 drop-shadow-2xl tracking-tight">
              Приветствуем!
            </h1>
            
            <div className="animate-scale-in" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
              <Button
                onClick={() => setCurrentPage('services')}
                size="lg"
                className="text-xl md:text-2xl px-12 py-8 rounded-full bg-white text-primary hover:bg-white/90 hover:scale-110 transition-all duration-300 shadow-2xl font-semibold"
              >
                Готова
                <Icon name="ChevronRight" className="ml-2" size={28} />
              </Button>
            </div>
          </div>

          <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-3 animate-fade-in" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
            {['welcome', 'services', 'contact'].map((page, i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentPage === page ? 'bg-white w-8' : 'bg-white/60'
                }`}
                style={{
                  animation: `pulse 2s ease-in-out infinite`,
                  animationDelay: `${i * 0.3}s`
                }}
              />
            ))}
          </div>
        </div>
      )}

      {currentPage === 'services' && (
        <div className="relative min-h-screen flex flex-col items-center justify-center px-4 bg-gradient-to-br from-background via-primary/5 to-secondary/10">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div 
              className="absolute top-10 right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl animate-float-slow"
              style={{
                transform: `translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px)`
              }}
            />
            <div 
              className="absolute bottom-20 left-10 w-48 h-48 bg-secondary/10 rounded-full blur-3xl animate-float"
              style={{
                animationDelay: '1s',
                transform: `translate(${mousePosition.x * 0.4}px, ${mousePosition.y * 0.4}px)`
              }}
            />
            <div 
              className="absolute top-1/2 right-1/4 w-32 h-32 bg-accent/10 rounded-full blur-2xl animate-float-slow"
              style={{
                animationDelay: '2s',
                transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`
              }}
            />
            
            <svg 
              className="absolute top-1/3 left-1/4 w-28 h-28 text-primary/5 animate-float"
              style={{
                animationDelay: '0.5s',
                transform: `translate(${mousePosition.x * 0.4}px, ${mousePosition.y * 0.4}px)`
              }}
              viewBox="0 0 100 100"
            >
              <polygon points="50,15 90,85 10,85" fill="currentColor" />
            </svg>
            <svg 
              className="absolute bottom-1/3 right-1/3 w-24 h-24 text-secondary/5 animate-float-slow"
              style={{
                animationDelay: '1.5s',
                transform: `translate(${mousePosition.x * 0.6}px, ${mousePosition.y * 0.6}px)`
              }}
              viewBox="0 0 100 100"
            >
              <rect x="10" y="10" width="80" height="80" fill="currentColor" transform="rotate(45 50 50)" />
            </svg>
          </div>
          
          <div className="relative z-10 max-w-3xl w-full text-center space-y-12 animate-fade-in">
            <div className="space-y-6">
              <h2 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
                По услугам ко мне
              </h2>
              
              <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full" />
            </div>

            <div className="animate-scale-in" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
              <a
                href="https://web.telegram.org/a/#-1003312770148"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button
                  size="lg"
                  className="text-xl md:text-2xl px-16 py-10 rounded-full bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90 hover:scale-105 transition-all duration-300 shadow-2xl font-semibold group"
                >
                  <Icon name="Send" className="mr-3 group-hover:translate-x-1 transition-transform" size={28} />
                  Перейти в Telegram
                  <Icon name="ExternalLink" className="ml-3" size={24} />
                </Button>
              </a>
            </div>

            <div className="flex items-center justify-center gap-6">
              <button
                onClick={() => setCurrentPage('welcome')}
                className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 group"
              >
                <Icon name="ArrowLeft" className="group-hover:-translate-x-1 transition-transform" size={20} />
                <span className="text-lg">Назад</span>
              </button>
              
              <button
                onClick={() => setCurrentPage('contact')}
                className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 group"
              >
                <span className="text-lg">Далее</span>
                <Icon name="ArrowRight" className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>
            </div>
          </div>

          <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-3">
            {['welcome', 'services', 'contact'].map((page, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(page as any)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentPage === page ? 'bg-primary w-8' : 'bg-muted-foreground/30 hover:bg-muted-foreground/60'
                }`}
              />
            ))}
          </div>
        </div>
      )}

      {currentPage === 'contact' && (
        <div className="relative min-h-screen flex flex-col items-center justify-center px-4 bg-gradient-to-br from-background via-accent/5 to-primary/10">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div 
              className="absolute top-32 left-20 w-44 h-44 bg-accent/15 rounded-full blur-3xl animate-float"
              style={{
                transform: `translate(${mousePosition.x * 0.4}px, ${mousePosition.y * 0.4}px)`
              }}
            />
            <div 
              className="absolute bottom-40 right-16 w-52 h-52 bg-primary/10 rounded-full blur-3xl animate-float-slow"
              style={{
                animationDelay: '1.5s',
                transform: `translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px)`
              }}
            />
            <div 
              className="absolute top-1/2 left-1/3 w-36 h-36 bg-secondary/10 rounded-full blur-2xl animate-float"
              style={{
                animationDelay: '0.8s',
                transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`
              }}
            />
            
            <svg 
              className="absolute top-20 right-1/3 w-32 h-32 text-accent/8 animate-float-slow"
              style={{
                animationDelay: '1s',
                transform: `translate(${mousePosition.x * 0.4}px, ${mousePosition.y * 0.4}px)`
              }}
              viewBox="0 0 100 100"
            >
              <circle cx="50" cy="50" r="40" fill="currentColor" />
            </svg>
            <svg 
              className="absolute bottom-1/4 left-1/4 w-28 h-28 text-primary/8 animate-float"
              style={{
                animationDelay: '2s',
                transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`
              }}
              viewBox="0 0 100 100"
            >
              <polygon points="50,15 90,85 10,85" fill="currentColor" />
            </svg>
          </div>
          
          <div className="relative z-10 max-w-3xl w-full text-center space-y-12 animate-fade-in">
            <div className="space-y-6">
              <h2 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-accent via-primary to-secondary">
                Если проблемы
                <br />
                пиши в лс
              </h2>
              
              <div className="w-24 h-1 bg-gradient-to-r from-accent via-primary to-secondary mx-auto rounded-full" />
            </div>

            <div className="animate-scale-in space-y-6" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
              <a
                href="https://t.me/dddddd1003"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button
                  size="lg"
                  className="text-xl md:text-2xl px-16 py-10 rounded-full bg-gradient-to-r from-accent to-primary hover:opacity-90 hover:scale-105 transition-all duration-300 shadow-2xl font-semibold group"
                >
                  <Icon name="MessageCircle" className="mr-3 group-hover:scale-110 transition-transform" size={28} />
                  @dddddd1003
                  <Icon name="ExternalLink" className="ml-3" size={24} />
                </Button>
              </a>
              
              <p className="text-muted-foreground text-lg">
                Напишите мне напрямую для решения любых вопросов
              </p>
            </div>

            <button
              onClick={() => setCurrentPage('services')}
              className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 mx-auto group"
            >
              <Icon name="ArrowLeft" className="group-hover:-translate-x-1 transition-transform" size={20} />
              <span className="text-lg">Назад</span>
            </button>
          </div>

          <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-3">
            {['welcome', 'services', 'contact'].map((page, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(page as any)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentPage === page ? 'bg-accent w-8' : 'bg-muted-foreground/30 hover:bg-muted-foreground/60'
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
