// Archivo destinado al manejo de archivos locales para la web
// Este archivo facilita la persistencia de imágenes y videos en carpetas locales

class FileManager {
  constructor() {
    // Inicializar rutas de directorios
    this.imgDir = 'src/img/';
    this.videoDir = 'src/video/';
    this.fileListImg = [];
    this.fileListVideo = [];
  }

  // Guarda la imagen en src/img con un nombre único
  async saveImage(file) {
    try {
      // Crear un nombre de archivo único basado en la fecha y nombre original
      const timestamp = new Date().getTime();
      const fileName = `img_${timestamp}_${file.name.replace(/[^a-zA-Z0-9.]/g, '_')}`;
      const filePath = this.imgDir + fileName;
      
      // Guardar el archivo en el sistema de archivos local
      await this.saveFile(file, filePath);
      
      // Actualizar la lista de archivos
      this.fileListImg.push({
        name: fileName,
        path: filePath,
        type: file.type,
        date: new Date()
      });
      
      // Retornar la ruta del archivo guardado
      return filePath;
    } catch (error) {
      console.error('Error al guardar la imagen:', error);
      return null;
    }
  }

  // Guarda el video en src/video con un nombre único
  async saveVideo(file) {
    try {
      // Crear un nombre de archivo único
      const timestamp = new Date().getTime();
      const fileName = `video_${timestamp}_${file.name.replace(/[^a-zA-Z0-9.]/g, '_')}`;
      const filePath = this.videoDir + fileName;
      
      // Guardar el archivo en el sistema de archivos local
      await this.saveFile(file, filePath);
      
      // Actualizar la lista de archivos
      this.fileListVideo.push({
        name: fileName,
        path: filePath,
        type: file.type,
        date: new Date()
      });
      
      // Retornar la ruta del archivo guardado
      return filePath;
    } catch (error) {
      console.error('Error al guardar el video:', error);
      return null;
    }
  }

  // Guardar un enlace a video externo (YouTube/Vimeo)
  saveExternalVideo(url, embedUrl, title) {
    try {
      // Crear un registro para el video externo
      const timestamp = new Date().getTime();
      const entry = {
        name: `external_${timestamp}`,
        url: url,
        embedUrl: embedUrl,
        title: title || 'Video externo',
        type: 'external',
        date: new Date()
      };
      
      // Añadir a la lista de videos
      this.fileListVideo.push(entry);
      
      // Guardar la lista actualizada
      this.saveVideoList();
      
      return entry;
    } catch (error) {
      console.error('Error al guardar el video externo:', error);
      return null;
    }
  }

  // Método genérico para guardar un archivo
  async saveFile(file, filePath) {
    // Esta es una implementación simulada, ya que JavaScript del navegador
    // no puede guardar archivos directamente en el sistema de archivos local
    // por razones de seguridad sin usar APIs específicas como File System Access API
    
    // En un entorno real, esto se realizaría mediante:
    // 1. Un backend (PHP, Node.js, etc.)
    // 2. O usando la File System Access API (compatible solo con algunos navegadores)
    
    // Para este ejercicio, simularemos el guardado usando localStorage
    try {
      const reader = new FileReader();
      return new Promise((resolve, reject) => {
        reader.onload = (event) => {
          try {
            // Guardar la representación en base64 del archivo
            localStorage.setItem(filePath, event.target.result);
            
            // Actualizar la lista de archivos en localStorage
            if (file.type.includes('image')) {
              this.saveImageList();
            } else if (file.type.includes('video')) {
              this.saveVideoList();
            }
            resolve(filePath);
          } catch (e) {
            reject(e);
          }
        };
        reader.onerror = (error) => reject(error);
        reader.readAsDataURL(file);
      });
    } catch (error) {
      console.error('Error al leer el archivo:', error);
      throw error;
    }
  }

  // Guardar la lista de imágenes en localStorage
  saveImageList() {
    localStorage.setItem('fileListImg', JSON.stringify(this.fileListImg));
  }

  // Guardar la lista de videos en localStorage
  saveVideoList() {
    localStorage.setItem('fileListVideo', JSON.stringify(this.fileListVideo));
  }

  // Cargar las listas de archivos desde localStorage
  loadFileLists() {
    try {
      const imgList = localStorage.getItem('fileListImg');
      const videoList = localStorage.getItem('fileListVideo');
      
      if (imgList) {
        this.fileListImg = JSON.parse(imgList);
      }
      
      if (videoList) {
        this.fileListVideo = JSON.parse(videoList);
      }
    } catch (error) {
      console.error('Error al cargar las listas de archivos:', error);
    }
  }

  // Obtener una imagen específica por su ruta
  getImage(path) {
    return localStorage.getItem(path);
  }

  // Obtener un video específico por su ruta
  getVideo(path) {
    return localStorage.getItem(path);
  }

  // Cargar todas las imágenes
  getAllImages() {
    return this.fileListImg.map(file => {
      return {
        src: this.getImage(file.path),
        title: file.name,
        type: file.type,
        date: file.date
      };
    });
  }

  // Cargar todos los videos
  getAllVideos() {
    return this.fileListVideo.map(file => {
      if (file.type === 'external') {
        return {
          type: 'external',
          src: file.url,
          embedUrl: file.embedUrl,
          title: file.title
        };
      } else {
        return {
          type: 'local',
          src: this.getVideo(file.path),
          title: file.name
        };
      }
    });
  }
}

// Exportar una instancia para uso global
const fileManager = new FileManager();
fileManager.loadFileLists(); 