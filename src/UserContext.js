// this is the context that we share between all our components

import { createContext, useContext } from "react";

export const UserContext = createContext(null) ;
// initial value = 'null'