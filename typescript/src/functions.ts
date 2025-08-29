
function calculate_tax(income: number, taxYear: number = 1999): number{
//all code paths are returning some value
    if(taxYear>2022)
        return income*1.5;
    return income * 1.0;
}

calculate_tax(150); //only takes as many number of arguments as we have mentioned unlike