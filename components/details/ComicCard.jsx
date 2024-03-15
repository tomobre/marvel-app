import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const Wrapper = styled.div`
  position: relative;
  scroll-snap-align: center;
  margin-right: 15px;
  width: 150px;
`;

export default function ComicCard({ image, title, date }) {
  return (
    <Wrapper>
      {image ? (
        <Image
          priority={false}
          alt={title || 'hero image'}
          width={150}
          height={240}
          src={image}
        />
      ) : (
        <Image
          priority={false}
          alt={'image hero not found'}
          width={150}
          height={240}
          src={'/assets/image_not_available.webp'}
        />
      )}
      <h3 role='heading' style={{ fontSize: '13px' }}>
        {title}
      </h3>
      <p role='paragraph' style={{ fontSize: '13px' }}>
        {date}
      </p>
    </Wrapper>
  );
}
