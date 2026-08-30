import { ImageResponse } from 'next/og';
 
export const runtime = 'edge';
 
export const alt = 'Casa Jirafa - Puerto Vallarta Vacation Rental';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';
 
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(to bottom right, #f5f5f4, #e7e5e4)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'white',
            padding: '60px 80px',
            borderRadius: '24px',
            boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
            textAlign: 'center',
          }}
        >
          <h1
            style={{
              fontSize: 80,
              fontWeight: 800,
              color: '#1c1917',
              margin: 0,
              lineHeight: 1.1,
            }}
          >
            Casa Jirafa
          </h1>
          <p
            style={{
              fontSize: 40,
              color: '#57534e',
              marginTop: 30,
              marginBottom: 0,
            }}
          >
            The Perfect Vallarta Retreat
          </p>
          <div
            style={{
              display: 'flex',
              marginTop: 40,
              padding: '10px 30px',
              background: '#1c1917',
              color: 'white',
              borderRadius: '999px',
              fontSize: 24,
              fontWeight: 600,
            }}
          >
            El Centro, Puerto Vallarta
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
