// import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

const fetchProducts = async () => {
  const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        return data.products;
};


const Products = () => {

  const { isLoading, error, data: products, } = useQuery({ queryKey: ['products'], queryFn: fetchProducts, staleTime: 10000});

  // const [products, setProducts] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   const fetchProducts = async () => {

  //     try {
  //       setIsLoading(true);
  //       setError(null);
  //       const response = await fetch("https://dummyjson.com/products");
  //       const data = await response.json();

  // console.log(data);
  //       console.log(data.products);
  //       setProducts(data.products);
  //       setIsLoading(false);

  //     } catch (error) {
  //       setError(error.message);
  //       setIsLoading(false);
  //     }
  //   };
  //   fetchProducts();
  // }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h3>Error: {error.message}</h3>;
  }

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Customers also Purchased
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div
              key={product.id}
              href={product.href}
              className="group relative"
            >
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <h3 className="text-sm text-gray-700">
                  <Link to={`/products/${product.id}`}>
                    <span
                      aria-hidden="true"
                      className="absolute inset-0"
                    ></span>
                    {product.title}
                  </Link>
                </h3>
                <div>
                  <p class="mt-1 text-sm text-gray-500">{product.category}</p>
                </div>

                <p className="mt-1 text-lg font-medium text-gray-900">
                  ${product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
