import { StateCreator } from 'zustand';
import {
	getCategories,
	getRecipeById,
	getRecipes,
} from '../services/RecipeService';
import type { Categories, Drink, Drinks, SearchFilter } from '../types';

export type RecipeSliceType = {
	categories: Categories;
	drinks: Drinks;
	fetchCategories: () => Promise<void>;
	searchRecipes: (SearchFilters: SearchFilter) => Promise<void>;
	selectRecipe: (id: Drink['idDrink']) => Promise<void>;
};

export const createRecipeSlice: StateCreator<RecipeSliceType> = (set) => ({
	categories: {
		drinks: [],
	},
	drinks: {
		drinks: [],
	},
	fetchCategories: async () => {
		const categories = await getCategories();
		set({ categories });
	},
	searchRecipes: async (filters) => {
		const drinks = await getRecipes(filters);
		set({ drinks });
	},
	selectRecipe: async (id) => {
		const selectRecipe = await getRecipeById(id);
		console.log(selectRecipe);
	},
});
