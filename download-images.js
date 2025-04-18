const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');

const images = [
  {
    url: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80',
    filename: 'hero.jpg',
    description: 'Car rental with driver'
  },
  {
    url: 'https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?auto=format&fit=crop&w=800&q=80',
    filename: 'about.jpg',
    description: 'Car rental and driver team'
  },
  {
    url: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=400&q=80',
    filename: 'service1.jpg',
    description: 'Hourly Car Rental'
  },
  {
    url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    filename: 'service2.jpg',
    description: 'Daily Car Rental'
  },
  {
    url: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=400&q=80',
    filename: 'service3.jpg',
    description: 'Certified Driver for Your Car'
  },
  {
    url: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80',
    filename: 'service4.jpg',
    description: 'Business & Outstation Rentals'
  },
  {
    url: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80',
    filename: 'og-image.png',
    description: 'Open Graph image'
  }
];

async function downloadImage(url, filepath) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.statusText}`);
  const buffer = await res.buffer();
  await fs.promises.writeFile(filepath, buffer);
  console.log(`Downloaded and saved ${filepath}`);
}

async function main() {
  const publicDir = path.resolve(__dirname, 'public');
  if (!fs.existsSync(publicDir)) {
    console.error('Public directory does not exist:', publicDir);
    process.exit(1);
  }

  for (const image of images) {
    const filepath = path.join(publicDir, image.filename);
    try {
      await downloadImage(image.url, filepath);
    } catch (error) {
      console.error(`Error downloading ${image.filename}:`, error);
    }
  }
}

main();
