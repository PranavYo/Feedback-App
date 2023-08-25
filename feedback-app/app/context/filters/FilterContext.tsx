"use client"
import { FilterContextType } from "@/app/types/FilterContextType"
import { createContext } from "react"


const FilterContext = createContext<FilterContextType | null>(null)

export default FilterContext