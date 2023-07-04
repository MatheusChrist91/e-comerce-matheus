import Card from '../Components/Card'
import React, { useContext } from "react";
import { ProductContext } from "../hooks/useProductContext";

const Home = () => {

  const {products, searchFilterName, searchCategory, setSearchCategory, filterCategory, searchFilterPrice } = useContext(ProductContext);

  return (
    <>
    <div>
    <div className="flex justify-end mt-4">
        <div className="rounded border flex">
          <select name="filtros-categoria" id="filtors" className="w-48" value={searchCategory} onChange={(e) => setSearchCategory(e.target.value)}>
            <option value="">Selecionar</option>
            <option value="maiorDeTres">maior de 3 anos</option>
            <option value="qualquerIdade">qualquer idade</option>
          </select>
        </div>
      </div>
    <div className=" flex flex-wrap justify-center">
    {products
            .filter(searchFilterPrice)
            .filter(filterCategory)
            .filter(searchFilterName)
            .map((product, index) => {
              return <Card product={product} key={index} />;
            })}
    </div>
    </div>        
    </>
  )
}

export default Home