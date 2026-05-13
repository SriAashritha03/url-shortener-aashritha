import React from 'react'


export default function Response({response}) {
  // Handle both old and new response formats
  const shortenedUrl = response.shortUrl || (`http://localhost:3000/api/s/${response.shortCode}`);
  const qrCode = response.qrCode;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shortenedUrl);
    alert('Shortened URL copied to clipboard!');
  };

  const downloadQRCode = () => {
    if (!qrCode) return;
    const link = document.createElement('a');
    link.href = qrCode;
    link.download = `qr-${response.shortCode}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div style={{ maxWidth: 700, margin: '40px auto', padding: '20px', textAlign: 'center' }}>
      <h2>Your Shortened URL Created Successfully!</h2>
      
      <div style={{ 
        backgroundColor: '#f0f0f0', 
        padding: '20px', 
        borderRadius: '8px',
        marginBottom: '20px',
        wordBreak: 'break-all'
      }}>
        <p><strong>Shortened URL:</strong></p>
        <p style={{ fontSize: '16px', color: '#007bff' }}>{shortenedUrl}</p>
      </div>

      {qrCode && (
        <div style={{
          backgroundColor: '#fff',
          padding: '20px',
          borderRadius: '8px',
          marginBottom: '20px',
          display: 'inline-block',
          border: '2px solid #ddd'
        }}>
          <p style={{ marginTop: 0 }}><strong>QR Code</strong></p>
          <img 
            src={qrCode} 
            alt="QR Code" 
            style={{ width: '250px', height: '250px' }}
          />
        </div>
      )}

      <div style={{ marginTop: '20px' }}>
        <button 
          onClick={copyToClipboard}
          style={{
            padding: '10px 20px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '16px',
            marginRight: '10px'
          }}
        >
          Copy URL
        </button>

        {qrCode && (
          <button 
            onClick={downloadQRCode}
            style={{
              padding: '10px 20px',
              backgroundColor: '#28a745',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '16px',
              marginRight: '10px'
            }}
          >
            Download QR Code
          </button>
        )}

        <a 
          href="/"
          style={{
            padding: '10px 20px',
            backgroundColor: '#6c757d',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '16px',
            textDecoration: 'none',
            display: 'inline-block'
          }}
        >
          Create Another
        </a>
      </div>
    </div>
  )
}
