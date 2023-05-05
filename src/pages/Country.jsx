import { Section, Container, CountryInfo } from 'components';
import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { fetchCountry } from 'service/country-service';
import { GoBackBtn } from 'components/GoBackBtn/GoBackBtn';

export const Country = () => {
  const [country, setCountry] = useState(null);
  const { countryId } = useParams();

  const location = useLocation();
  const goBackLink = location?.state?.from || '/';
  useEffect(() => {
    fetchCountry(countryId).then(data => {
      setCountry(data);
    });
  }, [countryId]);
  if (!country) return;
  return (
    <Section>
      <Container>
        <GoBackBtn path={goBackLink}>Back to coutries</GoBackBtn>
        <CountryInfo {...country} />
      </Container>
    </Section>
  );
};
