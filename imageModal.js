// Script para gestionar la visualización ampliada de imágenes

document.addEventListener('DOMContentLoaded', function() {
  console.log('Inicializando funcionalidad de ampliación de imágenes...');
  
  // Variables para seguimiento
  let currentImageIndex = 0;
  let galleryImages = [];
  
  // Verificar si ya existe el modal de visualización ampliada
  let imageModal = document.getElementById('image-modal');
  
  // Si no existe, crear el modal
  if (!imageModal) {
    console.log('Creando modal para imágenes...');
    imageModal = document.createElement('div');
    imageModal.id = 'image-modal';
    imageModal.className = 'fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center hidden opacity-0 transition-opacity duration-300';
    imageModal.innerHTML = `
      <div class="relative max-w-4xl mx-auto transform scale-95 transition-transform duration-300" id="modal-content">
        <button class="absolute top-4 right-4 text-white hover:text-gray-300 focus:outline-none" id="close-modal">
          <svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        
        <button class="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 focus:outline-none p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70 transition-all" id="prev-image">
          <svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>
        
        <img src="" alt="Imagen ampliada" class="max-h-[90vh] max-w-[90vw] object-contain rounded-lg shadow-2xl" id="modal-image">
        
        <button class="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 focus:outline-none p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70 transition-all" id="next-image">
          <svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    `;
    
    document.body.appendChild(imageModal);
    
    // Añadir evento al botón de cerrar
    document.getElementById('close-modal').addEventListener('click', function() {
      closeModalWithAnimation();
    });
    
    // También cerrar al hacer clic fuera de la imagen
    imageModal.addEventListener('click', function(e) {
      if (e.target === imageModal) {
        closeModalWithAnimation();
      }
    });
    
    // Evento de clic para el botón anterior
    document.getElementById('prev-image').addEventListener('click', function(e) {
      e.stopPropagation(); // Evitar que se cierre el modal
      navigateImage('prev');
    });
    
    // Evento de clic para el botón siguiente
    document.getElementById('next-image').addEventListener('click', function(e) {
      e.stopPropagation(); // Evitar que se cierre el modal
      navigateImage('next');
    });
    
    // Manejar teclas para navegación
    document.addEventListener('keydown', function(e) {
      if (imageModal.classList.contains('hidden')) return;
      
      switch(e.key) {
        case 'Escape':
          closeModalWithAnimation();
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
    galleryImages = Array.from(document.querySelectorAll('#gallery-container img'));
    
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
  
  // Función para abrir el modal con animación
  function openModalWithAnimation() {
    const modal = document.getElementById('image-modal');
    const modalContent = document.getElementById('modal-content');
    
    // Mostrar primero
    modal.classList.remove('hidden');
    
    // Esperar un poco para que la transición funcione
    setTimeout(() => {
      modal.classList.remove('opacity-0');
      modalContent.classList.remove('scale-95');
      modalContent.classList.add('scale-100');
    }, 10);
  }
  
  // Función para cerrar el modal con animación
  function closeModalWithAnimation() {
    const modal = document.getElementById('image-modal');
    const modalContent = document.getElementById('modal-content');
    
    // Primero animar
    modal.classList.add('opacity-0');
    modalContent.classList.remove('scale-100');
    modalContent.classList.add('scale-95');
    
    // Luego ocultar después de la animación
    setTimeout(() => {
      modal.classList.add('hidden');
    }, 300);
  }
  
  // Envolver las imágenes dentro de contenedores si no lo están ya
  function prepareImages() {
    console.log('Preparando imágenes...');
    const galleryContainer = document.getElementById('gallery-container');
    if (!galleryContainer) {
      console.error('No se encontró el contenedor de la galería');
      return;
    }
    
    const images = galleryContainer.querySelectorAll('img:not(.prepared)');
    console.log(`Encontradas ${images.length} imágenes para preparar`);
    
    images.forEach((img, index) => {
      if (img.parentElement.classList.contains('image-card')) {
        // La imagen ya está dentro de un contenedor adecuado
        console.log('Imagen ya preparada');
        img.classList.add('prepared');
        return;
      }
      
      // Crear un contenedor para la imagen
      const imageCard = document.createElement('div');
      imageCard.className = 'image-card aspect-square rounded-lg overflow-hidden bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transition-all cursor-pointer relative group';
      imageCard.setAttribute('data-category', 'Imagen');
      imageCard.setAttribute('data-aos', 'fade-up');
      
      // Reemplazar la imagen original con el nuevo contenedor
      const parent = img.parentElement;
      parent.replaceChild(imageCard, img);
      
      // Añadir la imagen al nuevo contenedor
      img.className = 'w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 prepared';
      imageCard.appendChild(img);
      
      // Añadir el icono de lupa como overlay
      const zoomIcon = document.createElement('div');
      zoomIcon.className = 'absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 opacity-0 group-hover:opacity-100';
      zoomIcon.innerHTML = `
        <svg class="w-12 h-12 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m4-3H7"/>
        </svg>
      `;
      imageCard.appendChild(zoomIcon);
      
      console.log(`Imagen ${index + 1} preparada correctamente`);
    });
    
    // Actualizar la lista de imágenes
    galleryImages = Array.from(document.querySelectorAll('#gallery-container img'));
    
    // Añadir eventos de clic a todas las imágenes
    addClickEventToImages();
  }
  
  // Función para añadir el evento de clic a las imágenes
  function addClickEventToImages() {
    console.log('Añadiendo eventos de clic a las imágenes...');
    const images = document.querySelectorAll('#gallery-container img');
    
    images.forEach((img, index) => {
      // Eliminar evento anterior si existe
      img.removeEventListener('click', handleImageClick);
      // Añadir nuevo evento con el índice
      img.addEventListener('click', function(e) {
        handleImageClick(e, index);
      });
      console.log(`Evento de clic añadido a la imagen ${index + 1}`);
    });
  }
  
  // Función de manejo de clic en imágenes
  function handleImageClick(e, index) {
    console.log('Imagen clickeada:', e.target.src, 'Índice:', index);
    
    // Actualizar índice actual
    currentImageIndex = index !== undefined ? index : Array.from(document.querySelectorAll('#gallery-container img')).findIndex(img => img.src === e.target.src);
    
    const modalImage = document.getElementById('modal-image');
    if (!modalImage) {
      console.error('No se encontró la imagen del modal');
      return;
    }
    
    modalImage.src = e.target.src;
    
    // Mostrar u ocultar botones de navegación dependiendo del número de imágenes
    const prevButton = document.getElementById('prev-image');
    const nextButton = document.getElementById('next-image');
    
    if (galleryImages.length <= 1) {
      prevButton.classList.add('hidden');
      nextButton.classList.add('hidden');
    } else {
      prevButton.classList.remove('hidden');
      nextButton.classList.remove('hidden');
    }
    
    // Usar la nueva función para abrir con animación
    openModalWithAnimation();
  }
  
  // Preparar imágenes inmediatamente
  prepareImages();
  
  // Observar cambios en el contenedor de la galería para actualizar dinámicamente
  if (window.MutationObserver) {
    const galleryContainer = document.getElementById('gallery-container');
    if (galleryContainer) {
      const galleryObserver = new MutationObserver(function(mutations) {
        console.log('Detectados cambios en la galería', mutations);
        prepareImages();
      });
      
      galleryObserver.observe(galleryContainer, { childList: true, subtree: true });
      console.log('Observador configurado para el contenedor de la galería');
    } else {
      console.warn('No se pudo configurar el observador porque no existe el contenedor de la galería');
    }
  }
}); 
