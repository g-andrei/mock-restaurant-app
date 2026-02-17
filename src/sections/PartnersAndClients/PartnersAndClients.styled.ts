import styled, { css } from 'styled-components';

export const StyledPartnersAndClientsContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledPartnersHeader = styled.div(({ theme }) => {
  const { spacings } = theme;
  return css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${spacings.s8};
    margin-bottom: ${spacings.s56};
  `;
});

export const StyledPartnersLogos = styled.div(({ theme }) => {
  const { spacings } = theme;
  return css`
    display: flex;
    justify-content: space-between;
    width: calc(100% - ${spacings.s600});
  `;
});

export const StyledPartnerLogo = styled.img(({ theme }) => {
  const { spacings } = theme;
  return css`
    height: ${spacings.s132};
    width: auto;
  `;
});
