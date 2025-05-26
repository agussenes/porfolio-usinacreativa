// LightboxGallerySwiper.jsx actualizado
import { useState } from 'react';
import Modal from 'react-modal';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './LightboxGallerySwiper.css';

Modal.setAppElement('#root');

function LightboxGallerySwiper({ images }) {
    const [isOpen, setIsOpen] = useState(false);
    const [initialSlide, setInitialSlide] = useState(0);

    const openModal = (index) => {
        setInitialSlide(index);
        setIsOpen(true);
    };

    return (
        <>
            <Swiper
                modules={[Navigation, Autoplay]}
                navigation
                slidesPerView={5}
                spaceBetween={20}
                loop={true}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                className="thumb-swiper"
                breakpoints={{
                    0: { slidesPerView: 2 },
                    576: { slidesPerView: 3 },
                    768: { slidesPerView: 4 },
                    992: { slidesPerView: 5 },
                }}
            >
                {images.map((img, i) => (
                    <SwiperSlide key={i} onClick={() => openModal(i)} className='pointer'>
                        <img src={img.src} alt={img.caption} className="img-fluid rounded cursor-pointer" />
                        <p className="text-center small mt-2">{img.caption}</p>
                    </SwiperSlide>
                ))}
            </Swiper>

            <Modal
                isOpen={isOpen}
                onRequestClose={() => setIsOpen(false)}
                contentLabel="Galería"
                className="lightbox-modal"
                overlayClassName="lightbox-overlay"
            >
                <Swiper
                    modules={[Navigation, Pagination]}
                    navigation
                    pagination={{ clickable: true }}
                    initialSlide={initialSlide}
                >
                    {images.map((img, i) => (
                        <SwiperSlide key={i}>
                            <img src={img.src} alt={img.caption} className="img-fullscreen" />
                            <p className="caption text-white text-center mt-2">{img.caption}</p>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <button className="close-modal" onClick={() => setIsOpen(false)}>×</button>
            </Modal>
        </>
    );
}

export default LightboxGallerySwiper;
