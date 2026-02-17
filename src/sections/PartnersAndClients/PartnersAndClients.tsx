import { useTranslation } from 'react-i18next';
import {
  bakeryPartner,
  bistroPartner,
  forkPartner,
  restaurantPartner,
  sweetBakeryPartner,
  wolfPartner
} from 'src/assets/Images';
import { Typography, TYPOGRAPHY_CONSTANTS } from 'src/components';
import { useTheme } from 'styled-components';
import {
  StyledPartnerLogo,
  StyledPartnersAndClientsContainer,
  StyledPartnersHeader,
  StyledPartnersLogos
} from './PartnersAndClients.styled';

const { h2, mdText } = TYPOGRAPHY_CONSTANTS;

const PARTNER_LOGOS = [
  { src: restaurantPartner, alt: 'Restaurant' },
  { src: sweetBakeryPartner, alt: 'Sweet Bakery' },
  { src: forkPartner, alt: 'Fork & Spoon' },
  { src: wolfPartner, alt: 'Wolf Coffee' },
  { src: bistroPartner, alt: 'Bistro' },
  { src: bakeryPartner, alt: 'Bakery' }
];

const PartnersAndClients = () => {
  const { t } = useTranslation();
  const { colors } = useTheme();

  return (
    <StyledPartnersAndClientsContainer>
      <StyledPartnersHeader>
        <Typography variant={mdText} style={{ color: colors.grey.g1 }}>
          {t('partnersAndClients.title')}
        </Typography>
        <Typography variant={h2} style={{ color: colors.grey.g1 }}>
          {t('partnersAndClients.subtitle')}
        </Typography>
      </StyledPartnersHeader>

      <StyledPartnersLogos>
        {PARTNER_LOGOS.map(({ src, alt }, index) => (
          <StyledPartnerLogo key={index} src={src} alt={alt} />
        ))}
      </StyledPartnersLogos>
    </StyledPartnersAndClientsContainer>
  );
};

export default PartnersAndClients;
