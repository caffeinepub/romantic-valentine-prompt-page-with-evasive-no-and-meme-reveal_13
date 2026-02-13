import { useState, useRef, useEffect } from 'react';
import { Heart, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

function App() {
  const [answered, setAnswered] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const noButtonRef = useRef<HTMLButtonElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Initialize No button position to center-right
  useEffect(() => {
    if (noButtonRef.current && containerRef.current) {
      const container = containerRef.current.getBoundingClientRect();
      const button = noButtonRef.current.getBoundingClientRect();
      setNoButtonPosition({
        x: container.width / 2 + 80,
        y: container.height / 2 - button.height / 2
      });
    }
  }, []);

  const moveNoButton = () => {
    if (!containerRef.current || !noButtonRef.current) return;

    const container = containerRef.current.getBoundingClientRect();
    const button = noButtonRef.current.getBoundingClientRect();

    // Generate random position within container bounds
    const maxX = container.width - button.width - 40;
    const maxY = container.height - button.height - 40;
    
    const newX = Math.random() * maxX + 20;
    const newY = Math.random() * maxY + 20;

    setNoButtonPosition({ x: newX, y: newY });
  };

  const handleYesClick = () => {
    setAnswered(true);
  };

  if (answered) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-romantic-light via-romantic-medium to-romantic-accent p-4 relative overflow-hidden">
        {/* Cute pattern background */}
        <div 
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: 'url(/assets/generated/cute-pattern-bg.dim_1600x900.png)',
            backgroundSize: '800px 450px',
            backgroundRepeat: 'repeat'
          }}
        />
        
        {/* Floating decorative stickers - top left */}
        <img
          src="/assets/generated/cute-stickers-1.dim_512x512.png"
          alt=""
          className="absolute top-8 left-8 w-24 h-24 md:w-32 md:h-32 opacity-80 animate-float pointer-events-none"
          style={{ animationDelay: '0s' }}
        />
        
        {/* Floating decorative stickers - top right */}
        <img
          src="/assets/generated/cute-stickers-1.dim_512x512.png"
          alt=""
          className="absolute top-12 right-12 w-20 h-20 md:w-28 md:h-28 opacity-70 animate-float pointer-events-none"
          style={{ animationDelay: '1s' }}
        />
        
        {/* Floating decorative stickers - bottom left */}
        <img
          src="/assets/generated/cute-stickers-1.dim_512x512.png"
          alt=""
          className="absolute bottom-16 left-16 w-28 h-28 md:w-36 md:h-36 opacity-75 animate-float pointer-events-none"
          style={{ animationDelay: '0.5s' }}
        />
        
        {/* Floating decorative stickers - bottom right */}
        <img
          src="/assets/generated/cute-stickers-1.dim_512x512.png"
          alt=""
          className="absolute bottom-20 right-8 w-24 h-24 md:w-32 md:h-32 opacity-80 animate-float pointer-events-none"
          style={{ animationDelay: '1.5s' }}
        />

        {/* Sparkle accents */}
        <Sparkles className="absolute top-1/4 left-1/4 w-8 h-8 text-romantic-accent animate-twinkle pointer-events-none" style={{ animationDelay: '0s' }} />
        <Sparkles className="absolute top-1/3 right-1/4 w-6 h-6 text-romantic-accent animate-twinkle pointer-events-none" style={{ animationDelay: '0.7s' }} />
        <Sparkles className="absolute bottom-1/3 left-1/3 w-7 h-7 text-romantic-accent animate-twinkle pointer-events-none" style={{ animationDelay: '1.4s' }} />
        <Sparkles className="absolute bottom-1/4 right-1/3 w-5 h-5 text-romantic-accent animate-twinkle pointer-events-none" style={{ animationDelay: '2.1s' }} />

        {/* Main content card */}
        <div className="relative z-10 text-center animate-fade-in max-w-4xl mx-auto px-4">
          <div className="bg-white/60 backdrop-blur-sm rounded-[2.5rem] p-8 md:p-12 shadow-cute border-4 border-white/80">
            <div className="mb-6 flex justify-center">
              <Heart className="w-16 h-16 text-romantic-deep fill-romantic-deep animate-pulse" />
            </div>
            
            <div className="bg-white/80 rounded-3xl p-4 mb-8 shadow-soft">
              <img
                src="/assets/generated/valentine-meme.dim_1200x900.png"
                alt="Good choice ❤️"
                className="max-w-full w-full max-h-[50vh] object-contain rounded-2xl animate-scale-in"
              />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-romantic-deep mb-6">
              Good choice ❤️
            </h2>
            
            <p className="text-xl md:text-2xl text-romantic-deep/90 leading-relaxed max-w-3xl mx-auto">
              You didn't just become part of my life, you became the reason it feels alive. Loving you is the deepest thing I've ever known, and even in a world full of everything, you are my world—my forever, my home.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-romantic-light via-romantic-medium to-romantic-accent">
      <main className="flex-1 flex items-center justify-center p-4">
        <div 
          ref={containerRef}
          className="relative w-full max-w-4xl h-[600px] flex flex-col items-center justify-center"
        >
          <div className="text-center mb-16 animate-fade-in">
            <div className="mb-6 flex justify-center gap-3">
              <Heart className="w-12 h-12 text-romantic-deep fill-romantic-deep animate-bounce" style={{ animationDelay: '0ms' }} />
              <Heart className="w-12 h-12 text-romantic-deep fill-romantic-deep animate-bounce" style={{ animationDelay: '150ms' }} />
              <Heart className="w-12 h-12 text-romantic-deep fill-romantic-deep animate-bounce" style={{ animationDelay: '300ms' }} />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-romantic-deep mb-6 leading-tight">
              Will you be my Valentine?
            </h1>
            <p className="text-2xl text-romantic-deep/70">
              Choose wisely... 💖
            </p>
          </div>

          <div className="relative flex gap-8 items-center justify-center z-10">
            <Button
              onClick={handleYesClick}
              size="lg"
              className="text-2xl px-12 py-8 h-auto bg-romantic-deep hover:bg-romantic-deep/90 text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 font-bold"
            >
              Yes! 💕
            </Button>

            <Button
              ref={noButtonRef}
              onPointerEnter={moveNoButton}
              onPointerDown={moveNoButton}
              onTouchStart={moveNoButton}
              size="lg"
              variant="outline"
              className="text-2xl px-12 py-8 h-auto border-2 border-romantic-deep/30 text-romantic-deep/60 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 font-bold absolute"
              style={{
                left: `${noButtonPosition.x}px`,
                top: `${noButtonPosition.y}px`,
                transition: 'left 0.3s ease-out, top 0.3s ease-out'
              }}
            >
              No
            </Button>
          </div>
        </div>
      </main>

      <footer className="py-6 text-center text-romantic-deep/60 text-sm">
        <p>
          © {new Date().getFullYear()} • Built with <Heart className="inline w-4 h-4 fill-romantic-deep text-romantic-deep" /> using{' '}
          <a
            href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-romantic-deep transition-colors underline"
          >
            caffeine.ai
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
