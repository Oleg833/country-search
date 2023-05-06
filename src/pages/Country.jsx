import { Section, Container, CountryInfo, Loader } from 'components';
import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { fetchCountry } from 'service/country-service';
import { GoBackBtn } from 'components/GoBackBtn/GoBackBtn';

export const Country = () => {
  const [country, setCountry] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { countryId } = useParams();

  const location = useLocation();
  const goBackLink = location?.state?.from || '/';
  useEffect(() => {
    setIsLoading(true);
    fetchCountry(countryId)
      .then(data => {
        setCountry(data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [countryId]);
  if (!country)
    return (
      <Section>
        <Loader />
      </Section>
    );

  return (
    <Section>
      {isLoading && <Loader />}
      <Container>
        <GoBackBtn path={goBackLink}>Back to coutries</GoBackBtn>
        <CountryInfo {...country} />
      </Container>
    </Section>
  );
};
