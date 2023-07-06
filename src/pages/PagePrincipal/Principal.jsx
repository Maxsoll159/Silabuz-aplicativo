import { CardProductos } from "../../components/Cards/CardProductos";
import { getProducts } from "../../helpers/ApiProducts";
import useSWR from "swr";
export const Principal = () => {
  const { data, error, isLoading } = useSWR("ApiProductos", getProducts);
  if (error) return <div>Error....</div>;
  if (isLoading) return <div>Cargandoo.....</div>;
    console.log(data)
  return (
    <section>
      <article className="container mx-auto">
        <p className="text-2xl font-bold text-center py-20">
          MI TIENDITA ONLINE
        </p>
      </article>
      <article className="container mx-auto">
        <p>Mis Productos: </p>
        <div className="grid grid-cols-4 gap-5">
          {data.map((prod) => (
            <CardProductos producto={prod} key={prod.id} />
          ))}
        </div>
      </article>
    </section>
  );
};
