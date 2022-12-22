import { Html } from '@react-three/drei';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { computerActions } from '../../store/computer-slice';
import { Flex } from '../../styles/Global';

import { animated, useSpring } from '@react-spring/web';

export const Project = (props) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <div className="imgHolder">
        <img src="./cat.avif" alt="" />
        {props.img}
      </div>
      <p>{props.name}.proj</p>
    </div>
  );
};

const data = [
  [
    { name: 'cat', img: './cat.avif', description: 'good cat' },
    { name: 'dog', img: './cat.avif', description: 'good dog' },
    { name: 'fish', img: './cat.avif', description: 'good fish' },
  ],
  [
    { name: 'f', img: './cat.avif' },
    { name: 'f1', img: './cat.avif' },
    { name: 'f2', img: './cat.avif' },
  ],

  [
    { name: 'a1', img: './cat.avif' },
    { name: 'a2', img: './cat.avif' },
    { name: 'a3', img: './cat.avif' },
  ],
];

const EmbeddedGallery = (props) => {
  const dispatch = useDispatch();
  const [galleryRef, setGalleryRef] = useState(null);
  const { command, currentCell, prevCell, projectIsOpened } = useSelector(
    (state) => state.computer
  );

  /**
   * On each change of galleryRef
   * we send new gallery's dimension to the store
   */
  useEffect(() => {
    if (galleryRef) {
      const totalRows = galleryRef.children.length;
      const galleryDimension = [];
      let i = 0;
      while (i < totalRows) {
        const itemsInRow = galleryRef.children[i].children.length;
        galleryDimension.push({ row: i, size: itemsInRow });
        i++;
      }
      dispatch(computerActions.setGalleryDimension(galleryDimension));
    }
  }, [galleryRef]);

  /**
   * On command change
   * send an action that will move current position
   */
  useEffect(() => {
    switch (command) {
      case 'LEFT':
        dispatch(computerActions.moveLeft());
        break;
      case 'RIGHT':
        dispatch(computerActions.moveRight());
        break;

      case 'UP':
        dispatch(computerActions.moveUp());
        break;

      case 'DOWN':
        dispatch(computerActions.moveDown());
        break;

      default:
        break;
    }
  }, [command]);

  /**
   * On each rerender that will happen on movement
   * add active class
   */
  if (galleryRef) {
    galleryRef.children[prevCell.x].children[prevCell.y].className = '';
    galleryRef.children[currentCell.x].children[currentCell.y].className =
      'activeItem';
  }

  return (
    <Html {...props}>
      {projectIsOpened && (
        <ProjectDetails
          name={data[currentCell.x][currentCell.y].name}
          img={data[currentCell.x][currentCell.y].img}
          description={
            data[currentCell.x][currentCell.y].description || 'No description'
          }
          currentCell={currentCell}
        />
      )}
      <Flex column gap={'.5rem'} ref={setGalleryRef}>
        {data.map((row, rowIndex) => {
          return (
            <Flex
              key={`row-${rowIndex}`}
              gap={'.5rem'}
              style={{ fontSize: 4 }}
              alignCenter
              justifyCenter
            >
              {row.map((item, colIndex) => {
                return (
                  <Project
                    key={`row-${rowIndex}-col-${colIndex}`}
                    name={item.name}
                    image={item.image}
                  />
                );
              })}
            </Flex>
          );
        })}
      </Flex>
    </Html>
  );
};

const ProjectDetails = ({ name, description, img }) => {
  const spring = useSpring({
    from: { x: -2, opacity: 0 },
    to: { x: 0, opacity: 1 },
  });

  useEffect(() => {
    console.log('data is changed');
  }, [name]);

  return (
    <div
      style={{
        position: 'absolute',
        background: 'red',
        width: 50,
        zIndex: 12,
        height: '100%',
      }}
    >
      <animated.p style={{ ...spring }}>{name}</animated.p>
      <p>{description}</p>
      <div
        style={{
          height: 25,
          width: 25,
          position: 'absolute',
          top: 10,
          right: 0,
          zIndex: -1,
        }}
      >
        <img src={img} style={{ height: '100%', width: '100%' }} />
      </div>
    </div>
  );
};

export default EmbeddedGallery;
