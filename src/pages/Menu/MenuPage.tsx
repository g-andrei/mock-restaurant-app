import React from 'react';
import fullMenuMockData from 'src/mocks/Menu/fullMenu';
import { Achievement, PartnersAndClients } from 'src/sections';
import { StyledMenuPageContainer } from './MenuPage.styled';
import MenuSection from './MenuSection';

const MenuPage = () => {
  return (
    <StyledMenuPageContainer>
      {fullMenuMockData.map((section, index) => (
        <React.Fragment key={section.id}>
          <MenuSection
            title={section.title}
            items={section.items}
            decorativeImg={section.decorativeImg}
            reverse={index % 2 !== 0}
          />
          {index === 1 && <Achievement />}
        </React.Fragment>
      ))}
      <PartnersAndClients />
    </StyledMenuPageContainer>
  );
};

export default MenuPage;
