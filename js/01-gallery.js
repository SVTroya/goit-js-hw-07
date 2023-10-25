import {galleryItems} from './gallery-items.js';

// Change code below this line
const refs = {
    gallery: document.querySelector('ul.gallery'),
}

fillGallery(galleryItems)

refs.gallery.onclick = (event) => {
    event.preventDefault()
    if (event.target.nodeName === 'IMG') {
        let modal
        function escCallback(event) {
            if(event.key === 'Escape') {
                modal.close()
            }
        }
         basicLightbox.create(
         `<img 
            width="1400" 
            height="900" 
            src="${event.target.dataset.source}" 
            alt="${event.target.getAttribute('alt')}">`,
           {
               onShow: (instance) => {
                   modal = instance
                   document.addEventListener('keyup', escCallback)
               },
               onClose: () => {
                   document.removeEventListener('keyup', escCallback)
                   modal = undefined
               }
           }
        ).show()
    }
}

function fillGallery(galleryItems) {
   let markup = ''
   galleryItems.forEach(item => {
        markup +=
            `<li class="gallery__item">
                <a class="gallery__link" href="${item.original}">
                    <img class="gallery__image" src="${item.preview}" alt="${item.description}" data-source="${item.original}"/>
                </a>
            </li>`
    })

    refs.gallery.insertAdjacentHTML('afterbegin', markup)
}

console.log(galleryItems);
