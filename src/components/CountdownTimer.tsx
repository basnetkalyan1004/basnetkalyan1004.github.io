import { useState, useEffect } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = () => {
  // Set launch date to 30 days from now
  const [targetDate] = useState(() => {
    const date = new Date();
    date.setDate(date.getDate() + 30);
    return date;
  });

  const calculateTimeLeft = (): TimeLeft => {
    const difference = +targetDate - +new Date();
    
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());
  const [prevSeconds, setPrevSeconds] = useState(timeLeft.seconds);

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      setPrevSeconds(timeLeft.seconds);
      setTimeLeft(newTimeLeft);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft.seconds]);

  const TimeBlock = ({ value, label, isFlipping }: { value: number; label: string; isFlipping?: boolean }) => (
    <div className="flex flex-col items-center">
      <div 
        className={`relative w-20 h-24 sm:w-28 sm:h-32 md:w-32 md:h-36 rounded-xl neon-border bg-secondary/30 backdrop-blur-md flex items-center justify-center overflow-hidden ${
          isFlipping ? 'animate-pulse-glow' : ''
        }`}
      >
        {/* Background glow effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-primary/5" />
        
        {/* Number */}
        <span 
          className={`font-display text-4xl sm:text-5xl md:text-6xl font-bold text-foreground text-glow transition-transform duration-300 ${
            isFlipping ? 'scale-110' : 'scale-100'
          }`}
        >
          {value.toString().padStart(2, '0')}
        </span>
        
        {/* Reflection line */}
        <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      </div>
      
      <span className="mt-3 text-xs sm:text-sm uppercase tracking-widest text-muted-foreground font-medium">
        {label}
      </span>
    </div>
  );

  return (
    <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
      <TimeBlock value={timeLeft.days} label="Days" />
      <TimeBlock value={timeLeft.hours} label="Hours" />
      <TimeBlock value={timeLeft.minutes} label="Minutes" />
      <TimeBlock value={timeLeft.seconds} label="Seconds" isFlipping={prevSeconds !== timeLeft.seconds} />
    </div>
  );
};

export default CountdownTimer;
