import { createContext, useEffect, useState } from "react";

// PRODUTOS
import db from "../db/db"

// Varivel de crição do contextoO
export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading] = useState(false);
  const [name, setName] = useState('')
  const [searchCategory, setSearchCategory] = useState('')
  const [preco, setPreco] = useState('')

  useEffect(() => {
    setProducts(db);
  }, []);

/*   FUNÇÃO FILTRA NOME */

const searchFilterName = (product) => {
/*  filter */ return product.name.toLowerCase().includes(name.toLowerCase())
}

/* funçao procurar preço */
const searchFilterPrice = (product) => {
  if (preco === 0) {
    return product;
  }

  return preco === "0" || (preco ? product.price <= preco : true);
};

const filterCategory = (product) => {
  /* const filterCategory = product.filter((product) => product.category) */
  if(searchCategory === 'maiorDeTres'){
    return product.category.includes(searchCategory)
  }else if(searchCategory === 'qualquerIdade'){
    return product.category.includes(searchCategory)
  }else{
    return product
  }
}


  console.log(products);
  return (
    <ProductContext.Provider value={{ products, loading, name, setName, searchFilterName, searchCategory, setSearchCategory, filterCategory, searchFilterPrice, preco, setPreco }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider