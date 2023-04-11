function get_cardinal_direction(compass_value: number): string {
    //  this method converts a compass value into a map direction
    if (22.5 <= compass_value && compass_value < 67.5) {
        return "NE"
    } else if (67.5 <= compass_value && compass_value < 112.5) {
        return "E"
    } else if (112.5 <= compass_value && compass_value < 157.5) {
        return "SE"
    } else if (157.5 <= compass_value && compass_value < 202.5) {
        return "S"
    } else if (202.5 <= compass_value && compass_value < 247.5) {
        return "SW"
    } else if (247.5 <= compass_value && compass_value < 292.5) {
        return "W"
    } else if (292.5 <= compass_value && compass_value < 337.5) {
        return "NW"
    } else {
        return "N"
    }
    
}

basic.forever(function on_forever() {
    //  store the compass_heading value in a variable called "degrees"
    let degrees = input.compassHeading()
    //  convert the compass degrees to a string
    let direction = get_cardinal_direction(degrees)
    //  show the compass
    basic.showString(direction)
})
