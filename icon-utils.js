// Función para obtener colores por nombre
function getColorClass(color) {
  const colors = {
    'blue': {
      bg: 'bg-blue-100 dark:bg-blue-900/20',
      text: 'text-blue-500'
    },
    'green': {
      bg: 'bg-green-100 dark:bg-green-900/20',
      text: 'text-green-500'
    },
    'purple': {
      bg: 'bg-purple-100 dark:bg-purple-900/20',
      text: 'text-purple-500'
    },
    'red': {
      bg: 'bg-red-100 dark:bg-red-900/20',
      text: 'text-red-500'
    },
    'yellow': {
      bg: 'bg-yellow-100 dark:bg-yellow-900/20',
      text: 'text-yellow-500'
    },
    'indigo': {
      bg: 'bg-indigo-100 dark:bg-indigo-900/20',
      text: 'text-indigo-500'
    },
    'pink': {
      bg: 'bg-pink-100 dark:bg-pink-900/20',
      text: 'text-pink-500'
    },
    'teal': {
      bg: 'bg-teal-100 dark:bg-teal-900/20',
      text: 'text-teal-500'
    },
    'orange': {
      bg: 'bg-orange-100 dark:bg-orange-900/20',
      text: 'text-orange-500'
    },
    'gray': {
      bg: 'bg-gray-100 dark:bg-gray-900/20',
      text: 'text-gray-500'
    }
  };
  
  return colors[color] || colors['blue'];
}

// Función para obtener iconos por nombre
function getIconByName(iconName) {
  const icons = {
    'ai': `<svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21.3938 11.6774C21.3938 8.76892 19.0393 6.37596 16.1309 6.34938C15.2057 4.92861 13.6547 4 11.9062 4C9.43079 4 7.32463 5.69623 6.82933 7.97504C4.67585 8.46444 3 10.3958 3 12.6774C3 15.2561 5.15383 17.3548 7.78125 17.3548H18.6128C20.3765 17.3548 21.3938 15.7342 21.3938 13.9748C21.3938 13.2019 21.3938 12.4477 21.3938 11.6774Z" stroke="currentColor" stroke-width="1.5"/>
      <path d="M7.78125 17.3548L8.30035 20L11.9062 18.1613L15.5 20L16.0312 17.3548" stroke="currentColor" stroke-width="1.5"/>
    </svg>`,
    'ux': `<svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="8.5" cy="8.5" r="1.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M21 15L16 10L5 21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
    'figma': `<svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
    'web': `<svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M2 12h20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
    'image': `<svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor"/>
      <path d="M21 15L16 10L5 21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
    'video': `<svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M10 9l5 3-5 3V9z" fill="currentColor"/>
    </svg>`,
    'portfolio': `<svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19 16V7C19 5.89543 18.1046 5 17 5H7C5.89543 5 5 5.89543 5 7V16C5 17.1046 5.89543 18 7 18H17C18.1046 18 19 17.1046 19 16Z" stroke="currentColor" stroke-width="1.5"/>
      <path d="M10 5V3.5C10 3.22386 10.2239 3 10.5 3H13.5C13.7761 3 14 3.22386 14 3.5V5" stroke="currentColor" stroke-width="1.5"/>
      <path d="M5 13H19" stroke="currentColor" stroke-width="1.5"/>
      <path d="M9 16H15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
    </svg>`,
    'prompt': `<svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 9H16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M8 13H14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 13.1971 3.23241 14.3397 3.65928 15.3845C3.73291 15.5549 3.77394 15.7424 3.75153 15.9336L3.46667 18.3081C3.4005 18.8498 3.84906 19.3049 4.39144 19.2464L6.76646 18.9714C6.95752 18.949 7.14458 18.9903 7.31495 19.0639C8.35873 19.4896 9.4998 19.7212 10.695 19.7212" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
    </svg>`,
    'calendar': `<svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M16 2V6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M8 2V6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M3 10H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
    'task': `<svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 12L11 14L15 10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-width="1.5"/>
    </svg>`,
    'link': `<svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.5 12C13.5 15.18 10.93 17.75 7.75 17.75C4.57 17.75 2 15.18 2 12C2 8.82 4.57 6.25 7.75 6.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M10 12C10 8.69 12.69 6 16 6C19.31 6 22 8.69 22 12C22 15.31 19.31 18 16 18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
    'code': `<svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 9L4 12L9 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M15 9L20 12L15 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M12 4L8 20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
    </svg>`,
    'default': `<svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-width="1.5"/>
      <path d="M12 8V12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M12 16V16.01" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`
  };
  
  // Convertir a minúsculas para hacer la búsqueda insensible a mayúsculas y minúsculas
  const lowerCaseName = iconName.toLowerCase();
  
  // Buscar el icono por nombre, o devolver el icono por defecto si no se encuentra
  return icons[lowerCaseName] || icons['default'];
} 