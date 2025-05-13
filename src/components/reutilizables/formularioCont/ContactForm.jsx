import { useState } from 'react';
import './ContactForm.css';

const defaultFields = [
  { name: 'name', label: 'Nombre', type: 'text', required: true },
  { name: 'email', label: 'Correo electrónico', type: 'email', required: true },
  { name: 'message', label: 'Mensaje', type: 'textarea', required: true },
];

export default function ContactForm({ fields = defaultFields, onSubmit, endpoint }) {
  const [formData, setFormData] = useState(() =>
    fields.reduce((acc, field) => ({ ...acc, [field.name]: '' }), {})
  );

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const validate = () => {
    const newErrors = {};
    fields.forEach(({ name, required, type }) => {
      const value = formData[name]?.trim();

      if (required && !value) {
        newErrors[name] = 'Este campo es obligatorio';
      } else if (type === 'email' && value && !/^\S+@\S+\.\S+$/.test(value)) {
        newErrors[name] = 'Correo inválido';
      } else if (type === 'text' && value.length < 2) {
        newErrors[name] = 'Debe tener al menos 2 caracteres';
      }
    });
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      setIsSubmitting(true);
      const response = await fetch(endpoint, {
        method: 'POST',
        body: new URLSearchParams(formData),
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });

      const result = await response.json();
      if (result.success) {
        setSuccessMessage('¡Mensaje enviado con éxito!');
        setFormData(fields.reduce((acc, field) => ({ ...acc, [field.name]: '' }), {}));
      } else {
        setSuccessMessage('Hubo un error. Intenta de nuevo.');
      }
    } catch (err) {
      console.error('❌ Error al enviar:', err);
      setSuccessMessage('Error de red. Intenta luego.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      {fields.map(({ name, label, type }) => {
        const hasValue = formData[name].trim() !== '';
        return (
          <div key={name} className="form-group floating-label">
            {type === 'textarea' ? (
              <>
                <textarea
                  id={name}
                  name={name}
                  rows={5}
                  value={formData[name]}
                  onChange={handleChange}
                  className={hasValue ? 'has-value' : ''}
                />
                <label htmlFor={name}>{label}</label>
              </>
            ) : (
              <>
                <input
                  id={name}
                  name={name}
                  type={type}
                  value={formData[name]}
                  onChange={handleChange}
                  className={hasValue ? 'has-value' : ''}
                />
                <label htmlFor={name}>{label}</label>
              </>
            )}
            {errors[name] && <small className="error">{errors[name]}</small>}
          </div>
        );
      })}

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Enviando...' : 'Enviar'}
      </button>

      {successMessage && <p className="status-message">{successMessage}</p>}
    </form>
  );
}
