export default async function printPhotos(photos, city) {
  const photosData = await photos;
  const photosBox = document.querySelector('#photosBox');
  let photosInject = '';

  if (photosData.errors === undefined) {
    photosData.forEach((pics, i) => {
      const photo = pics.urls.regular;
      let alt = pics.alt_description;
      alt === null ? (alt = 'random unsplash image') : '';
      const html = `
        <img
          src="${photo}"
          alt="${alt}"
          title="${alt}"
          class="object-cover max-h-xs border shadow-lg rounded-lg border-white"
        />
      `;
      photosInject += html;
    });
    photosBox.innerHTML = photosInject;
  } else {
    photosBox.innerHTML = `<p class="shadow-md bg-gray-100 text-gray-700 text-center self-start p-8 border rounded-lg">${city} has no photo's available 😔</p>`;
  }
}
