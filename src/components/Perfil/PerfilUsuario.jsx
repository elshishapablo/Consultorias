import { motion } from 'framer-motion';
import { User, Mail, Phone, Building, Edit, Save, Camera } from 'lucide-react';
import { useState } from 'react';

const PerfilUsuario = ({ user }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || '',
    company: user?.company || '',
    bio: user?.bio || 'Desarrollador apasionado por la tecnología',
  });

  const handleSave = () => {
    setIsEditing(false);
    // Aquí iría la lógica para guardar los datos
  };

  return (
    <div className="w-full p-6 space-y-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Mi Perfil</h2>
          <p className="text-gray-600">Gestiona tu información personal</p>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => isEditing ? handleSave() : setIsEditing(true)}
          className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors"
        >
          {isEditing ? (
            <>
              <Save className="w-4 h-4" />
              Guardar
            </>
          ) : (
            <>
              <Edit className="w-4 h-4" />
              Editar
            </>
          )}
        </motion.button>
      </div>

      {/* Avatar Section */}
      <div className="flex items-center gap-6 mb-6">
        <div className="relative">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-gray-500 to-gray-400 flex items-center justify-center">
            <User className="w-12 h-12 text-white" />
          </div>
          {isEditing && (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center border-2 border-white"
            >
              <Camera className="w-4 h-4" />
            </motion.button>
          )}
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900">{formData.name}</h3>
          <p className="text-gray-600">{formData.email}</p>
        </div>
      </div>

      {/* Form Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Nombre completo</label>
          {isEditing ? (
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-900"
            />
          ) : (
            <div className="px-4 py-2 bg-gray-50 rounded-lg text-gray-900">{formData.name}</div>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Correo electrónico</label>
          {isEditing ? (
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-900"
            />
          ) : (
            <div className="px-4 py-2 bg-gray-50 rounded-lg text-gray-900">{formData.email}</div>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Teléfono</label>
          {isEditing ? (
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-900"
            />
          ) : (
            <div className="px-4 py-2 bg-gray-50 rounded-lg text-gray-900">{formData.phone || 'No especificado'}</div>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Empresa</label>
          {isEditing ? (
            <input
              type="text"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-900"
            />
          ) : (
            <div className="px-4 py-2 bg-gray-50 rounded-lg text-gray-900">{formData.company || 'No especificado'}</div>
          )}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Biografía</label>
        {isEditing ? (
          <textarea
            value={formData.bio}
            onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-900 resize-none"
          />
        ) : (
          <div className="px-4 py-2 bg-gray-50 rounded-lg text-gray-900">{formData.bio}</div>
        )}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
        <div className="text-center">
          <div className="text-2xl font-bold text-gray-900">24</div>
          <div className="text-sm text-gray-600">Consultas</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-gray-900">4.8</div>
          <div className="text-sm text-gray-600">Rating Promedio</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-gray-900">8.5h</div>
          <div className="text-sm text-gray-600">Tiempo Ahorrado</div>
        </div>
      </div>
    </div>
  );
};

export default PerfilUsuario;

