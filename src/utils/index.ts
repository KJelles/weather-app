export const convertFromKelvinToCelsius = (kelvin: number) => {
  return kelvin - 273.15;
};

export const round = (value: number, decimals: number) => {
  return Number(Math.round(Number(`${value}e${decimals}`)) + "e-" + decimals);
};