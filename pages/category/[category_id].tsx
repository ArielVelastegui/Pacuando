import { useRouter } from 'next/router';
import InterestCard from '../../components/InterestCard';
import CategoryBanner from '../../components/categoryPage/CategoryBanner';
import DetailHeader from '../../components/detailPage/DetailHeader';
import { Layout } from '../../components/layout/Layout';
import { EventSlider } from '../../components/sliders/EventSlider/EventSlider';
import { usePublications } from '../../lib/services/publication.services';
import { NextPageWithLayout } from '../page';
export const CategoryPage: NextPageWithLayout = () => {
  const router = useRouter();
  const { category_id } = router.query;

  const { data, error, isLoading } = usePublications();

  return (
    <div>
      <CategoryBanner category={category_id} />
      <DetailHeader categories={['tiendas', 'marcas']} />

      <EventSlider
        title="Populares en tu zona"
        subtitle="Lo que las personas piden más"
        events={data?.results}
      />
      <EventSlider
        title="Sugerencias para ti"
        subtitle="Publicaciones que podrías colaborar"
        events={data?.results}
      />

      <EventSlider
        title="Populares en tu zona"
        subtitle="Lo que las personas piden más"
        events={data?.results}
      />
      <InterestCard />
      <EventSlider
        title="Recientes"
        subtitle="Las personas últimamente están hablando de esto"
        events={data?.results}
      />
    </div>
  );
};

CategoryPage.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};

export default CategoryPage;
