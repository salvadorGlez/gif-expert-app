import GifGridItem from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

const GifGrid = ({ category }) => {

    const { data:gifs, loading } = useFetchGifs(category);

    return (
        <>
            <h3>{ category }</h3>
            <div className="card-grid">
                {loading ? (
                    <h1>Loading...</h1>
                ) : gifs.map(({ id, title, url }, key) => (
                    <GifGridItem
                        key={ id }
                        title={ title }
                        url={ url }
                        delay={ key }
                    />
                ))}
            </div>
        </>
    );
}

export default GifGrid;