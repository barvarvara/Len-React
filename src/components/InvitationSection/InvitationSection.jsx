import React from 'react';
import CustomButton from "../CustomButton/CustomButton";
import "./InvitationSection.scss"

const InvitationSection = () => {
  return (
    <section className="invitation container">
      <p><strong> Приглашаем лепить и творить!</strong></p>
      <p className="invitation__address">Мы живём здесь:
        <a href="https://yandex.ru/profile/-/CDUmMZl9"> г. Белгород, ул. Архиерейская, 18
        </a>
      </p>

      <CustomButton href="/" addStyle="invitation__link"> Записаться </CustomButton>
    </section>
  );
};

export default InvitationSection;