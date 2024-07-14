function make_great(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + '    the great'
    }                // i stand for index string
}
const magicians2: string[] = ["ali", "hamza", "usman"];
make_great(magicians2)
show_magicians(magicians2)