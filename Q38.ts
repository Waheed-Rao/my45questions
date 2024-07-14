function describe_city (city:string, country: string = 'Pakistan'): void{
    console.log(`${city} is in ${country}`)
}
describe_city('Karachi')
describe_city('Italy', "Europe")
describe_city('Lahore', 'Punjab')