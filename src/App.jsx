import { useEffect, useRef, useState } from 'react';
import './styles.css';
import Skeleton from './components/Skeleton';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  const width = useRef(window.innerWidth / 6).current;

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  });

  if (isLoading) {
    return (
      <div className="App">
        <div className="header">
          <Skeleton width={64} height={20} />
          <Skeleton width={400} height={32} borderRadius={8} />
          <Skeleton width={40} height={49} borderRadius={20} />
        </div>
        <div className="content">
          {[1, 2, 3, 4, 5, 6].map((video) => (
            <Skeleton key={video} width={100} height={300} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <div className="header">
        <h3>RaiqueRamos</h3>
        <input className="search-input" placeholder="Digite para pesquisar" />
        <div className="profile">Rai</div>
      </div>
      <div className="content">
        {[1, 2, 3, 4, 5, 6].map((video) => (
          <div className="video" key={video} style={{ width }}>
            <div className="thumbnail"></div>
            <div className="info">
              <h3>Video {video}</h3>
              <p>Dogcode</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
