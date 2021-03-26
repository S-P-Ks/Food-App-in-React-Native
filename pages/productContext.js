import React from "react";

const ProductContext = React.createContext();

export const UserProvider = ProductContext.Provider;
export const UserConsumer = ProductContext.Consumer;

export default ProductContext;
