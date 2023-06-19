"use client";

import { useState } from "react";
import Image from "next/image";
import { CarProps } from "@/types";
import Button from "./Button";
import { calculateCarRent } from "@/utils";

interface CarCardProps{
    car: CarProps;
}

const CarCard = ({car} : CarCardProps) => {
  const {city_mpg, year, make, model, transmission, drive} = car;
  const carRent = calculateCarRent(city_mpg, year);

  
  return (
    <div className="car-card group">
        <div className="car-card__content">
            <h2 className="car-card__content-title">
                {make} {model}
            </h2>
        </div>

        <p>
            <span>
                Car Rent...
            </span>
        </p>
    </div>
  )
}

export default CarCard