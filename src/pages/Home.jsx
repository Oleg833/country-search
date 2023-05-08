import { useEffect, useState } from 'react';
import { Container, CountryList, Loader, Section } from 'components';
import { getCountries } from 'service/country-service';

export const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    getCountries()
      .then(data => {
        setCountries(data);
      })
      .catch(err => {
        alert(err.massage);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);
  return (
    <Section>
      {isLoading && <Loader />}
      <Container>
        <CountryList countries={countries} />
      </Container>
    </Section>
  );
};
