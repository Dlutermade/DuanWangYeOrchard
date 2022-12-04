import React, { useState } from 'react';
import style from './Card.module.css';
import CardBack from './CardBack';
import CardFront from './CardFront';

type Item = {
  title: string;
  img: string;
  list: string[];
};

type Props = {
  item: Item;
};

const Card: React.FC<Props> = ({ item }) => {
  const [hovered, setHovered] = useState(false);
  const handleMouseEnter = () => setHovered(() => true);
  const handleMouseLeave = () => setHovered(() => false);

  return (
    <div
      className={`${style.Card} relative ${
        hovered && item.list.length > 5 ? 'h-[500px]' : 'h-96'
      } w-80 text-center duration-700`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <CardFront title={item.title} img={item.img} />
      <CardBack title={item.title} img={item.img} list={[...item.list]} />
    </div>
  );
};

export default Card;
