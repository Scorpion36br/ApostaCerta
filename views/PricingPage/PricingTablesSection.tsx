import React from 'react';
import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import PricingCard from 'components/PricingCard';
import SectionTitle from 'components/SectionTitle';

export default function PricingTablesSection() {
  return (
    <Wrapper>
      <SectionTitle>Escolha o Grupo que Combina com Sua Estratégia :</SectionTitle>
      <AutofitGrid>
        <PricingCard
          title="Grupo 6 Minutos"
          description="🔥 Alta Taxa de Acertos 🔥"
          benefits={['1 seat', '1 active project', 'Ulimited viewers', '10 blocks']}
        >
          $0<span>/month</span>
        </PricingCard>
        <PricingCard
          title="Grupo 8 Minutos"
          description="🔥 Mais Vendido 🔥"
          benefits={['1 seat', '3 active project', 'Ulimited viewers', '100 blocks', 'CSV Downloader', 'Password protection']}
          isOutlined
        >
          $29<span>/month</span>
        </PricingCard>
        <PricingCard
          title="Grupo 12 Minutos"
          description="🔥 Lucro Garantido 🔥"
          benefits={[
            '10 seat',
            '10 active project',
            'Ulimited viewers',
            'Unlimited blocks',
            'CSV Downloader',
            'Password protection',
            'Customization',
          ]}
        >
          $79<span>/month</span>
        </PricingCard>

        <PricingCard
          title="Grupo 12 Minutos"
          description="🔥 Lucro Garantido 🔥"
          benefits={[
            '10 seat',
            '10 active project',
            'Ulimited viewers',
            'Unlimited blocks',
            'CSV Downloader',
            'Password protection',
            'Customization',
          ]}
        >
          $79<span>/month</span>
        </PricingCard>
      </AutofitGrid>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  & > *:not(:first-child) {
    margin-top: 8rem;
  }
`;
