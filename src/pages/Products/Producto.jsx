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
      {data.statusCode === 400 ? (
        <Navigate to="/" />
      ) : (
        <article className="container mx-auto">
          <div className="grid grid-cols-2">
            <img src={data?.images[0]} alt="" />
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
      )}
    </section>
  );
};
