// Create a script element for the Google AdSense script
const adsenseScript = document.createElement('script');
adsenseScript.async = true;
adsenseScript.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6499590870582661';
adsenseScript.crossOrigin = 'anonymous';

// Append the script element to the <head> of the document
document.head.appendChild(adsenseScript);

// Optionally, insert the ad slot
function insertAdSlot() {
  const adSlot = document.createElement('ins');
  adSlot.className = 'adsbygoogle';
  adSlot.style.display = 'block';
  adSlot.setAttribute('data-ad-client', 'ca-pub-6499590870582661');
  adSlot.setAttribute('data-ad-slot', 'your-ad-slot-id');
  adSlot.setAttribute('data-ad-format', 'auto');

  // Append the ad slot to the body or specific element
  document.body.appendChild(adSlot);

  // Push the ad request to the Google Ads API
  (adsbygoogle = window.adsbygoogle || []).push({});
}

// Call the insertAdSlot function when needed
insertAdSlot();