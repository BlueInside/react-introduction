import { Children } from 'react';

function Image() {
  return (
    <img
      className="avatar"
      src="https://i.imgur.com/OKS67lhm.jpg"
      alt="Aklilu Lemma"
      width={70}
      height={70}
    />
  );
}
function Card({ title, children }) {
  return (
    <div className="card">
      <div className="card-content">
        <h1>{title}</h1>
        {children}
      </div>
    </div>
  );
}

export default function Profile() {
  return (
    <div>
      <Card title="photo">
        <Image />
      </Card>
      <Card title="about">
        <p>
          Aklilu Lemma was a distinguished Ethiopian scientist who discovered a
          natural treatment to schistosomiasis.
        </p>
      </Card>
    </div>
  );
}
