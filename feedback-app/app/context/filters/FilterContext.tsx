"use client"
import { FilterContextType } from "@/app/types/FilterContextType"
import { createContext } from "react"


const FilterContext = createContext<any>(null)

export default FilterContext