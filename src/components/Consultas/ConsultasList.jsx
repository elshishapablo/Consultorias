import { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import ConsultaCard from './ConsultaCard';

// Mock data de consultas
const mockConsultas = [
  {
    id: 1,
    usuario: 'María González',
    pregunta: '¿Cómo optimizar una query SQL con múltiples JOINs?',
    tiempo: 'Hace 5 minutos',
    duracion: '12 min',
    costo: '30.00',
    estado: 'activa',
    respuestas: 3,
    tecnologia: 'SQL'
  },
  {
    id: 2,
    usuario: 'Carlos Ramírez',
    pregunta: 'Error al hacer deploy en Vercel, me sale timeout',
    tiempo: 'Hace 15 minutos',
    duracion: '8 min',
    costo: '20.00',
    estado: 'resuelta',
    respuestas: 1,
    tecnologia: 'React'
  },
  {
    id: 3,
    usuario: 'Ana Martínez',
    pregunta: 'Cómo implementar autenticación JWT en Node.js?',
    tiempo: 'Hace 20 minutos',
    duracion: '15 min',
    costo: '37.50',
    estado: 'activa',
    respuestas: 5,
    tecnologia: 'Node.js'
  },
  {
    id: 4,
    usuario: 'Luis Fernández',
    pregunta: 'Problema con CORS en mi API REST',
    tiempo: 'Hace 30 minutos',
    duracion: '10 min',
    costo: '25.00',
    estado: 'resuelta',
    respuestas: 2,
    tecnologia: 'Python'
  },
  {
    id: 5,
    usuario: 'Sofia López',
    pregunta: 'Cómo hacer un componente reutilizable en React?',
    tiempo: 'Hace 45 minutos',
    duracion: '18 min',
    costo: '45.00',
    estado: 'activa',
    respuestas: 4,
    tecnologia: 'React'
  },
  {
    id: 6,
    usuario: 'Diego Torres',
    pregunta: 'Error 500 en producción, no sé qué está pasando',
    tiempo: 'Hace 1 hora',
    duracion: '20 min',
    costo: '50.00',
    estado: 'resuelta',
    respuestas: 1,
    tecnologia: 'TypeScript'
  }
];

const ConsultasList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterEstado, setFilterEstado] = useState('todas');

  const filteredConsultas = mockConsultas.filter(consulta => {
    const matchesSearch = consulta.pregunta.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         consulta.usuario.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesEstado = filterEstado === 'todas' || consulta.estado === filterEstado;
    return matchesSearch && matchesEstado;
  });

  return (
    <div className="w-full h-full p-6 pr-28">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Consultas</h1>
        <p className="text-gray-600">Consulta las preguntas y respuestas de la comunidad</p>
      </div>

      {/* Search and Filter */}
      <div className="flex gap-4 mb-6">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Buscar consultas..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-lg bg-white/10 backdrop-blur-xl border border-white/20 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-gray-400 transition-colors"
          />
        </div>
        <div className="relative">
          <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <select
            value={filterEstado}
            onChange={(e) => setFilterEstado(e.target.value)}
            className="pl-10 pr-8 py-2 rounded-lg bg-white/10 backdrop-blur-xl border border-white/20 text-gray-900 focus:outline-none focus:border-gray-400 transition-colors appearance-none cursor-pointer"
          >
            <option value="todas">Todas</option>
            <option value="activa">Activas</option>
            <option value="resuelta">Resueltas</option>
          </select>
        </div>
      </div>

      {/* Consultas Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredConsultas.map((consulta, index) => (
          <ConsultaCard key={consulta.id} consulta={consulta} delay={index * 0.1} />
        ))}
      </div>

      {filteredConsultas.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No se encontraron consultas</p>
        </div>
      )}
    </div>
  );
};

export default ConsultasList;

