function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + '    the great';
    } // i stand for index string
}
var magicians2 = ["ali", "hamza", "usman"];
make_great(magicians2);
show_magicians(magicians2);
