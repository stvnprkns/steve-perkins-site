const fs = require('fs');
const https = require('https');
const path = require('path');

const images = [
  {
    url: 'https://images.unsplash.com/photo-1601823988134-b6caf165c6d1?w=600&auto=format&fit=crop',
    filename: 'family-1.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1583511655826-05700d52f5a9?w=600&auto=format&fit=crop',
    filename: 'dogs-1.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1554224155-3a58922a22c3?w=600&auto=format&fit=crop',
    filename: 'tv-guide.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1496284045406-d3c0c5085e3c?w=600&auto=format&fit=crop',
    filename: 'tv-still.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1608889825205-eeb911fe84e0?w=600&auto=format&fit=crop',
    filename: 'vhs.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=600&auto=format&fit=crop',
    filename: 'basketball-silhouette.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&auto=format&fit=crop',
    filename: 'espn-graphic.jpg'
  }
];

const downloadDir = path.join(__dirname, '../public/images/hover-reveals');

// Create directory if it doesn't exist
if (!fs.existsSync(downloadDir)) {
  fs.mkdirSync(downloadDir, { recursive: true });
}

// Download each image
images.forEach(({ url, filename }) => {
  const filePath = path.join(downloadDir, filename);
  const file = fs.createWriteStream(filePath);
  
  https.get(url, (response) => {
    response.pipe(file);
    
    file.on('finish', () => {
      file.close();
      console.log(`Downloaded ${filename}`);
    });
  }).on('error', (err) => {
    fs.unlink(filePath, () => {}); // Delete the file if there's an error
    console.error(`Error downloading ${filename}:`, err.message);
  });
});

console.log('All placeholder images downloaded!');
