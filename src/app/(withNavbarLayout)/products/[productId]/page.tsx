import Image from "next/image";

interface ProductId {
  params: {
    productId: string;
  };
}

const ProductDetailsPage = async ({ params }: ProductId) => {
  const res = await fetch(
    `http://localhost:5000/api/v1/products/${params.productId}`
  );
  const product = await res.json();
  return (
    <>
      {" "}
      <div className="flex lg:flex-row flex-col mx-auto my-10 lg:px-10 px-0">
        <div className="flex lg:flex-row flex-col w-full">
          <div className="mr-3">
            <Image
              src={product.images?.[1] || ""}
              alt={product.name || ""}
              objectFit="cover"
              width={400}
              height={200}
              key={product._id || ""}
            />
            <Image
              src={product.images?.[0] || ""}
              alt={product.name || ""}
              objectFit="cover"
              width={400}
              height={200}
              key={product._id || ""}
              className="mt-3"
            />
            <Image
              src={product.images?.[1] || ""}
              alt={product.name || ""}
              objectFit="cover"
              width={400}
              height={200}
              key={product._id || ""}
              className="mt-3"
            />
          </div>
          <Image
            src={product.images?.[0] || ""}
            alt={product.name || ""}
            objectFit="cover"
            width={500}
            height={200}
            key={product._id || ""}
          />
        </div>
        <div className="w-1/2 ml-4 px-5 mx-auto py-5">
          <h1 className="text-2xl font-semibold">{product.name}</h1>
          <div className="mt-5 flex gap-5">
            <p className="text-2xl">
              {" "}
              Price : <span className="text-lime-500">${product.price}</span> |
            </p>
            <p className="text-2xl"> Rating : {product.ratings}</p>
          </div>
          <div className="mt-5 gap-5">
            <p className="text-2xl"> Brand : {product.brand} </p>
            <p className="text-2xl mt-5"> Category : {product.category}</p>
          </div>
          <div>
            <p className="text-2xl mt-5">
              {" "}
              FlashSale : {product.flashSale ? "True" : "No FlashSale"}
            </p>
            <p className="text-2xl mt-5">
              {" "}
              Discount : {product.discount || "Now Discount"}
            </p>
          </div>
        </div>
      </div>
      <p className="px-10">About Phone:</p>
      <p className="text-xl mt-4 px-10 mb-10">{product.description}</p>
    </>
  );
};

export default ProductDetailsPage;
