import React from 'react';
import CustomButton from "../CustomButton/CustomButton";
import "./MasterClassCard.scss"

const MasterClassCard = ({
                           title,
                           description,
                           imgSrc,
                           imgAlt
                         }) => {
  return (
    <figure className="card">
      <img src={require(`${imgSrc}`)} alt={imgAlt}/>

      <figcaption>
        <h4>{title}</h4>
        <p>{description}</p>

        <div>
          <CustomButton href="#" addStyle="link">Записаться</CustomButton>
        </div>
      </figcaption>

    </figure>
  );
};

export default MasterClassCard;