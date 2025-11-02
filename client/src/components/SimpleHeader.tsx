import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';

interface SimpleHeaderProps {
  onBack: () => void;
}

export function SimpleHeader({ onBack }: SimpleHeaderProps) {
  return (
    <header className="flex items-center justify-between py-4">
      <Button
        variant="ghost"
        onClick={onBack}
        className="text-slate-200 hover:text-white hover:bg-slate-700"
      >
        <ChevronLeft className="h-5 w-5 mr-2" />
        Back to Home
      </Button>
      <h1 className="text-3xl font-bold text-white">AI CropAdvisor</h1>
    </header>
  );
}