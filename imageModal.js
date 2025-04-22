// Script para gestionar la visualización ampliada de imágenes

document.addEventListener('DOMContentLoaded', function() {
  console.log('Inicializando funcionalidad de ampliación de imágenes...');
  
  // Variables para seguimiento
  let currentImageIndex = 0;
  let galleryImages = [];
  
  // Añadir estilos necesarios programáticamente
  const modalStyles = document.createElement('style');
  modalStyles.textContent = `
    #image-modal {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 9999;
      background-color: rgba(0, 0, 0, 0.9);
      display: flex;
      justify-content: center;
      align-items: center;
      opacity: 1;
      transition: opacity 0.3s ease;
    }
    
    #image-modal.hidden {
      opacity: 0;
      pointer-events: none;
      display: none;
    }
    
    #modal-image {
      max-width: 90vw;
      max-height: 90vh;
      object-fit: contain;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
    }
    
    #close-modal, #prev-image, #next-image {
      cursor: pointer;
      z-index: 10000;
    }
    
    .image-card {
      cursor: zoom-in !important;
    }
  `;
  document.head.appendChild(modalStyles);
  
  // Verificar si ya existe el modal de visualización ampliada
  let imageModal = document.getElementById('image-modal');
  
  // Si no existe, crear el modal
  if (!imageModal) {
    console.log('Creando modal para imágenes...');
    imageModal = document.createElement('div');
    imageModal.id = 'image-modal';
    imageModal.className = 'hidden';
    imageModal.innerHTML = `
      <div class="relative max-w-full mx-auto" id="modal-content">
        <button class="absolute top-4 right-4 text-white hover:text-gray-300 focus:outline-none z-50" id="close-modal">
          <svg class="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        
        <button class="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 focus:outline-none p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70 transition-all z-50" id="prev-image">
          <svg class="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>
        
        <img src="" alt="Imagen ampliada" class="max-h-[90vh] max-w-[90vw] object-contain rounded-lg shadow-2xl" id="modal-image">
        
        <button class="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 focus:outline-none p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70 transition-all z-50" id="next-image">
          <svg class="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    `;
    
    document.body.appendChild(imageModal);
    
    // Añadir evento al botón de cerrar
    const closeButton = document.getElementById('close-modal');
    if (closeButton) {
      closeButton.addEventListener('click', function(e) {
        e.stopPropagation();
        closeModal();
      });
    }
    
    // También cerrar al hacer clic fuera de la imagen
    imageModal.addEventListener('click', function(e) {
      if (e.target === imageModal) {
        closeModal();
      }
    });
    
    // Prevenir cierre al hacer clic en la imagen
    const modalImage = document.getElementById('modal-image');
    if (modalImage) {
      modalImage.addEventListener('click', function(e) {
        e.stopPropagation();
      });
    }
    
    // Evento de clic para el botón anterior
    const prevButton = document.getElementById('prev-image');
    if (prevButton) {
      prevButton.addEventListener('click', function(e) {
        e.stopPropagation(); // Evitar que se cierre el modal
        navigateImage('prev');
      });
    }
    
    // Evento de clic para el botón siguiente
    const nextButton = document.getElementById('next-image');
    if (nextButton) {
      nextButton.addEventListener('click', function(e) {
        e.stopPropagation(); // Evitar que se cierre el modal
        navigateImage('next');
      });
    }
    
    // Manejar teclas para navegación
    document.addEventListener('keydown', function(e) {
      if (imageModal.classList.contains('hidden')) return;
      
      switch(e.key) {
        case 'Escape':
          closeModal();
          break;
        case 'ArrowLeft':
          navigateImage('prev');
          break;
        case 'ArrowRight':
          navigateImage('next');
          break;
      }
    });
  }
  
  // Función para navegar entre imágenes
  function navigateImage(direction) {
    // Actualizar la lista de imágenes disponibles
    updateGalleryImages();
    
    if (galleryImages.length <= 1) return;
    
    if (direction === 'next') {
      currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
    } else {
      currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
    }
    
    const modalImage = document.getElementById('modal-image');
    if (modalImage) {
      modalImage.src = galleryImages[currentImageIndex].src;
    }
  }
  
  // Función para actualizar la lista de imágenes
  function updateGalleryImages() {
    galleryImages = Array.from(document.querySelectorAll('#gallery-container img'));
    return galleryImages;
  }
  
  // Función para abrir el modal
  function openModal(imgSrc) {
    const modal = document.getElementById('image-modal');
    const modalImage = document.getElementById('modal-image');
    
    if (!modal || !modalImage) {
      console.error('No se encontró el modal o la imagen del modal');
      return;
    }
    
    // Asignar la fuente de la imagen
    modalImage.src = imgSrc;
    
    // Forzar visibilidad
    document.body.style.overflow = 'hidden'; // Evitar scroll en el fondo
    modal.classList.remove('hidden');
  }
  
  // Función para cerrar el modal
  function closeModal() {
    const modal = document.getElementById('image-modal');
    
    if (!modal) {
      console.error('No se encontró el modal para cerrar');
      return;
    }
    
    modal.classList.add('hidden');
    document.body.style.overflow = ''; // Restaurar scroll
  }
  
  // Preparar las imágenes para la galería
  function prepareImages() {
    console.log('Preparando imágenes...');
    const galleryContainer = document.getElementById('gallery-container');
    if (!galleryContainer) {
      console.error('No se encontró el contenedor de la galería');
      return;
    }
    
    // Encontrar todas las imágenes que no han sido procesadas
    const images = galleryContainer.querySelectorAll('img:not(.prepared)');
    console.log(`Encontradas ${images.length} imágenes para preparar`);
    
    images.forEach((img, index) => {
      // Si la imagen ya está dentro de un contenedor, saltarla
      if (img.parentElement.classList.contains('image-card')) {
        console.log('Imagen ya dentro de un contenedor');
        img.classList.add('prepared');
        return;
      }
      
      // Crear contenedor para la imagen
      const imageCard = document.createElement('div');
      imageCard.className = 'image-card aspect-square rounded-lg overflow-hidden bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transition-all relative group';
      imageCard.setAttribute('data-category', 'Imagen');
      imageCard.setAttribute('data-aos', 'fade-up');
      
      // Crear clon de la imagen para no perder atributos
      const imgClone = img.cloneNode(true);
      imgClone.className = 'w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 prepared';
      
      // Guardar la ruta de la imagen
      const imgSrc = img.src;
      
      // Reemplazar imagen con contenedor
      img.parentNode.replaceChild(imageCard, img);
      
      // Añadir imagen al contenedor
      imageCard.appendChild(imgClone);
      
      // Añadir overlay con ícono de lupa
      const overlay = document.createElement('div');
      overlay.className = 'absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 opacity-0 group-hover:opacity-100';
      overlay.innerHTML = `
        <svg class="w-12 h-12 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m4-3H7"/>
        </svg>
      `;
      imageCard.appendChild(overlay);
      
      // Asignar evento de clic
      imageCard.addEventListener('click', function() {
        showImage(index);
      });
      
      console.log(`Imagen ${index + 1} preparada`);
    });
    
    // Actualizar lista de imágenes
    updateGalleryImages();
  }
  
  // Función para mostrar una imagen
  function showImage(index) {
    // Actualizar lista de imágenes
    updateGalleryImages();
    
    // Validar índice
    if (index < 0 || index >= galleryImages.length) {
      console.error('Índice de imagen inválido:', index);
      return;
    }
    
    // Actualizar índice actual
    currentImageIndex = index;
    
    // Obtener ruta de la imagen
    const imgSrc = galleryImages[index].src;
    console.log('Mostrando imagen:', imgSrc);
    
    // Mostrar u ocultar botones de navegación
    const prevButton = document.getElementById('prev-image');
    const nextButton = document.getElementById('next-image');
    
    if (prevButton && nextButton) {
      if (galleryImages.length <= 1) {
        prevButton.style.display = 'none';
        nextButton.style.display = 'none';
      } else {
        prevButton.style.display = '';
        nextButton.style.display = '';
      }
    }
    
    // Abrir modal con la imagen
    openModal(imgSrc);
  }
  
  // Inicializar
  prepareImages();
  
  // Observar cambios en la galería
  if (window.MutationObserver) {
    const galleryContainer = document.getElementById('gallery-container');
    if (galleryContainer) {
      const observer = new MutationObserver(function() {
        prepareImages();
      });
      
      observer.observe(galleryContainer, { 
        childList: true,
        subtree: true 
      });
      
      console.log('Observador configurado para el contenedor de la galería');
    }
  }
}); 
