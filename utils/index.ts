import * as dotenv from "dotenv";

export async function fetchCars(){
    const headers = {
        'X-RapidAPI-Key': process.env.NEXT_RAPID_API_KEY,
        'X-RapidAPI-Host': process.env.NEXT_RAPID_API_HOST,
    }
    const response =  await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {headers: headers});
    const result = await response.json();
    return result;
}

export const calculateCarRent = (city_mpg : number, year : number) => {

    //Base rental price per day in dollars
    const basePricePerDay = 50;
    //Aditional rate per mile driven
    const mileageFactor = 0.1;
    //Additional rate per year of vehicle age
    const ageFactor = 0.005;

    //Calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;

    //Calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

    return rentalRatePerDay.toFixed(0);
}