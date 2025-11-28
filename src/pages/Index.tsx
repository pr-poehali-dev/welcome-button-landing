import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [showServices, setShowServices] = useState(false);

  return (
    <div className="min-h-screen overflow-hidden">
      {!showServices ? (
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
          
          <div className="relative z-10 text-center animate-fade-in">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-8 drop-shadow-2xl tracking-tight">
              Приветствуем!
            </h1>
            
            <div className="animate-scale-in" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
              <Button
                onClick={() => setShowServices(true)}
                size="lg"
                className="text-xl md:text-2xl px-12 py-8 rounded-full bg-white text-primary hover:bg-white/90 hover:scale-110 transition-all duration-300 shadow-2xl font-semibold"
              >
                Готова
                <Icon name="ChevronRight" className="ml-2" size={28} />
              </Button>
            </div>
          </div>

          <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-3 animate-fade-in" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-3 h-3 rounded-full bg-white/60"
                style={{
                  animation: `pulse 2s ease-in-out infinite`,
                  animationDelay: `${i * 0.3}s`
                }}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-gradient-to-br from-background via-primary/5 to-secondary/10">
          <div className="max-w-3xl w-full text-center space-y-12 animate-fade-in">
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

            <button
              onClick={() => setShowServices(false)}
              className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 mx-auto group"
            >
              <Icon name="ArrowLeft" className="group-hover:-translate-x-1 transition-transform" size={20} />
              <span className="text-lg">Назад</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
