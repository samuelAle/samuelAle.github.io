import IndexLayout from '../layouts';
import Wrapper from '../components/Wrapper';
import SiteNav from '../components/header/SiteNav';
import { SiteHeader, outer, inner, SiteMain } from '../styles/shared';
import * as React from 'react';
import { css } from '@emotion/core';

import { PostFullHeader, PostFullTitle, NoImage, PostFull } from '../templates/post';
import { PostFullContent } from '../components/PostContent';
import Footer from '../components/Footer';
import Helmet from 'react-helmet';

const PageTemplate = css`
  .site-main {
    background: #fff;
    padding-bottom: 4vw;
  }
`;

const About: React.FC = () => (
  <IndexLayout>
    <Helmet>
      <title>About</title>
    </Helmet>
    <Wrapper css={PageTemplate}>
      <header css={[outer, SiteHeader]}>
        <div css={inner}>
          <SiteNav />
        </div>
      </header>
      <main id="site-main" className="site-main" css={[SiteMain, outer]}>
        <article className="post page" css={[PostFull, NoImage]}>
          <PostFullHeader>
            <PostFullTitle>About</PostFullTitle>
          </PostFullHeader>

          <PostFullContent className="post-full-content">
            <div className="post-content">
              <p>
                I've always been the type of person to let my actions do the talking,
                so writing about myself is quite the task. I am part of the millenial
                generation that grew up with technology as it evolved and became an integral part of our daily lives.
                So an interesting way to start this introduction is to show the "about me"
                section of my first social media site, MySpace. Please bear with me:
              </p>

              <p>
                whuz good, dis yo boi sam (all-about-chu).
                if you see me im probably fitted n hella fresh.
                im a nice guy i guess, im laid back, im almost always
                tryin to be funny so dont always take me seriously,
                just want to have fun and im not conceited! i dont hate
                nobody and nobody hates me. im 16 n im black er ethiopian but
                you probably cant tell and for the record ethiopia wasnt
                enslaved so the n word dont mean shit to me. n e ways i
                live in seattle en i go to lindbergh high school,
                which is probably the boringest school in washington.
                i dont smoke no stank you, i barely ever drink and hell no to drugz.
                i get good grades n not because imma nerd juss cuz i got a future.
                ill die for a lady thats got body humor looks and isnt
                hella dumb or hella conceited. ther is just one thing that you should know about me...
                i dont give a shit about what nobody thinks of me or who i hang out wit. comment me and my pics. peace
              </p>

              <p>
                If you know me today, you're probably having trouble imagining me say those things.
                What is most interesting about this excerpt from my teenage years is
                not the fact that I went out of my way to misspell every other word,
                or the drastic change in personality. What is interesting is that even today,
                I do not disagree with anything that I have said. Yes, that's right.
                I am always trying to have a laugh whenever circumstance permits, so don't always take me seriously.
                I have no reservations about my heritage or race. 
                My recreational activities don't include much besides an occasional drink.
                I am an ambitious person that defies the stereotype of a nerd.
                And of course I look good...
              </p>

              <p>
                I was born and raised in Renton where, unfortunately, I wasn't surround by the best of influences
                (as you may be able to tell from the MySpace excerpt).
                However the unfortunate circumstance was offset with the fortunate circumstance of
                living in a state that was home to large STEM companies like Microsoft, Amazon & Boeing.
                This made my career in computer science much more accessible.
                I am very passionate about computer science and the direction the world is going as a result of its practice.
                I want to be a driving factor or influence that can help advance the world to become
                even more efficient and solve difficult problems.
              </p>

              <p>If you would like to chat more, feel free to email me at samuel (dot) alebachew at gmail.</p>

              </p>Here is my (probably out-of-date) [resume] if you would like to invite me to work on something cool.</p>
            </div>
          </PostFullContent>
        </article>
      </main>
      <Footer />
    </Wrapper>
  </IndexLayout>
);

export default About;
