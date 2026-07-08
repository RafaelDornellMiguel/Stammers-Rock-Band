import { LanguageProvider } from './i18n/LanguageContext';
import { Header } from './components/Header';
import {
  ProgressBar,
  Hero,
  Biography,
  Videos,
  Album,
  Tour,
  Photos,
  Contact,
  WhatsAppFloat,
  Footer,
} from './components/Sections';

export default function App() {
  return (
    <LanguageProvider>
      <ProgressBar />
      <Header />
      <main>
        <Hero />
        <Biography />
        <Videos />
        <Album />
        <Tour />
        <Photos />
        <Contact />
      </main>
      <WhatsAppFloat />
      <Footer />
    </LanguageProvider>
  );
}
