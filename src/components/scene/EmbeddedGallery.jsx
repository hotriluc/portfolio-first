import { Html } from '@react-three/drei';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { computerActions } from '../../store/computer-slice';
import { Flex } from '../../styles/Global';

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
        <img src="./cat.avif" width={2} height={2} alt="" />
        {props.img}
      </div>
      <p>{props.name}.proj</p>
    </div>
  );
};

const data = [
  [
    { name: 'cat', img: 'cat' },
    { name: 'dog', img: 'cat' },
    { name: 'fish', img: 'cat' },
  ],
  [
    { name: 'f', img: 'cat' },
    { name: 'f1', img: 'cat' },
    { name: 'f2', img: 'cat' },
  ],

  [
    { name: 'a1', img: 'cat' },
    { name: 'a2', img: 'cat' },
    { name: 'a3', img: 'cat' },
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
      {projectIsOpened && <div>{data[currentCell.x][currentCell.y].name}</div>}
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

export default EmbeddedGallery;
