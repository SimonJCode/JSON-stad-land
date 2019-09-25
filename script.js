//Call getJson function.
getJson();

//Function that prints out lists of countries and its cities.
async function getJson(){
    
    //Fetch stad.json file and convert to json objects stored in "cities".
    const respCities = await fetch("stad.json");
    const cities = await respCities.json();
    //Same as above but countries
    const respCountries = await fetch("land.json");
    const countries = await respCountries.json();

    //Sort all cities by population.
    cities.sort(function(a, b){
        return b.population - a.population;
    });

    //For each country print a <h2> with country name inside of a new <div> and append to body.
        for(i = 0; i < countries.length; i++){
            let div = document.createElement("div");
            let h2 = document.createElement("h2");
            h2.innerHTML = countries[i].countryname;
            document.body.appendChild(div);
            div.appendChild(h2);      
            div.id = "div" + i;
        }

    //For each city, check countryid and append to the correct country div as a <p>
        for(i = 0; i < cities.length; i++){
            let p = document.createElement("p");
            p.innerHTML = cities[i].stadname;

                if(cities[i].countryid === 1){
                    document.getElementById("div0").appendChild(p);
                }
                else if(cities[i].countryid === 2){
                    document.getElementById("div1").appendChild(p);
                }
                else{
                    document.getElementById("div2").appendChild(p);
                }
        }
        
    //Log all objects for debuging    
    console.log(countries);
    console.log(cities);
}