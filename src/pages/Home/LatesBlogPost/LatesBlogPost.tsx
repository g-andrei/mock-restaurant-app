import { useTranslation } from 'react-i18next';

import { ChatDots, Like, ShareNetwork } from 'src/assets/Icons';
import { Icon, Typography, TYPOGRAPHY_CONSTANTS } from 'src/components';
import latestPost from 'src/mocks/BlogPost/latesPost';
import { highlightFirstLetters } from 'src/utils/textHelpers';
import { useTheme } from 'styled-components';

import {
  StyledCardActionButton,
  StyledCardActionsIcons,
  StyledCardTextBlock,
  StyledLatesBlogPostCard,
  StyledLatesBlogPostCardActions,
  StyledLatesBlogPostCardContent,
  StyledLatesBlogPostCardImage,
  StyledLatesBlogPostsContainer,
  StyledLatesBlogPostHeader,
  StyledLearnMoreLink,
  StyleLatesBlogPostContaienr
} from './LatesBlogPost.styled';

const { handText, h5, smText } = TYPOGRAPHY_CONSTANTS;
const ICON_SIZE = 20;

const LatesBlogPost = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const { colors } = theme;

  return (
    <StyleLatesBlogPostContaienr>
      <StyledLatesBlogPostHeader>
        <Typography variant={handText} style={{ color: colors.primary }}>
          {t('latesBlogPost.title')}
        </Typography>
        <Typography variant={h5} style={{ color: colors.white }}>
          {highlightFirstLetters(t('latesBlogPost.heading'))}
        </Typography>
      </StyledLatesBlogPostHeader>

      <StyledLatesBlogPostsContainer>
        {latestPost.map((post) => (
          <StyledLatesBlogPostCard key={post.id}>
            <StyledLatesBlogPostCardImage src={post.image} alt={post.title} />

            <StyledLatesBlogPostCardContent>
              <StyledCardTextBlock>
                <Typography variant={smText} style={{ color: colors.primary }}>
                  {post.date}
                </Typography>
                <Typography variant={smText} style={{ color: colors.white }}>
                  {post.title}
                </Typography>
              </StyledCardTextBlock>

              <StyledLatesBlogPostCardActions>
                {/* TODO: Add redirect to full blog page */}
                <StyledLearnMoreLink type="button">
                  <Typography variant={smText}>
                    {t('button.learMore')}
                  </Typography>
                </StyledLearnMoreLink>
                <StyledCardActionsIcons>
                  {/* TODO: Add logic for like blog post */}
                  <StyledCardActionButton type="button" aria-label="Like">
                    <Icon IconComponent={Like} size={ICON_SIZE} />
                  </StyledCardActionButton>
                  {/* TODO: Add redirect to comment section of the blog post */}
                  <StyledCardActionButton type="button" aria-label="Comments">
                    <Icon IconComponent={ChatDots} size={ICON_SIZE} />
                  </StyledCardActionButton>
                  {/* TODO: Add logic for share the blog post */}
                  <StyledCardActionButton type="button" aria-label="Share">
                    <Icon IconComponent={ShareNetwork} size={ICON_SIZE} />
                  </StyledCardActionButton>
                </StyledCardActionsIcons>
              </StyledLatesBlogPostCardActions>
            </StyledLatesBlogPostCardContent>
          </StyledLatesBlogPostCard>
        ))}
      </StyledLatesBlogPostsContainer>
    </StyleLatesBlogPostContaienr>
  );
};

export default LatesBlogPost;
