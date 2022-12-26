import { Html } from '@react-three/drei';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { computerActions } from '../../store/computer-slice';
import { Flex } from '../../styles/Global';

import { useSpring, useSpringRef } from '@react-spring/web';
import {
  DetailButton,
  DetailDescription,
  DetailImage,
  DetailTitle,
  DetailWindow,
} from '../../styles/Gallery';

export const Project = ({ name, img }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <div className="imgHolder">
        <img src={img} alt="" />
      </div>
      <p>{name}</p>
    </div>
  );
};

const ProjectDetails = ({ name, description, img }) => {
  const titleSpringRef = useSpringRef();
  const titleSpring = useSpring({
    ref: titleSpringRef,
    from: { x: -2, opacity: 0 },
    to: { x: 0, opacity: 1 },
  });

  const descriptionSpringRef = useSpringRef();
  const descriptionSpring = useSpring({
    ref: descriptionSpringRef,
    from: { y: 4, opacity: 0 },
    to: { y: 0, opacity: 1 },
  });

  const imageSpringRef = useSpringRef();
  const imageSpring = useSpring({
    ref: imageSpringRef,
    from: { y: 4, opacity: 0 },
    to: { y: 0, opacity: 1 },
  });

  useEffect(() => {
    titleSpringRef.start({
      from: { x: -2, opacity: 0 },
      to: { x: 0, opacity: 1 },
    });
    imageSpringRef.start({
      from: { y: -4, opacity: 0 },
      to: { y: 0, opacity: 1 },
    });
    descriptionSpringRef.start({
      from: { y: 4, opacity: 0 },
      to: { y: 0, opacity: 1 },
    });
  }, [name, description, img]);

  return (
    <DetailWindow>
      <DetailTitle style={{ ...titleSpring }}>{name}</DetailTitle>
      <DetailDescription style={{ ...descriptionSpring }}>
        {description}
      </DetailDescription>
      <DetailImage style={{ ...imageSpring }}>
        <img src={img} />
      </DetailImage>
      <DetailButton style={{ ...descriptionSpring }}>
        <a
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          target="_blank"
          rel="noreferrer"
        >
          View
        </a>
      </DetailButton>
    </DetailWindow>
  );
};

const data = [
  [
    {
      name: 'Cat',
      img: './cat.avif',
      description: 'Projects are still in progress. So check this cat',
    },
    {
      name: 'Brown Husky',
      img: './husky.avif',
      description: 'Projects are still in progress. So check this brown husky.',
    },
    {
      name: 'Snow Fox',
      img: './fox.avif',
      description: 'Projects are still in progress. So check this snow fox.',
    },
  ],
  [
    {
      name: 'White Rabbit',
      img: './rabbit.avif',
      description:
        'Projects are still in progress. So check this white rabbit.',
    },
    {
      name: 'Red Panda',
      img: './red_panda.avif',
      description: 'Projects are still in progress. So check this red panda.',
    },
    {
      name: 'Black Swan',
      img: './black_swan.avif',
      description: 'Projects are still in progress. So check this black swan.',
    },
  ],

  [
    {
      name: 'Sea Turtle',
      img: './sea_turtle.avif',
      description: 'Projects are still in progress. So check this sea turtle.',
    },
    {
      name: 'Orange Parrot',
      img: './orange_parrot.avif',
      description:
        'Projects are still in progress. So check this orange parrot.',
    },
    {
      name: 'Cat',
      img: './cat.avif',
      description: 'Projects are still in progress. So check this cat',
    },
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
              style={{ fontSize: 2 }}
              alignCenter
              justifyCenter
            >
              {row.map((item, colIndex) => {
                return (
                  <Project
                    key={`row-${rowIndex}-col-${colIndex}`}
                    name={item.name}
                    img={item.img}
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
