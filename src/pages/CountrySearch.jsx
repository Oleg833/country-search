import {
  Container,
  SearchForm,
  Section,
  CountryList,
  Loader,
} from 'components';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchByRegion } from 'service/country-service';

export const CountrySearch = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const region = searchParams.get('region');
    if (!region) return;
    setIsLoading(true);
    fetchByRegion(region)
      .then(data => {
        setCountries(data);
      })
      .catch(err => {
        alert(err.massage);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [searchParams]);

  const onSubmit = region => {
    setSearchParams({ region });
  };

  return (
    <Section>
      {isLoading && <Loader />}
      <Container>
        <SearchForm onSubmit={onSubmit} />
        <CountryList countries={countries} />
      </Container>
    </Section>
  );
};
