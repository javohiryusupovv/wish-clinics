'use client';
import { closeModal } from '@/src/features/modalSlice';
import { RootState } from '@/src/store/store';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function BookingModal() {
  const isOpen = useSelector((state: RootState) => state.modal.isOpen);
  const dispatch = useDispatch();

  // 1. Form state'larini e'lon qilamiz
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    dateTime: ''
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  // 2. Formani yuborish funksiyasi
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Console'ga bitta object sifatida chiqarish
    console.log("Kiritilgan ma'lumotlar:", formData);

    // 3. Inputlarni bo'shatish
    setFormData({
      name: '',
      phone: '',
      service: '',
      dateTime: ''
    });

    // 4. Modalni yopish
    dispatch(closeModal());
  };

  // Input o'zgarganda state'ni yangilash
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm" 
        onClick={() => dispatch(closeModal())} 
      />
      
      {/* Modal Card */}
      <div className="relative bg-white w-full max-w-[450px] rounded-[30px] p-8 md:p-10 shadow-xl animate-in zoom-in duration-200">
        
        {/* Yopish tugmasi (X) */}
        <button 
          onClick={() => dispatch(closeModal())} 
          className=" cursor-pointer absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors bg-gray-100 rounded-full p-2 w-8 h-8 flex items-center justify-center"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold text-slate-800 mb-2">Запись на прием</h2>
        <p className="text-gray-500 text-sm mb-8">Заполните форму, и мы свяжемся с вами для подтверждения визита.</p>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Ism */}
          <div>
            <label className="block text-[10px] font-bold text-cyan-500 uppercase tracking-wider mb-2">Ваше имя</label>
            <input 
              required
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Александр Иванов"
              className="w-full px-5 py-3 border border-gray-200 rounded-2xl focus:outline-none focus:border-cyan-400 transition-all"
            />
          </div>

          {/* Telefon */}
          <div>
            <label className="block text-[10px] font-bold text-cyan-500 uppercase tracking-wider mb-2">Номер телефона</label>
            <input 
              required
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+7 (___) ___-__-__"
              className="w-full px-5 py-3 border border-gray-200 rounded-2xl focus:outline-none focus:border-cyan-400 transition-all"
            />
          </div>

          {/* Xizmat tanlash */}
          <div>
            <label className="block text-[10px] font-bold text-cyan-500 uppercase tracking-wider mb-2">Выберите услугу</label>
            <select 
              required
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-5 py-3 border border-gray-200 rounded-2xl focus:outline-none focus:border-cyan-400 bg-white appearance-none cursor-pointer"
            >
              <option value="">Выберите из списка</option>
              <option value="konsultatsiya">Konsultatsiya</option>
              <option value="davolash">Davolash</option>
            </select>
          </div>

          {/* Sana va vaqt */}
          <div>
            <label className="block text-[10px] font-bold text-cyan-500 uppercase tracking-wider mb-2">Предпочтительная дата и время</label>
            <input 
              required
              type="datetime-local"
              name="dateTime"
              value={formData.dateTime}
              onChange={handleChange}
              className="w-full px-5 py-3 border border-gray-200 rounded-2xl focus:outline-none focus:border-cyan-400 transition-all"
            />
          </div>

          {/* Submit Tugmasi */}
          <button 
            type="submit"
            className="w-full bg-[#18ccf4] hover:bg-[#15b7db] text-white font-bold py-4 rounded-2xl transition-all shadow-lg shadow-cyan-100 mt-4 active:scale-95"
          >
            Записаться на прием
          </button>

          <p className="text-[10px] text-gray-400 text-center px-4">
            Нажимая кнопку, вы соглашаетесь с <span className="underline cursor-pointer">политикой конфиденциальности</span> и правилами обработки данных.
          </p>
        </form>
      </div>
    </div>
  );
}