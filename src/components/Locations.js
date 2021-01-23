import { useState, useEffect } from 'react';
import firebase from '../firebase.js';
import loadingImage from '../pics/load.svg';

const Locations = () => {
  const [location, setLocation] = useState('');
  const [image, setImage] = useState(false);
  const [loading, setLoading] = useState(false);

  const getNewImage = () => {
    if (location !== '') {
      const images = firebase.storage();
      // switch(location) {
      //   case ('myhouse'):
      if (location === 'myhouse') {
        const num = Math.floor(Math.random() * 19) + 1;
        const imagePath = images.ref(`images/myhouse/i${num}.jpg`);
        imagePath.getDownloadURL().then(url => {
          setImage(url);
          setLoading(false);
        });
      } else if (location === 'yourhouse') {
        const num = Math.floor(Math.random() * 19) + 1;
        const imagePath = images.ref(`images/yourhouse/i${num}.jpg`);
        imagePath.getDownloadURL().then(url => {
          setImage(url);
          setLoading(false);
        });
      } else if (location === 'cottage') {
        const num = Math.floor(Math.random() * 4) + 1;
        const imagePath = images.ref(`images/cottage/i${num}.jpg`);
        imagePath.getDownloadURL().then(url => {
          setImage(url);
          setLoading(false);
        });
      } else if (location === 'world') {
        const num = Math.floor(Math.random() * 6) + 2;
        // if (num === 1) {
        //   const imagePath = images.ref('images/world/i1.HEIC')
        //   imagePath.getDownloadURL().then(url => {
        //     setImage(url);
        //     setLoading(false);
        //   });
        // } else {
          const imagePath = images.ref(`images/world/i${num}.jpg`);
          imagePath.getDownloadURL().then(url => {
            setImage(url);
            setLoading(false);
          });
        // }
      }
    }
  }

  useEffect(() => {
    setLoading(true);
    getNewImage();
  }, [location]);

  const handleLocation = (e) => {
    const name = e.target.name
    if (location !== name) {
      setLocation(name);
    }
  }

  useEffect(() => {
    if (location !== '') {
      // setImage('../pics/myhouse/i2.jpg')
    }
  }, [location])

  return (
    <section className={"locations " + (image && "pageLoaded")}>
      <h2>Locations</h2>
      <div className="selections">
        <button 
          className={location === 'myhouse' ? 'myhouse' : ''}
          name="myhouse"
          onClick={handleLocation}
        >My House</button>
        <button 
          className={location === 'yourhouse' ? 'yourhouse' : ''}
          name="yourhouse"
          onClick={handleLocation}
        >Your House</button>
        <button 
          className={location === 'cottage' ? 'cottage' : ''}
          name="cottage"
          onClick={handleLocation}
        >Cottage</button>
        <button 
          className={location === 'world' ? 'world' : ''}
          name="world"
          onClick={handleLocation} 
        >The World</button>
      </div>
      <div className="content">
        <button 
          className="random"
          onClick={() => {
            setLoading(true);
            getNewImage();
          }}
        ></button>
        {image && (
          <div className="imgContainer">
            {loading 
              ? <div className="loadingDiv"> 
                <img src={loadingImage} alt="Loading..."/>
              </div>
              : <img src={image} alt="Picture of us!!"/>
            }
          </div>
        )}
      </div>
    </section>
  )
}

export default Locations;