def on_forever():
    # store the compass_heading value in a variable called "degrees"
    degrees = input.compass_heading()

    # convert the compass degrees to a string
    direction = get_cardinal_direction(degrees)

    # show the compass
    basic.show_string(direction)

def get_cardinal_direction(compass_value):
    # this method converts a compass value into a map direction
    if 22.5 <= compass_value < 67.5:
            return "NE"
    elif 67.5 <= compass_value < 112.5:
        return "E"
    elif 112.5 <= compass_value < 157.5:
        return "SE"
    elif 157.5 <= compass_value < 202.5:
        return "S"
    elif 202.5 <= compass_value < 247.5:
        return "SW"
    elif 247.5 <= compass_value < 292.5:
        return "W"
    elif 292.5 <= compass_value < 337.5:
        return "NW"
    else:
        return "N"

basic.forever(on_forever)