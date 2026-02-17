import { useTranslation } from 'react-i18next';
import { Icon, Typography, TYPOGRAPHY_CONSTANTS } from 'src/components';

import { Clock } from 'src/assets/Icons';
import latestPost from 'src/mocks/BlogPost/latesPost';
import { useTheme } from 'styled-components';
import { helpLinks, usefulLinks } from '../footerLinks';
import {
  StyledAboutUsText,
  StyledColumn,
  StyledColumnTitle,
  StyledFooterNavigationContainer,
  StyledLink,
  StyledLinkItem,
  StyledLinksList,
  StyledOpeningHoursContainer,
  StyledOpeningHoursContent,
  StyledOpeningHoursIcon,
  StyledOpeningHoursTitle,
  StyledRecentPostContent,
  StyledRecentPostImage,
  StyledRecentPostItem,
  StyledRecentPostList
} from './FooterNavigation.styled';

const { h5, xsText, smText, mdText, lgText } = TYPOGRAPHY_CONSTANTS;

const FooterNavigation = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <StyledFooterNavigationContainer>
      <StyledColumn>
        <StyledColumnTitle>
          <Typography variant={h5} style={{ color: theme.colors.white }}>
            {t('footer.aboutUsTitle')}
          </Typography>
        </StyledColumnTitle>
        <StyledAboutUsText>
          <Typography variant={smText} style={{ color: theme.colors.white }}>
            {t('footer.aboutUsText')}
          </Typography>
        </StyledAboutUsText>

        <StyledOpeningHoursContainer>
          <StyledOpeningHoursIcon>
            <Icon IconComponent={Clock} size={40} />
          </StyledOpeningHoursIcon>
          <StyledOpeningHoursContent>
            <StyledOpeningHoursTitle>
              <Typography variant={mdText}>
                {t('footer.openingHouresTitle')}
              </Typography>
            </StyledOpeningHoursTitle>
            <Typography variant={xsText} style={{ color: theme.colors.white }}>
              {t('footer.openingHouresText')}
            </Typography>
            <Typography variant={xsText} style={{ color: theme.colors.white }}>
              {t('footer.openingHouresText2')}
            </Typography>
          </StyledOpeningHoursContent>
        </StyledOpeningHoursContainer>
      </StyledColumn>

      <StyledColumn>
        <StyledColumnTitle>
          <Typography variant={h5} style={{ color: theme.colors.white }}>
            {t('footer.usefulLinksTitle')}
          </Typography>
        </StyledColumnTitle>
        <StyledLinksList>
          {usefulLinks(t).map((link) => (
            <StyledLinkItem key={link.title}>
              <StyledLink to={link.href}>
                <Typography variant={lgText}>{link.title}</Typography>
              </StyledLink>
            </StyledLinkItem>
          ))}
        </StyledLinksList>
      </StyledColumn>

      <StyledColumn>
        <StyledColumnTitle>
          <Typography variant={h5} style={{ color: theme.colors.white }}>
            {t('footer.helpTitle')}
          </Typography>
        </StyledColumnTitle>
        <StyledLinksList>
          {helpLinks(t).map((link) => (
            <StyledLinkItem key={link.title}>
              <StyledLink to={link.href}>
                <Typography variant={lgText}>{link.title}</Typography>
              </StyledLink>
            </StyledLinkItem>
          ))}
        </StyledLinksList>
      </StyledColumn>

      <StyledColumn>
        <StyledColumnTitle>
          <Typography variant={h5} style={{ color: theme.colors.white }}>
            {t('footer.recentPostTitle')}
          </Typography>
        </StyledColumnTitle>
        <StyledRecentPostList>
          {latestPost.map((post) => (
            <StyledRecentPostItem key={post.id}>
              <StyledRecentPostImage src={post.image} alt={post.title} />
              <StyledRecentPostContent>
                <Typography
                  variant={xsText}
                  style={{ color: theme.colors.grey.g3 }}
                >
                  {post.date}
                </Typography>
                <Typography
                  variant={smText}
                  style={{ color: theme.colors.white }}
                >
                  {post.title}
                </Typography>
              </StyledRecentPostContent>
            </StyledRecentPostItem>
          ))}
        </StyledRecentPostList>
      </StyledColumn>
    </StyledFooterNavigationContainer>
  );
};

export default FooterNavigation;
