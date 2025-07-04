
import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-2">
      <Globe className="h-4 w-4 text-white" />
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setLanguage(language === 'en' ? 'sw' : 'en')}
        className="text-white hover:text-yellow-400 hover:bg-slate-800 px-2 py-1 text-sm"
      >
        {language === 'en' ? 'Kiswahili' : 'English'}
      </Button>
    </div>
  );
};

export default LanguageSwitcher;
