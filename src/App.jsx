import { getImageUrl } from './utils.js';

const scientists = [
  {
    name: 'Maria Skłodowska-Curie',
    imageUrl: 'szV5sdG',
    profession: 'physicist and chemist',
    awards: [
      'Nobel Prize in Physics',
      'Nobel Prize in Chemistry',
      'Davy Medal',
      'Matteucci Medal',
    ],
    discovered: 'polonium (chemical element)',
  },
  {
    name: 'Katsuko Saruhashi',
    imageUrl: 'YfeOqp2',
    profession: 'geochemist',
    awards: ['Miyake Prize for geochemistry', 'Tanaka Prize'],
    discovered: 'a method for measuring carbon dioxide in seawater',
  },
];

function Profile({ fullname, size, imageUrl, profession, awards, discovered }) {
  return (
    <section className="profile">
      <h2>{fullname}</h2>
      <img
        className="avatar"
        src={getImageUrl(`${imageUrl}`)}
        alt={`${fullname}`}
        width={size}
        height={size}
      />
      <ul>
        <li>
          <b>Profession: </b>
          {profession}
        </li>
        <li>
          <b>Awards: {awards.length} </b>
          {awards.map((award, index) => (
            <span key={index}>{award}, </span>
          ))}
        </li>
        <li>
          <b>Discovered: </b>
          {discovered}
        </li>
      </ul>
    </section>
  );
}

Profile.defaultProps = {
  size: 70,
};

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      {scientists.map((scientist) => (
        <Profile key={scientist.fullname} {...scientist} />
      ))}
    </div>
  );
}
