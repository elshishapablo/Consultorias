import { lazy, Suspense } from 'react';
import NavbarLanding from '../components/Landing/NavbarLanding';
import HeroLanding from '../components/Landing/HeroLanding';

// Lazy load de secciones pesadas que no están "above the fold"
const DashboardsLanding = lazy(() => import('../components/Landing/DashboardsLanding'));
const GenteEnlazada = lazy(() => import('../components/Landing/GenteEnlazada'));
const Stats = lazy(() => import('../components/Landing/Stats'));
const QueHacemos = lazy(() => import('../components/Landing/QueHacemos'));
const Features = lazy(() => import('../components/Landing/Features'));
const Testimonios = lazy(() => import('../components/Landing/Testimonios'));
const Pricing = lazy(() => import('../components/Landing/Pricing'));
const FAQ = lazy(() => import('../components/Landing/FAQ'));
const Nosotros = lazy(() => import('../components/Landing/Nosotros'));
const Contacto = lazy(() => import('../components/Landing/Contacto'));
const Footer = lazy(() => import('../components/Footer/Footer'));

// Componente de placeholder para lazy loading
const LazySection = ({ children }) => (
  <Suspense fallback={<div className="min-h-[200px] bg-white" />}>
    {children}
  </Suspense>
);

const Landing = ({ onLoginClick, onRegisterClick }) => {
  return (
    <div className="min-h-screen bg-white">
      <NavbarLanding onLoginClick={onLoginClick} onRegisterClick={onRegisterClick} />
      <HeroLanding />
      <LazySection><DashboardsLanding /></LazySection>
      <LazySection><GenteEnlazada /></LazySection>
      <LazySection><Stats /></LazySection>
      <LazySection><QueHacemos /></LazySection>
      <LazySection><Features /></LazySection>
      <LazySection><Testimonios /></LazySection>
      <LazySection><Pricing /></LazySection>
      <LazySection><FAQ /></LazySection>
      <LazySection><Nosotros /></LazySection>
      <LazySection><Contacto /></LazySection>
      <LazySection><Footer /></LazySection>
    </div>
  );
};

export default Landing;

