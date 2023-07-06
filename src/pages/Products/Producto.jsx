import { Navigate, useParams } from "react-router-dom";
import { getProductsID } from "../../helpers/ApiProducts";
import useSWR from "swr";
export const Producto = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useSWR(`${id}`, getProductsID);
  if (error) return <div>Error....</div>;
  if (isLoading) return <div>Cargandoo.....</div>;
  return (
    <section>
      <article className="container mx-auto">
        <div className="grid grid-cols-2">
          <div>
            <img src={data?.images[0]} alt="" />
            <div className="flex">
              {data.images.map((img) => (
                <img src={img} alt="" key={img} width={100} />
              ))}
            </div>
          </div>
          <div>
            <p>{data.title}</p>
            <p>{data.category.name}</p>
            <p>S/. {data.price}</p>
            <div>
              <p>Descripcion</p>
              <p>{data.description}</p>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};
